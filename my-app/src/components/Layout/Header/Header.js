import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import './Header.css';

import Menu from './Menu/Menu';
import Icon from '@material-ui/core/Icon';

import {useHistory} from 'react-router-dom'

const AppName = (props) => {

    return (
        <span className='app-title big-title color-white'>{props.title}</span>
    )
}

/* const User = (props) => {

    let view = ['']
    
    
    switch(props.roles[0]){
        case 'employee' :
        view = '/clientprofile'
        break
        case 'admin' :
        view = '/imvprofile'
        break
        case 'dataCenterManager':
        view = '/dprofile'
        break
        default:
        view = '/'
        break
    }

    let history = useHistory()

    return (
        <div className='user-info'> 
            <span className='user-name' onClick = {() => {history.push(`${view}`)}} >{props.username}</span>
        </div>
    )
} 

 <User 
                employeeId={employeeId}
                username={username}
                roles={roles}
            />

*/

const Logo = () => {
    return (
        <Tooltip title='hostal' placement='bottom-end'>
            <img className="mobile_logo" src="http://imgfz.com/i/udkTJQO.jpeg" alt="Logo" ></img>
        </Tooltip>
       
    );
};

const Header = (props) => {
    const employeeId = props.employeeId || ''
    const username = props.username || '-'
    const roles = props.roles

    return (

        <div className='header-container'>
            <Menu
                show={props.show}
                click={props.menuHandler}
            />
            <Logo />
            <AppName title=' Hostal Doña Clarita' />
           
            <div className='log-out'>
                <Icon className='exit-icon'
                    onClick={props.logout}
                >
                exit_to_app
                </Icon>
            </div>
        </div>
        
    )
}

export default Header