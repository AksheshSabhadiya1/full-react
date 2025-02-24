import axios from "axios";

const api = axios.create(
    {
        baseURL: 'https://fakestoreapi.com'
    }
)

export const fetchAllData = async () => {
    const res = await api.get('/products?_start=0&limit=3')
    console.log(res.data);
    return res.data
}