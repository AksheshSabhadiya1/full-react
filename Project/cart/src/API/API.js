import axios from "axios";


const api = axios.create(
    {
        baseURL: 'https://fakestoreapi.com'
    }
)


export const fetchAllData = async () => {
    const res = await api.get('/products?_start=0&limit=4')
    // const res = await api.get('/products')
    return res.data
}



export const arr = []

export default function handleCart(id) {
    const data = JSON.parse(localStorage.getItem('products'))

    if(data[id-1].id === id){
        arr.push(data[id-1])
    }    
}



export const handleDelete = (id) =>{

    const data = JSON.parse(localStorage.getItem('products'))

    arr.map((index)=>{

        if(index.id === id){
            arr.pop(data[id-1])
        }
    })



}