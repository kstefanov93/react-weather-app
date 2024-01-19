import { nanoid } from 'nanoid';

function Skeleton({ times }) {
	let gridClass;

	times > 5
		? (gridClass = 'grid__col--1of5')
		: (gridClass = `grid__col--1of${times}`);

	const boxes = Array(times)
		.fill(0)
		.map((_, i) => {
			return (
				<div className={`grid__col ${gridClass}`} key={nanoid()}>
					<div className='skeleton'>
						<div className='skeleton__outer'>
							<div className='skeleton__inner' />
							<div className='skeleton__inner' />
							<div className='skeleton__inner' />
							<div className='skeleton__inner' />
							<div className='skeleton__inner' />
						</div>
					</div>
				</div>
			);
		});

	return (
		<div className='skeleton-holder'>
			<div className='grid skeleton__grid'>{boxes}</div>
		</div>
	);
}

export default Skeleton;
