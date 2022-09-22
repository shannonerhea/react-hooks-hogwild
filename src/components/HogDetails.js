import React from 'react'

function HogDetails({hog}) {
 
  return (
    <div className="description">
      <strong>{hog.greased ? "Greased" : "Ungreased"}</strong>
      <p>
        Highest medal achived: <strong>{hog["highest medal achieved"]}</strong>
      </p>
      <p>
        These are Extra Mini Hogs and are in pounds: <strong>{hog.weight}</strong>
      </p>
    </div>
  )
}

export default HogDetails
