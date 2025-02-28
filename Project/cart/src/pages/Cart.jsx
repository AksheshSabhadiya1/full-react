import { useEffect, useState } from "react"
import Container from "../components/Container/Container"
import { useNavigate } from "react-router-dom"
import OrderSummary from "./OrderSummary"



export default function Cart() {

    const [cartData, setCartData] = useState([])
    const data = JSON.parse(localStorage.getItem('cartData'))

    useEffect(() => {
        setCartData(data)
    }, [])


    const handleDelete = (id) => {

        const getData = JSON.parse(localStorage.getItem('cartData')) || []
        const item = getData.find((index) => index.id === id)

        if (item) {
            const updatedData = getData.filter((item) => item.id !== id)
            localStorage.setItem('cartData', JSON.stringify(updatedData))
            setCartData(updatedData)

            const totalItems = updatedData.reduce((total, item) => total + item.quantity, 0);
            localStorage.setItem('cartitem', JSON.stringify(totalItems))
        }


        if (getData.length === 1) {
            setCartData(null)
        }


        window.dispatchEvent(new Event('storage'));
    }

    const updateQuantity = (id, change) => {
        const productData = JSON.parse(localStorage.getItem('products'))
        const itemData = productData.find((index) => index.id === id)

        const update = cartData.map((item) => (
            item.id === id ? { ...item, quantity: item.quantity + change, price: (Number(item.price) + Number(itemData.price * change)).toFixed(2) } : item
        ))
        setCartData(update)
        localStorage.setItem('cartData', JSON.stringify(update))

        const value = JSON.parse(localStorage.getItem('cartitem'))
        localStorage.setItem('cartitem', JSON.stringify(value + change))

        window.dispatchEvent(new Event('storage'));
    }

    const removeAllData = () => {
        localStorage.removeItem('cartData')
        localStorage.removeItem('cartitem')
        setCartData(null)

        window.dispatchEvent(new Event('storage'));
    }

    console.log("cartData:", cartData);

    return cartData ? (
        <div className='inline-flex relative top-20 w-full flex-col'>
            {
                cartData.length > 1 && <div className="absolute right-10">
                    <button
                        className="mt-4 border text-white border-black hover:bg-blue-300 px-6 py-2 duration-200 bg-blue-600 hover:text-black cursor-pointer rounded-full"
                        onClick={removeAllData}
                    >RemoveAll</button>
                </div>
            }

            <Container>
                {
                    cartData?.map((item) => {
                        const { id, title, category, price, image, quantity, rating } = item

                        return (
                            <div key={id}
                                className='mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto rounded-md shadow-md border p-4'
                            >
                                <div className='flex justify-center items-center'>
                                    <div className='w-50 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 relative'>
                                        <img
                                            src={image}
                                            alt={title}
                                            className='object-center object-cover w-34 rounded-md'
                                        />
                                    </div>
                                </div>

                                <div className='text-start text-lg flex flex-col justify-center'>
                                    <p className='font-semibold text-xl'>{title}</p>
                                    <p className='mt-2'><strong>Price: </strong>₹{price}</p>
                                    <p className='mt-2'><strong>Category: </strong>{category}</p>
                                    <p className='mt-2'><strong className='text-yellow-400'>★★★★★ </strong>{rating.rate}</p>
                                </div>

                                <div className='flex flex-col justify-center items-center'>
                                    <div className='flex items-center space-x-4'>
                                        <button
                                            className='rounded bg-blue-100 text-center w-8 h-8 hover:bg-blue-200 disabled:opacity-50'
                                            onClick={() => updateQuantity(id, -1)}
                                            disabled={quantity === 1}
                                        >
                                            -
                                        </button>
                                        <p className='text-center w-8'>{quantity}</p>
                                        <button
                                            className='rounded bg-blue-100 text-center w-8 h-8 hover:bg-blue-200'
                                            onClick={() => updateQuantity(id, 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        className='mt-4 border text-white border-black hover:bg-blue-300 px-6 py-2 duration-200 bg-blue-600 hover:text-black cursor-pointer rounded-full'
                                        onClick={() => handleDelete(id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
                <OrderSummary props={cartData} />
            </Container >
        </div >
    ) : <Container>
        <div className="flex flex-wrap flex-col items-center justify-center w-full min-h-52 relative top-20">
        <img src="https://img.icons8.com/?size=100&id=wFlitpRAdn3I&format=png&color=000000" alt="image" />
        <span><h1>Your cart is empty</h1></span>
    </div>
    </Container> 
}
