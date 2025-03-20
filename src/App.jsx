import { useState } from "react";
import "./App.css";

function App() {
	async function chiamataPolitici() {
		const response = await fetch(
			"https://boolean-spec-frontend.vercel.app/freetestapi/politicians"
		);
		const politici = await response.json();
		console.log(politici);
		return politici;
	}

	chiamataPolitici();
	const [politici, setPolitici] = useState([]);

	return (
		<>
			<div>
				<h1 className="ms-5 mt-5">TITOLO</h1>
				<p className="ms-5 mt-5">paragrafo</p>
			</div>
		</>
	);
}

export default App;
