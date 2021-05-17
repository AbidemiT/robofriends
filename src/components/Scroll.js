import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height:'900px', border: '1px solid transparent', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {props.children}
        </div>
    )
}

export default Scroll;