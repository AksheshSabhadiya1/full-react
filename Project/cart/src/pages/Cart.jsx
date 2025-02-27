import { useEffect, useState } from "react"
import Container from "../components/Container/Container"
import { useNavigate} from "react-router-dom"



export default function Cart() {

    const [cartData, setCartData] = useState([])
    const navigate = useNavigate()
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
            navigate('/')
        }


        window.dispatchEvent(new Event('storage'));
    }


    const updateQuantity = (id, change) => {
        const update = cartData.map((item) => (
            item.id === id ? { ...item, quantity: item.quantity + change} : item
        ))
        setCartData(update)
        localStorage.setItem('cartData', JSON.stringify(update))

        const value = JSON.parse(localStorage.getItem('cartitem'))
        localStorage.setItem('cartitem', JSON.stringify(value + change))

        window.dispatchEvent(new Event('storage'));
    }


    return cartData.length > 0 ?(
        <div className='inline-block relative top-20 w-full'>
            <Container>
                {
                    cartData?.map((item) => {
                        const { id, title, category, price, image, quantity, rating } = item

                        return (
                            <div key={id} className='mt-2 grid grid-cols-3 gap-3 max-w-6xl max-h-screen rounded-md shadow-md border'>
                                <div className='min-w-xs min-h-60 flex flex-wrap justify-center items-center'>
                                    <div className='max-w-50 max-h-40 relative -top-15'>
                                        <img src={image} className='w-6/10 ml-5 mt-10 object-center object-cover' />
                                    </div>
                                </div>
                                <div className='text-start relative top-3 text-xl min-w-xs h-full'>
                                    <p className="max-w-88 max-h-20">{title}</p>
                                    <p className="mt-3"><strong>Price: </strong>{price}</p>
                                    <p className="mt-3"><strong>Category: </strong>{category}</p>
                                    <p className="mt-3"><strong className="text-yellow-400">★★★★★ </strong>{rating.rate}</p>
                                </div>
                                <div className="flex flex-wrap min-w-50 max-w-80 justify-center items-center">
                                    <div className='inline-flex max-w-70 items-center relative left-0 -top-20 '>
                                        <div className="flex flex-wrap justify-center items-center float-end">
                                            <button className='rounded bg-blue-100 text-center w-8 mx-2 relative -top-2 hover:bg-blue-200'
                                                onClick={() => updateQuantity(id, -1)}
                                                disabled={quantity === 1}
                                            >-</button>
                                            <p className="relative -top-2 text-center max-w-10 min-w-5">{quantity}</p>
                                            <button className='rounded bg-blue-100 text-center w-8 mx-2 relative -top-2 hover:bg-blue-200'
                                                onClick={() => updateQuantity(id, 1)}
                                            >+</button>
                                        </div>
                                        <div>
                                            <button className="inline-block border text-white border-black hover:bg-blue-300 mx-5 px-6 py-2 duration-200 bg-blue-600 hover:text-black cursor-pointer rounded-full -mt-5"
                                                onClick={() => handleDelete(id)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Container >
        </div >
    ) : <div className="flex flex-wrap flex-col items-center justify-center w-full min-h-50 align-middle relative top-25">
        <img src="https://img.icons8.com/?size=100&id=wFlitpRAdn3I&format=png&color=000000" alt="image" />
        <span><h1>Your cart is empty</h1></span>
        </div>
}
