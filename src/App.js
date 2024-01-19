import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import WeatherContent from './context/context';
import useApi from './hooks/useApi';
import useFilter from './hooks/useFilter';
import Tiles from './components/Tiles';
import Modal from './components/Modal';
import Skeleton from './components/Skeleton';

import WeatherImage from './assets/images/weather-photo.jpg';

function App() {
	const modalHolder = document.getElementById('modal-holder');

	const { location, data, setData } = useContext(WeatherContent);
	const days = useFilter(data);

	useEffect(() => {
		const handleApiData = async () => {
			const { data } = await useApi.get(
				`forecast?lat=${location[0]}&lon=${location[1]}&appid=d3ce61618666a0b7f43c0a5f1c1b718b&units=metric&cnt`
			);

			setData(data);
		};

		handleApiData();
	}, [location]);

	return (
		<div className='wrapper'>
			<div
				className='section'
				style={{ backgroundImage: `url(${WeatherImage})` }}
			>
				<div className='shell'>
					{Object.keys(data).length === 0 ? (
						<Skeleton times={5} />
					) : (
						<Tiles days={days} />
					)}
					{createPortal(<Modal />, modalHolder)}
				</div>
			</div>
		</div>
	);
}

export default App;
