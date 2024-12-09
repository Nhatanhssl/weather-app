import React, { useEffect, useState } from "react";
import { getForecast } from "../api";

function Forecast({ location }) {
	const [forecast, setForecast] = useState(null);

	useEffect(() => {
		fetch(getForecast(location.lat, location.lon))
			.then((res) => res.json())
			.then((data) => setForecast(data.list.slice(0, 5))); // 5 mốc dự báo
	}, [location]);

	return (
		<div className="forecast">
			<h2>5-Day Forecast</h2>
			{forecast ? (
				<ul>
					{forecast.map((item, index) => (
						<li key={index}>
							<p>{item.dt_txt}</p>
							<p>{item.main.temp}°C</p>
							<p>{item.weather[0].description}</p>
						</li>
					))}
				</ul>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

export default Forecast;
