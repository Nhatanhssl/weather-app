import React, { useEffect, useState } from "react";
import { getAirPollution } from "../api";

function AirQuality({ location }) {
	const [aqi, setAqi] = useState(null);

	useEffect(() => {
		fetch(getAirPollution(location.lat, location.lon))
			.then((res) => res.json())
			.then((data) => setAqi(data.list[0].main.aqi));
	}, [location]);

	return (
		<div className="air-quality">
			<h2>Air Quality Index</h2>
			{aqi ? <p>AQI: {aqi}</p> : <p>Loading...</p>}
		</div>
	);
}

export default AirQuality;
