import { useContext } from 'react';
import WeatherContent from '../context/context';

function ModalTile({ day, dayName, handleClick, isVisible }) {
	const context = useContext(WeatherContent);
	const { data } = context;
	const { country, name } = data.city;
	const { temp_max, feels_like, humidity, sea_level, pressure } = day[0].main;
	const { temp_min } = day[1].main;
	const { description, icon } = day[0].weather[0];
	const { speed, gust } = day[0].wind;

	const weatherIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`;

	const activeClass = isVisible ? 'is-visible' : '';

	return (
		<div className={`modal-tile ${activeClass}`}>
			<div className='modal__backdrop' onClick={handleClick}></div>

			<div className='modal__content'>
				<div className='modal__inner'>
					<div className='modal__icon' onClick={handleClick}>
						X
					</div>

					<div className='modal__head'>
						<h2>
							{name} {country}
						</h2>

						<h4>{dayName}</h4>
					</div>

					<div className='modal__body'>
						<ul>
							<li>
								<img src={weatherIcon} alt='icon' />
							</li>
							<li>{description}</li>

							<li>Temp max: {Math.round(temp_max)}</li>

							<li>Temp min: {Math.round(temp_min)}</li>

							<li>Feels like: {Math.round(feels_like)}</li>
							<li>Humidity: {humidity}</li>
							<li>Sea Level: {sea_level}</li>
							<li>Pressure: {pressure}</li>
							<li>Wind Speed: {speed}</li>
							<li>Widn Gust: {gust}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModalTile;
