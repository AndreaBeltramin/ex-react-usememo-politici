import React, { useState, useEffect, useMemo } from "react";
import "./App.css";

function Politico({ name, image, position, biography }) {
	console.log("stampato");

	return (
		<div className="card my-2 ">
			<img src={image} className="card-img-top w-25 mt-2 ms-4" alt="politico" />
			<div className="card-body">
				<h5 className="card-title">
					{name} - {position}
				</h5>
				<p className="card-text">{biography}</p>
			</div>
		</div>
	);
}
const MemoizedPolitician = React.memo(Politico);

function App() {
	const [politici, setPolitici] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetch("https://boolean-spec-frontend.vercel.app/freetestapi/politicians")
			.then((res) => res.json())
			.then((data) => setPolitici(data))
			.catch((error) => console.error(error));
	}, []);

	const politiciFiltrati = useMemo(() => {
		return politici.filter((politico) => {
			const isInName = politico.name
				.toLowerCase()
				.includes(search.toLowerCase());
			const isInBio = politico.biography
				.toLowerCase()
				.includes(search.toLocaleLowerCase);
			return isInName || isInBio;
		});
	}, [politici, search]);

	return (
		<>
			<div className="container">
				<h1 className="ms-5 mt-5 text-center">LISTA POLITICI</h1>
				<input
					type="text"
					placeholder="Cerca un politico"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<div>
					{politiciFiltrati.map((politico) => (
						<MemoizedPolitician key={politico.id} {...politico} />
					))}
				</div>
			</div>
		</>
	);
}

export default App;
