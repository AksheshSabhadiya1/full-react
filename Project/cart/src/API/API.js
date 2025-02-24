import axios from "axios";

const api = axios.create(
    {
        baseURL: 'https://fakestoreapi.com'
    }
)

export const fetchAllData = async () => {
    const res = await api.get('/products')
    console.log(res.data);
    return res.data
}