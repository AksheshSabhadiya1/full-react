import { useQuery } from "@tanstack/react-query"
// import { addCart } from "../API/API"
import { useEffect, useState } from "react"
import Container from "../components/Container/Container"
// import { arr } from "../API/API"
import { useNavigate } from "react-router-dom"



export default function Cart() {

    const [cartData, setCartData] = useState([])
    const navigate = useNavigate()
    const data = JSON.parse(localStorage.getItem('cartData'))

    useEffect(() => {
        setCartData(data)
    }, [])


    const handleDelete = (id) => {
        
        const data = JSON.parse(localStorage.getItem('cartData')) || []
        const item = data.find((index)=> index.id === id )
        
        if(item){
            const removedata = data.filter((item)=> item.id !== id )
            localStorage.setItem('cartData',JSON.stringify(removedata))
            setCartData(removedata)
        }

        if(data.length === 1){
            navigate('/')
        }

        window.dispatchEvent(new Event('storage'));
    }

    return (
        <div className='inline-block relative top-20'>
            <Container>
                {
                    cartData?.map((item) => {
                        const { id, title, category, price, image, quantity } = item

                        return (
                            <div key={id} className='border m-2 flex max-w-5xl rounded-md shadow-md'>
                                <div className='min-w-xs min-h-60 flex flex-wrap justify-center items-center'>
                                    <div className='max-w-50 max-h-40 relative -top-15 '>
                                        <img src={image} className='w-6/10 ml-5 mt-10 object-center object-cover' />
                                    </div>
                                </div>
                                <div className='text-start relative top-5 text-xl min-w-xs h-full'>
                                    <p>{title}</p>
                                    <p className="mt-3"><strong>Price: </strong>{price}</p>
                                    <p className="mt-3"><strong>Category: </strong>{category}</p>
                                </div>
                                <div className="flex flex-wrap justify-center items-center ">
                                <div className='inline-flex w-full relative -left-5 -top-15'>
                                    <button className='rounded bg-blue-100 w-5 mx-3 hover:bg-blue-200'
                                        onClick={() => updateQuantity(id, -1)}
                                        disabled={quantity === 1}
                                    >-</button>
                                    {quantity}
                                    <button className='rounded bg-blue-100 w-5 mx-3 hover:bg-blue-200'
                                        onClick={() => updateQuantity(id, 1)}
                                    >+</button>
                                    <button className="inline-block border text-white hover:bg-blue-300 mx-5 px-6 py-2 duration-200 bg-blue-600 hover:text-black cursor-pointer rounded-full -mt-5"
                                        onClick={() => handleDelete(id)}>{item.quantity > 1 ? "RemoveAll" : "Remove"}</button>
                                </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Container>
        </div>
    )
}
