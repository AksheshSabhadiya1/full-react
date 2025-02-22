import axios from 'axios'

const api = axios.create(
    {
        baseURL: 'https://jsonplaceholder.typicode.com'
    }
)

export const getAllData = async () => {
    return await api.get('/posts?_start=0&_limit=3')
}


export const fetchPosts = async (pageNo) => {
    try {
        const res = await api.get(`/posts?_start=${pageNo}&_limit=3`)
        return res.status === 200 ? res.data : []

    } catch (error) {
        console.log(error);
    }
}


export const getPost = async(id) => {
    try {
        const res = await api.get(`/posts/${id}`)
        return res.status === 200 ? res.data : []
    } catch (error) {
        console.log(error);
    }
}


export const deletePost = (id) => {
    return api.delete(`/posts/${id}`)
}


export const updatePost = (id) => {
    return api.patch(`/posts/${id}`, {title: 'I Have Updated'})
}


export const updatePost2 = (id) => { 
    const value = document.querySelector('#inputbox').value
    return api.patch(`/posts/${id}`, {title: value})
}


export const fetchusers = async ({pageParam = 1}) => {
    try {
        const res = await axios.get(`https://api.github.com/users?per_page=10&page=${pageParam}`)
        return res.data
    } catch (error) {
        console.log(error);
    }
}