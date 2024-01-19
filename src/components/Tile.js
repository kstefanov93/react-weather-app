import { useState } from 'react';
import ModalTile from './ModalTile';

function Tile({ day }) {
	const [isVisible, setIsVisible] = useState(false);

	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	const date = new Date(day[0].dt_txt);
	const dayName = days[date.getDay()];

	const { temp_max, feels_like } = day[0].main;
	const { temp_min } = day[1].main;
	const { description, icon } = day[0].weather[0];
	const { speed } = day[0].wind;

	const weatherIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`;

	const handleClick = () => {
		setIsVisible(!isVisible);
		document.querySelector('body').classList.toggle('is-fixed');
	};

	return (
		<div className='tile'>
			<div className='tile__inner' onClick={handleClick}>
				<ul>
					<li>
						<img src={weatherIcon} alt='' />
					</li>

					<li>
						<p>{dayName}</p>

						<small>{day[0].dt_txt.split(' ')[0]}</small>
					</li>

					<li>{description}</li>

					<li>Temp max: {Math.round(temp_max)}</li>

					<li>Temp min: {Math.round(temp_min)}</li>

					<li>Feels like: {Math.round(feels_like)}</li>

					<li>Wind: {Math.round(speed)}</li>
				</ul>
			</div>

			<ModalTile
				day={day}
				dayName={dayName}
				handleClick={handleClick}
				isVisible={isVisible}
			/>
		</div>
	);
}

export default Tile;
