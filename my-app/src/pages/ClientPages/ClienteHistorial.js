import React, { useState, useEffect} from 'react';

import enpoints from '../../api/enpoints'

import Loader from '../../components/UI/Loader/Loader';

const ClienteHistorial = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const fetchDataClient = async () => {
        let body = {
        }
        try {
           // let response = await endpoint.get(body);
           // setData(response.data)
        } catch (e) {
            console.log(e)
        }
    }
 
    //componentes en variables
    const fetchData = async () => {
            setIsLoading(true)
            await fetchDataClient();
            setIsLoading(false)
        }

    useEffect(() => {
        fetchData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {isLoading
                ? <Loader />
                : <>
                   
                </>
            }


        </>
    )
}
export default ClienteHistorial
