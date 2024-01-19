import { nanoid } from 'nanoid';

function Skeleton({ times }) {
	const boxes = Array(times)
		.fill(0)
		.map((_, i) => {
			return (
				<div className={`grid__col grid__col--1of${times}`} key={nanoid()}>
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
