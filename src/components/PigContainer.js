import PigCard from "./PigCard"
import FilteredHogs from "./FilteredHogs"


function PigContainer({hogs}) {
    //console.log(hogs)
    const renderHogCards = hogs.map((hog) => <PigCard key={hog.name} {...hog} />)

    return(
        <main>
            <FilteredHogs />
            {renderHogCards}
           
        </main>
    )
};

export default PigContainer;
