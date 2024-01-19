import { createContext, useState } from 'react';

const WeatherContent = createContext();

function WeatherProvider({ children }) {
	const [location, setLocation] = useState([35, 139]);
	const [data, setData] = useState({});

	const values = {
		location,
		setLocation,
		data,
		setData,
	};

	return (
		<WeatherContent.Provider value={values}>{children}</WeatherContent.Provider>
	);
}

export { WeatherProvider };
export default WeatherContent;
