import React, { useState } from 'react';
import './Layout.css'

import Navbar from '../../components/Layout/NavBar/NavBar';
import Header from '../../components/Layout/Header/Header';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

import { Redirect } from 'react-router-dom';


const Layout = (props) => {
    const [show, setShow] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('user') ? true : false
    )
    const user = JSON.parse(localStorage.getItem('user'))

    const menuHandler = () => {
        setShow(prev => !prev)
    }

    const logoutHandler = () => {
        localStorage.clear()
        setIsLoggedIn(false)
    }

    return (
        <>
            {isLoggedIn && user ?
                <>
                    <div className='layout-container'>

                        <div className='layout-body'>
                            <Header
                                show={show}
                                menuHandler={menuHandler}
                                username={user.name}
                                roles = {user.roles}
                                employeeId={user.employeeId}
                                logout={logoutHandler}
                            />

                        <Backdrop
                            show={show}
                            toggleShow={menuHandler}
                        />
                        <Navbar
                            show={show}
                            logout={logoutHandler}
                        />
                            <div className='layout-content'>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </>
                : <Redirect to='/' />
            }
        </>
    )
}

export default Layout