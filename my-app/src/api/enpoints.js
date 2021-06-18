import axios from 'axios';

const back = axios.create({
    baseURL:''
})

const getUsers = () => {
    return back.get('/users/')
}


export default  {getUsers}