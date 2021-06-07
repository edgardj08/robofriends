import React from 'react';

const SearchBox = ({ searchflied, searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--greeb bg-lightest-blue'
                type='search' 
                placeholder='search robot...'
                onChange={searchChange} 
            />
        </div>
    );
}


export default SearchBox