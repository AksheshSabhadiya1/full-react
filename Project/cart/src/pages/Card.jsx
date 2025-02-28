import { useQuery } from '@tanstack/react-query'
import { fetchAllData } from '../API/API'
import { useEffect, useState } from 'react'
import addCart from '../API/API'
import { Oval } from 'react-loader-spinner'



function Card() {

    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: fetchAllData,
    })
    
    const [state, setState] = useState([])
    const [filterData, setFilterData] = useState([])
    const [loader, setLoader] = useState(true)
    
    
    useEffect(() => {
        if (data) {
            const newArr = data?.map((item) => (
                { ...item, quantity: 1 }
            ))
            setState(newArr)
            localStorage.setItem('products', JSON.stringify(newArr))
            setLoader(false)
        }
        // if(filterData){
        //     const resultData = JSON.parse(localStorage.getItem('filterData')) || []
        //     setFilterData(resultData)
        //     setState(resultData)
        //     setLoader(false)
        // }
    }, [data]) 
    
    const updateQuantity = (id, change) => {
        const update = state.map((item) => (
            item.id === id ? { ...item, quantity: item.quantity + change } : item
        ))
        setState(update)
        localStorage.setItem('products', JSON.stringify(update))
    }




    return !loader ? (
        <div className='flex flex-wrap justify-evenly relative top-20'>
            {
                state?.map((item) => {
                    const { id, title, price, image, quantity, rating } = item

                    return (
                        <div key={id} className='border inline-block m-2 max-w-xs rounded-md shadow-md'>
                            <div className='min-w-xs min-h-70 flex flex-wrap justify-center items-center'>
                                <div className='max-w-30 max-h-50 relative -top-14'>
                                    <img src={image} className='h-full mt-10 object-center object-cover' />
                                </div>
                            </div>
                            <div className='text-center relative -top-5 w-full h-30 space-y-2'>
                                <p className='max-w-70 max-h-20 font-semibold relative -top-8 left-5'>{title}</p>
                                <p className='relative -top-5'><strong>Price: </strong>₹{price}</p>
                                <p className="max-w-40 min-w-30 relative left-20 -top-6"><strong className="text-yellow-400">★★★★★ </strong>{rating.rate}</p>
                            </div>
                            <div className='flex flex-wrap justify-center items-center mb-7 -mt-5'>
                                <button className='rounded bg-blue-100 text-center w-8 h-8 hover:bg-blue-200 disabled:opacity-50'
                                    onClick={() => updateQuantity(id, -1)}
                                    disabled={quantity === 1}
                                >-</button>
                                <p className='text-center w-8'>{quantity}</p>
                                <button className='rounded bg-blue-100 text-center w-8 h-8 hover:bg-blue-200'
                                    onClick={() => updateQuantity(id, 1)}
                                >+</button>
                            </div>
                            <div className='flex flex-wrap justify-center items-center'>
                                <div className='flex justify-center relative bottom-5'>
                                    <button className='inline-block border border-black text-white hover:bg-blue-300 mx-3 px-6 py-2 duration-200 bg-blue-600 hover:text-black cursor-pointer rounded-full'
                                        onClick={() => addCart(id)}
                                    >Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    ) : <div className="flex items-center justify-center w-full min-h-50 align-middle relative top-25">
        <Oval
            visible={true}
            height="80"
            width="80"
            color="blue"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
            secondaryColor='blue'
        />
    </div>
}

export default Card