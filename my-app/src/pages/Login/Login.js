import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const FAKE_ADMIN = {
    'name': 'iluarca',
    'password': 'iluarca',
    'roles': ['admin'],
    'mail':'iluarca@mail',
    'token': 'fake-token'
}
const FAKE_EMPLOYEE = {
    'name': 'vcarrillo',
    'password': 'vcarrillo',
    'roles': ['employee'],
    'mail': 'valentina@mail',
    'token': 'fake-token'
}
const FAKE_CLIENTE= {
    'name': 'cliente',
    'password': 'cliente',
    'roles': ['cliente'],
    'mail': 'cliente@mail',
    'token': 'fake-token'
}
const FAKE_PROVEEDOR= {
    'name': 'juanito',
    'password': 'juanito',
    'roles': ['proveedor'],
    'mail': 'proveedor.com',
    'token': 'fake-token'
}

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [redirectPath, setRedirectPath] = useState('/clientehome');


    const authentificate = async () => {
        try {
            let response = null
            if (username === FAKE_ADMIN.name && password === FAKE_ADMIN.name) {
                response = FAKE_ADMIN
                setRedirectPath('/adminhome')
            } else if (username === FAKE_EMPLOYEE.name && password === FAKE_EMPLOYEE.name) {
                response = FAKE_EMPLOYEE
                setRedirectPath('/empleadoorden')
            } else if (username === FAKE_CLIENTE.name && password === FAKE_CLIENTE.name) {
                response = FAKE_CLIENTE
                setRedirectPath('/clientehome')
            }
             else if (username === FAKE_PROVEEDOR.name && password === FAKE_PROVEEDOR.name) {
            response = FAKE_PROVEEDOR
            setRedirectPath('/proveedormispedidos')
        }

            if (response) {
                localStorage.setItem('user', JSON.stringify(response))
                setIsLoggedIn(true)
            } else {
                throw new Error('Credenciales invalidas')
            }
            
        } catch (e) {
            setUsername('');
            setPassword('');
            setError(e.message)
            setTimeout(() => {
                setError(null);
            }, 5000);
        }
    };


    setTimeout(() => {
    }, 2000)

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <>
            {isLoggedIn ? (
                <Redirect to={redirectPath} />
            ) : (
                    <div className="login-container">
                        <div className="form">
                            <h3>
                                <strong>Bienvenido a Hostal Doña Clarita</strong>
                            </h3>
                            <form>
                                <input
                                    style={
                                        error && username === ""
                                            ? { border: "1px solid var(--primary-red)" }
                                            : {}
                                    }
                                    placeholder="Usuario"
                                    type="text"
                                    value={username}
                                    onChange={onUsernameChange}
                                ></input>
                                <input
                                    className={`form-control ${error !== "" ? " is-invalid" : ""
                                        }`}
                                    style={
                                        error && password === ""
                                            ? { border: "1px solid var(--primary-red)" }
                                            : {}
                                    }
                                    placeholder="Contraseña"
                                    type="password"
                                    value={password}
                                    onChange={onPasswordChange}
                                ></input>
                                <p hidden={!error} className="text-muted">
                                    {error}
                                </p>
                            </form>
                            <button className="btn-login" onClick={authentificate}>
                                Ingresar
                            </button> 
                        </div>
                    </div>
                )}
        </>
    );
}

export default Login