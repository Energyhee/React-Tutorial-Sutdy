import React from 'react';

// #0
function Wrapper ({children}){
    const style = {
        display: 'inline-block',
        padding: '15px',
        backgroundColor : '#333',
        textAlign: 'center',
        fontSize: '16px',
        color: '#fff'
    }
    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Wrapper;