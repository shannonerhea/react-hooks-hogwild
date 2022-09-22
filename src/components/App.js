import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogList";

import hogs from "../porkers_data";

function App() {
	//console.log(hogs)
	const [showGreased, setShowGreased] = useState(false);

	function handleGreased() {
		setShowGreased(showGreased => !showGreased)
	};
  
  return (
    <div className="ui grid container App">
      <div className="sixteen wide column centered">
        <Nav />
      </div>
      <div className="sixteen wide column centered">
        <Filter showGreased={showGreased} handleGreased={handleGreased}/>
      </div>
      <div className="sixteen wide column centered">
        <HogList hogs={hogs}/>
      </div>
    </div>
  );
}

export default App;
