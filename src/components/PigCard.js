import { useState } from "react"

// highest medal ach. is a str in the data so set str to value in line 1
function PigCard({ 
    name, 
    image, 
    greased, 
    specialty, 
    weight,  
    "highest medal achieved" : highestMedalAchieved
 })
  {
    // delv 2  function handleClick
    const [showDetails, setShowDetails] = useState(false);
    function handleClick() {
        //console.log("clicked")
        setShowDetails((showDetails) => !showDetails);
    };
   // console.log(highestMedalAchieved)
    return (
        <article className="pigTile" onClick={handleClick}>
            <h3>{name}</h3>
            <img src={image} alt={name} className="minPigTile" />
            { showDetails ? <p> this pig was clicked on </p> : null  }
        </article>
    )
};

export default PigCard;
// readme says put name in <h3> and <iimg/>
//className for styling
