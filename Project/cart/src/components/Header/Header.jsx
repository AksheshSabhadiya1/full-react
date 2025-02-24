import { Link } from 'react-router-dom'
import Conatiner from '../Container/Container'

export const Header = () => {
    return (
        <header className="w-full z-1 py-3 bg-blue-200 shadow-2xl shadow-blue-200 fixed">
            <Conatiner>
                <nav>
                    <ul className="flex flex-wrap justify-end">
                        <li >
                            <button className='inline-block border text-white hover:bg-blue-300 mx-2 px-6 py-2 duration-200 bg-blue-600 hover:text-black cursor-pointer rounded-full'>Home</button>
                        </li>
                        <li>
                            <button className='inline-block border text-white hover:bg-blue-300 mx-2 px-6 py-2 duration-200 bg-blue-600 hover:text-black cursor-pointer rounded-full'>View Cart</button>
                        </li>
                        <li>
                            <button className='inline-block border text-white hover:bg-blue-300 mx-2 px-6 py-2 duration-200 bg-blue-600 hover:text-black cursor-pointer rounded-full'>Cart</button>
                        </li>
                    </ul>
                </nav>
            </Conatiner>
        </header>

    )
}