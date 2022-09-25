import React from "react";
import Nav from "./Nav";
import PigContainer from "./PigContainer";
import PigCard from "./PigCard"
import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<PigContainer hogs={hogs} />
		</div>
	);
}

export default App;
