
function FilteredHogs({ checked, setChecked, sortBy, setSortBy }) { 

    function handleGreasedChange(e) {
        //console.log("changed")
        setChecked((checked) => !checked)
      };

      function handleSortChange(e) {
       setSortBy(e.target.value)
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
                <span>Sort Pigs By </span>
            <label htmlFor="name">Name</label>
            <input type="radio" name="name" id="name" value="name" onChange={handleSortChange} />
            <label htmlFor="weight">weight</label>
            <input type="radio" name="name" id="weight" value="weight" onChange={handleSortChange} />
            </fieldset>
        </div>
    )
};

export default FilteredHogs;
