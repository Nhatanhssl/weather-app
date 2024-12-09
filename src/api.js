const API_KEY = "a5a5e95b4348f68d177cc30c743b73e5"; // Thay bằng API key của bạn

export const getCurrentWeather = (lat, lon) =>
	`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

export const getForecast = (lat, lon) =>
	`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

export const getAirPollution = (lat, lon) =>
	`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

export const getGeocoding = (query) =>
	`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${API_KEY}`;
