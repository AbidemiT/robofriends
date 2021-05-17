import React, {Fragment} from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <Fragment>
            <input className="pa3 br2 b-green bg-light-green" type="search" placeholder="Search Robot" onChange={searchChange}/>
        </Fragment>
    )
}

export default SearchBox;