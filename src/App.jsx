import { useState, useEffect, useMemo } from "react";
import "./App.css";

function App() {
	const [politici, setPolitici] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetch("https://boolean-spec-frontend.vercel.app/freetestapi/politicians")
			.then((res) => res.json())
			.then((data) => setPolitici(data))
			.catch((error) => console.error(error));
	}, []);

	const politiciFiltrati = politici.filter((politico) => {
		const isInName = politico.name.toLowerCase().includes(search.toLowerCase());
		const isInBio = politico.biography
			.toLowerCase()
			.includes(search.toLocaleLowerCase);
		return isInName || isInBio;
	});

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
						<div key={politico.id} className="card my-2 ">
							<img
								src={politico.image}
								className="card-img-top w-25 mt-2 ms-4"
								alt="politico"
							/>
							<div className="card-body">
								<h5 className="card-title">
									{politico.name} - {politico.position}
								</h5>
								<p className="card-text">{politico.biography}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
