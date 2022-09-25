import { useState } from "react"
import PigCard from "./PigCard"
import FilteredHogs from "./FilteredHogs"


function PigContainer({ hogs }) {

    const [checked, setChecked] = useState(false);
    //console.log(checked)
    //console.log(hogs)
    const greasedFilteredHogs = hogs.filter((hog) => 
    checked ? checked === hog.greased : true)


    const renderHogCards = greasedFilteredHogs.map((hog) => (
    <PigCard key={hog.name} {...hog} />))

    return(
        <main>
            <FilteredHogs checked={checked} setChecked={setChecked}/>
            {renderHogCards}
           
        </main>
    )
};

export default PigContainer;
