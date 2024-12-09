import React from "react";

function WeatherMap({ location }) {
	const mapUrl = `https://tile.openweathermap.org/map/clouds_new/10/${location.lon}/${location.lat}.png?appid=YOUR_API_KEY`; // Thay `YOUR_API_KEY` bằng API key của bạn.

	return (
		<div className="weather-map">
			<h2>Weather Map</h2>
			<div>
				<img
					src={mapUrl}
					alt="Weather Map"
					style={{
						width: "100%",
						maxWidth: "600px",
						borderRadius: "8px",
					}}
				/>
			</div>
		</div>
	);
}

export default WeatherMap;
