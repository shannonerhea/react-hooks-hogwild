
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
            <label htmlFor="name">Name</label>
            <input type="radio" name="name" id="name" />
        </div>
    )
};

export default FilteredHogs;
