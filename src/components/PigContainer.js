import PigCard from "./PigCard"


function PigContainer({hogs}) {
    //console.log(hogs)
    const renderHogCards = hogs.map((hog) => <PigCard key={hog.name} {...hog} />)

    return(
        <main>
            {renderHogCards}
        </main>
    )
};

export default PigContainer;
