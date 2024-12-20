import React from "react";

const Searchbox = ({searchfield, searchChange}) => {
    return (
        <div className='tc pa2'>
            <input
            className='pa3 ba b--blue bg-lightest-blue' 
            type='search' 
            placeholder='search robots'
            onChange = {searchChange}
            />
        </div>
    );
}

export default Searchbox;