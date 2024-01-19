function useFilter(data) {
	if (Object.keys(data).length === 0) {
		return;
	}

	const groupedDays = data.list.reduce((acc, item) => {
		const key = item.dt_txt.split(' ')[0];
		if (!acc[key]) {
			acc[key] = [];
		}

		acc[key].push(item);
		return acc;
	}, {});

	const filter = Object.values(groupedDays).map((item) => {
		const maxTemp = item.reduce((prev, current) => {
			const temp = prev.main.temp_max > current.main.temp_max ? prev : current;
			return temp;
		});

		const minTemp = item.reduce((prev, current) => {
			const temp = prev.main.temp_min < current.main.temp_min ? prev : current;
			return temp;
		});

		return [maxTemp, minTemp];
	});

	return filter;
}

export default useFilter;
