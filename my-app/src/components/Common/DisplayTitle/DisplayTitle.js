import React from 'react';
import './DisplayTitle.css'
import Icon from "@material-ui/core/Icon";

const DisplayHeader = (props) => {
    return (
        <>
        <br></br>
        <div className='display-container' style={{ background: 'white' }}>
            <Icon>{props.icon}</Icon>
            <div className='display-header'>
                <div style={{ display: 'inline-block' }}>
                    <h3 className='display-header-title'>{props.title}</h3>
                </div>
            </div>
            <div  style={{ display: 'flex' }}>
                {props.children}
            </div>
        </div>
        </>
    )
}

export default DisplayHeader