


function FilteredHogs() { 
    function handleGreasedChange() {
        console.log("changed")
    };


    return (
        <div>
            <label htmlFor="greased">Greased</label>
            <input 
            type="checkbox"
            name="greased"
            id="greased"
            />
        </div>
    )
};

export default FilteredHogs;
