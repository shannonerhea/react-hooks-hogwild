import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogList";

import hogs from "../porkers_data";

function App() {
	//console.log(hogs)
	const [showGreased, setShowGreased] = useState(false);
	const [sortBy, setSortBy] = useState("");

	function handleGreased() {
		setShowGreased(showGreased => !showGreased)
	};

	function handleSort(sortStr) {
		setSortBy(sortStr)
	};

	const hogsToDisplay = hogs
	.filter(hog => (showGreased ? hog.greased : true))
	.sort((hog1, hog2) => {
		if (sortBy === "weight") {
			return hog1.weight - hog2.weight
		} else if (sortBy === "name") {
			return hog1.name.localeCompare(hog2.name)
		}
			
	})
  
  return (
    <div className="ui grid container App">
      <div className="sixteen wide column centered">
        <Nav />
      </div>
      <div className="sixteen wide column centered">
        <Filter showGreased={showGreased} handleGreased={handleGreased} sortBy={sortBy} handleSort={handleSort}/>
      </div>
      <div className="sixteen wide column centered">
        <HogList hogs={hogsToDisplay}/>
      </div>
    </div>
  );
}

export default App;
