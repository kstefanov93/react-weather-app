import Tile from './Tile';
import { nanoid } from 'nanoid';

function Tiles({ days }) {
	const daysToShow = 5;
	let renderedDays;

	if (typeof days !== 'undefined') {
		renderedDays = days.slice(0, daysToShow).map((day) => {
			return (
				<div className='tiles__item' key={nanoid()}>
					<Tile day={day} />
				</div>
			);
		});
	}

	return (
		<div className='tiles'>
			<div className='tiles__items'>{renderedDays}</div>
		</div>
	);
}

export default Tiles;
