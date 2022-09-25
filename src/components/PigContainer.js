import { useState } from "react"
import PigCard from "./PigCard"
import FilteredHogs from "./FilteredHogs"


function PigContainer({ hogs }) {
    const [checked, setChecked] = useState(false);
    const [sortBy, setSortBy] = useState(false)

    const greasedFilteredHogs = hogs.filter((hog) => 
    checked ? checked === hog.greased : true)


    

    function sortHogs() {
        if (sortBy === " name") {
            const sortByName = [...greasedFilteredHogs].sort((hog1, hog2) => 
    hog1.name.toLowerCase().localeCompare(hog2.name.toLowerCase())
    );
            return sortByName
        } else if (sortBy === "weight" ) {
            const sortByWeight = [...greasedFilteredHogs].sort((hog1, hog2) => hog1.weight - hog2.weight
            );
            return sortByWeight;

        }
    };
 


    const renderHogCards = greasedFilteredHogs.map((hog) => (
    <PigCard key={hog.name} {...hog} />))

    return(
        <main>
            <FilteredHogs checked={checked} setChecked={setChecked} sortBy={sortBy} setSortBy={setSortBy}/>
            {renderHogCards}
           
        </main>
    )
};

export default PigContainer;
