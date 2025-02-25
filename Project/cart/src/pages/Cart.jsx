import { useQuery } from "@tanstack/react-query"
// import { addCart } from "../API/API"
import { useEffect, useState } from "react"
import Container from "../components/Container/Container"
import { arr, handleDelete } from "../API/API"



export default function Cart() {

    const [cartData, setCartData] = useState([])

    useEffect(() => {

        const data = arr
        if (data) {
            setCartData(data)
        }

    }, [])

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
                                <div className='text-start relative top-5 text-xl w-full h-full'>
                                    <p>{title}</p>
                                    <p className="mt-3"><strong>Price: </strong>{price}</p>
                                    <p className="mt-3"><strong>Category: </strong>{category}</p>
                                </div>
                                <div className='flex flex-wrap w-full justify-center items-center -mt-35'>
                                    <button className='rounded bg-blue-100 w-1/12 mx-2 hover:bg-blue-200'
                                        onClick={() => updateQuantity(id, -1)}
                                        disabled={quantity === 1}
                                    >-</button>
                                    {quantity}
                                    <button className='rounded bg-blue-100 w-1/12 mx-2 hover:bg-blue-200'
                                        onClick={() => updateQuantity(id, 1)}
                                    >+</button>
                                    <button className="inline-block border text-white hover:bg-blue-300 mx-2 px-6 py-2 duration-200 bg-blue-600 hover:text-black cursor-pointer rounded-full"
                                            onClick={()=> handleDelete(id)}>Remove</button>
                                </div>
                            </div>
                        )
                    })
                }
            </Container>
        </div>
    )
}
