import { useContext, useEffect, useState } from 'react';
import WeatherContent from '../context/context';

function Modal() {
	const { setLocation } = useContext(WeatherContent);
	const [isShowing, setIsShowing] = useState(false);

	const handleAccept = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			const lat = position.coords.latitude;
			const lon = position.coords.longitude;
			const userPosition = [lat, lon];
			setLocation(userPosition);
		});

		setIsShowing(false);
	};

	const handleRefuse = () => {
		setIsShowing(false);
	};

	useEffect(() => {
		setIsShowing(true);
	}, []);

	const activeClass = isShowing ? 'is-active' : '';

	return (
		<div className={`modal ${activeClass} `}>
			<div className='modal__backdrop'></div>

			<div className='modal__body'>
				<div className='modal__content'>
					<div className='modal__inner'>
						<p>Can we get your location</p>
					</div>

					<div className='modal__actions'>
						<button className='btn modal__btn' onClick={handleAccept}>
							Accept
						</button>

						<button className='btn modal__btn' onClick={handleRefuse}>
							Refuse
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
