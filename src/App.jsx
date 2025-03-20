import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [politici, setPolitici] = useState([]);

	useEffect(() => {
		fetch("https://boolean-spec-frontend.vercel.app/freetestapi/politicians")
			.then((res) => res.json())
			.then((data) => setPolitici(data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<>
			<div className="container">
				<h1 className="ms-5 mt-5 text-center">LISTA POLITICI</h1>
				<div>
					{politici.map((politico) => (
						<div className="card my-2 ">
							<img
								src={politico.image}
								className="card-img-top w-25 m-auto mt-2"
								alt="politico"
							/>
							<div className="card-body">
								<h5 className="card-title">{politico.name}</h5>
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
