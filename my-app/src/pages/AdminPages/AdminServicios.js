import React, { useState, useEffect} from 'react';

import enpoints from '../../api/enpoints'
import DisplayTitle from '../../components/Common/DisplayTitle/DisplayTitle'
import Loader from '../../components/UI/Loader/Loader';
import ServiceTables from '../../components/AdminComponents/ServiceTables/ServicesTables'

const AdminServicios = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const fetchDataAdmin = async () => {
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
            await fetchDataAdmin();
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
                     <DisplayTitle
                   title = {'SERVICIOS'}/>
                   <ServiceTables/>
                </>
            }


        </>
    )
}
export default AdminServicios
