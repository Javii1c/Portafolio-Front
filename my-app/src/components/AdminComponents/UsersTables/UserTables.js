import React from 'react';
import ProveedoresTable from './ProveedoresTable';
import ClientesTable from './ClienteTable';
import EmployeeTable from './EmployeeTable';

const UserTables = () => {
    return(
        <>
        <ProveedoresTable/>
        <ClientesTable/>
        <EmployeeTable/>
        </>
    )
}
export default UserTables