import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div style={{height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className='loader'></div>
        </div>
        
    )
}

export default Loader