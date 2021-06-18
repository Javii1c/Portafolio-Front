import React from 'react';

import AdminHistorial from './pages/AdminPages/AdminHistorial';
import AdminHome from './pages/AdminPages/AdminHome';
import AdminServicios from './pages/AdminPages/AdminServicios'
import Admintransacciones from './pages/AdminPages/AdminTransacciones'
import Adminusuarios from './pages/AdminPages/AdminUsuarios'

import ClienteHistorial from './pages/ClientPages/ClienteHistorial'
import ClienteHome from './pages/ClientPages/ClienteHome'
import ClienteMisServicios from './pages/ClientPages/ClienteMisServicios'
import ClienteProfile from './pages/ClientPages/ClienteProfile'

import EmpleadoHistorial from './pages/EmployeePages/EmpleadoHistorial'
import EmpleadoMisOrdenes from './pages/EmployeePages/EmpleadoMisOrdenes'
import EmpleadoOrden from './pages/EmployeePages/EmpleadoOrden'
import EmpleadoRecursos from './pages/EmployeePages/EmpleadoRecursos'

import ProveedorHistorial from './pages/ProveedorPages/ProveedorHistorial'
import ProveedorMisPedidos from './pages/ProveedorPages/ProveedorMisPedidos'
import ProveedorProductos from './pages/ProveedorPages/ProveedorProductos'

import { Switch, Route } from 'react-router-dom';

const ProtectedRoutes = ({ userRoles }) => {
    let routes = []
    
    if (userRoles.includes('admin')) {
        routes.push(
            <>
                <Route exact path='/adminhome' component = {AdminHome} />
                <Route exact path='/adminhistorial' component = {AdminHistorial} />
                <Route exact path='/adminservicios' component = {AdminServicios} />
                <Route exact path='/admintransacciones' component = {Admintransacciones} />
                <Route exact path='/Adminusuarios' component = {Adminusuarios} />
            
            </>
        )
    } 
    if (userRoles.includes('employee')) {
        routes.push(
            <>
                <Route exact path='/empleadoorden' component = {EmpleadoOrden} />
                <Route exact path='/empleadomisordenes' component = {EmpleadoMisOrdenes} />
                <Route exact path='/empleadohistorial' component = {EmpleadoHistorial} />
                <Route exact path='/empleadorecursos' component = {EmpleadoRecursos} />
                
            </>
        )   
    }
	if (userRoles.includes('cliente')) {
        routes.push(
            <>
                <Route exact path='/clientehome' component = {ClienteHome} />
                <Route exact path='/clientehistorial' component = {ClienteHistorial} />
                <Route exact path='/clientemisservicios' component = {ClienteMisServicios} />
                <Route exact path='/clienteprofile' component = {ClienteProfile} />
        
                
            </>
        )   
    }
    if (userRoles.includes('proveedor')) {
        routes.push(
            <>
                <Route exact path='/proveedormispedidos' component = {ProveedorMisPedidos} />
                <Route exact path='/proveedorhistorial' component = {ProveedorHistorial} />
                <Route exact path='/proveedorproductos' component = {ProveedorProductos} />
            </>
        )   
    }
    
    
    routes.push(
        <Route render={() => <h2>Not Found</h2>} />
    )

    return (
        <>
            <Switch>
                {routes.map(el =>
                el.props.children
                )}
            </Switch>

        </>
    )
 
}   

const Routes = () => {
    let userRoles = JSON.parse(localStorage.getItem('user')).roles
     
    return (
        <>
            <ProtectedRoutes
                userRoles={userRoles}
            />
        </>
    )
}

export default Routes