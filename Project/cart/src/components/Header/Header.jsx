import { NavLink } from 'react-router-dom'
import Container from '../Container/Container'
// import { arr } from '../../API/API'
import { useEffect, useState } from 'react'


export const Header = () => {

    const [cartCount, setCartCount] = useState(0)
    
    const updateCount = () => {
        const data = JSON.parse(localStorage.getItem('cartData')) || []
        setCartCount(data.length)
    }
    
    useEffect(()=>{
        updateCount()
        window.addEventListener('storage',updateCount)

        return () => window.removeEventListener('storage', updateCount)
    },[])


    return (
        <header className="w-full z-1 py-3 bg-blue-200 shadow-2xl shadow-blue-200 fixed">
            <Container>
                <nav>
                    <ul className="flex flex-wrap justify-end">
                        <li>
                        <NavLink to='/'>
                        <button className='inline-block border border-black text-white hover:bg-blue-300 mx-2 px-6 py-2 duration-200 bg-blue-600 hover:text-black cursor-pointer rounded-full'>Home</button>
                        </NavLink>
                        </li>

                        <li>
                        <NavLink to='/view-cart'>
                        <button className='inline-block border border-black text-white hover:bg-blue-300 mx-2 px-6 py-2 duration-200 bg-blue-600 hover:text-black cursor-pointer rounded-full' disabled={true} >View Cart</button>
                        </NavLink>
                        </li>

                        <li>
                        <NavLink to='/cart'>
                            <button className='inline-block border border-black text-white hover:bg-blue-300 mx-2 px-6 py-2 duration-200 bg-blue-600 hover:text-black cursor-pointer rounded-full'>Cart {cartCount}</button>
                        </NavLink>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>

    )
}