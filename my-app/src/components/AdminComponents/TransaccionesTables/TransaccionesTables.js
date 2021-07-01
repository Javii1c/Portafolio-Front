import React from 'react';
import FacturasTable from './FacturasTable'
import PagosTable from './PagosTable'
import OrdenesPedidoTable from "./OrdenesPedidoTable"
import OrdenesCompraTable from "./OrdenesCompraTable"

const TransaccionesTables = () => {
    return(
        <>
        <OrdenesCompraTable/>
        <FacturasTable/>
        <OrdenesPedidoTable/>
        <PagosTable/>

        </>
    )
}
export default TransaccionesTables