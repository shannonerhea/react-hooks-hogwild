import { useState } from "react";


function FilteredHogs() { 
    
    const [checked, setChecked] = useState(false);

    function handleGreasedChange() {
        //console.log("changed")
        setChecked((checked) => !checked)

    };

     return (
        <div>
            <label htmlFor="greased">Greased</label>
            <input 
            type="checkbox"
            name="greased"
            id="greased"
            onChange={handleGreasedChange}
            checked={checked}
            />
        </div>
    )
};

export default FilteredHogs;