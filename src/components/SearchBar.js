import React, { useState } from "react";
import { getGeocoding } from "../api";

function SearchBar({ setLocation }) {
	const [query, setQuery] = useState("");

	const handleSearch = () => {
		fetch(getGeocoding(query))
			.then((res) => res.json())
			.then((data) => {
				if (data.length)
					setLocation({ lat: data[0].lat, lon: data[0].lon });
			});
	};

	return (
		<div className=" searchBox ">
			<input
				class="searchInput"
				type="text"
				placeholder="Enter city"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button class="searchButton" onClick={handleSearch}>
				Search
			</button>
		</div>
	);
}

export default SearchBar;
