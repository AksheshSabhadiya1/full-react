import { useQuery } from '@tanstack/react-query'
import { fetchAllData } from '../API/API'
import { useEffect, useState } from 'react'
import handleCart from '../API/API'

function Card() {

    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: fetchAllData,
    })

    const [state, setState] = useState([])


    useEffect(() => {
        if (data) {
            const newArr = data?.map((item) => (
                { ...item, quantity: 1 }
            ))
            setState(newArr)
            localStorage.setItem('products', JSON.stringify(newArr))
        }
    }, [data])


    const updateQuantity = (id, change) => {
        const update = state.map((item) => (
            item.id === id ? { ...item, quantity: item.quantity + change } : item
        ))
        setState(update)
        localStorage.setItem('products', JSON.stringify(update))
    }



    return (
        <div className='flex flex-wrap justify-evenly relative top-20'>
            {
                state?.map((item) => {
                    const { id, title, price, image, quantity } = item

                    return (
                        <div key={id} className='border inline-block m-2 max-w-xs rounded-md shadow-md'>
                            <div className='min-w-xs min-h-80 flex flex-wrap justify-center items-center'>
                                <div className='max-w-50 max-h-60 relative -top-15 '>
                                    <img src={image} className='w-8/10 ml-5 mt-10 object-center object-cover' />
                                </div>
                            </div>
                            <div className='text-center relative -top-5 w-full h-25'>
                                <p>{title}</p>
                                <p>Price: {price}</p>
                            </div>
                            <div className='flex flex-wrap justify-center items-center mb-7 -mt-5'>
                                <button className='rounded bg-blue-100 w-1/12 mx-2 hover:bg-blue-200'
                                    onClick={() => updateQuantity(id, -1)}
                                    disabled={quantity === 1}
                                >-</button>
                                {quantity}
                                <button className='rounded bg-blue-100 w-1/12 mx-2 hover:bg-blue-200'
                                    onClick={() => updateQuantity(id, 1)}
                                >+</button>
                            </div>
                            <div className='flex flex-wrap justify-center items-center'>
                                <div className='flex justify-center relative bottom-5'>
                                    <button className='inline-block border text-white hover:bg-blue-300 mx-3 px-6 py-2 duration-200 bg-blue-600 hover:text-black cursor-pointer rounded-full'
                                        onClick={()=> handleCart(id)}
                                    >Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card