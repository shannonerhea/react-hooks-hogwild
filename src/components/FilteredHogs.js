
function FilteredHogs({checked, setChecked}) { 

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
            <fieldset>
            <label htmlFor="name">Name</label>
            <input type="radio" name="name" id="name" value="name" checked/>
            <label htmlFor="weight">weight</label>
            <input type="radio" name="name" id="weight" value="weight" />
            </fieldset>
        </div>
    )
};

export default FilteredHogs;
