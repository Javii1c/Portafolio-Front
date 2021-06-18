import React from 'react';
import './Menu.css';

import MenuIcon from '@material-ui/icons/Menu'

const Menu = (props) => {
    return (

        <div className='menu'>
            <MenuIcon
                style={{ fontSize: '32px' }}
                onClick={props.click} 
            />
        </div>
    )
}

export default Menu