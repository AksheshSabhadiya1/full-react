import { Link } from 'react-router-dom'
import Conatiner from '../Container/Container'

export const Header = () => {
    return (
        <header className="py-3 bg-gray-500 shadow-2xl">
            <Conatiner>
                <nav>
                    <ul className="flex flex-wrap ms-150">
                        <li className='inline-block bg-black/10 mx-2 px-6 py-2 duration-200 hover:bg-blue-100 cursor-pointer rounded-full'>
                            <button>Home</button>
                        </li>
                        <li className='inline-block bg-black/10 mx-2 px-6 py-2 duration-200 hover:bg-blue-100 cursor-pointer rounded-full'>
                            <button>View Cart</button>
                        </li>
                        <li className='inline-block bg-black/10 mx-2 px-6 py-2 duration-200 hover:bg-blue-100 cursor-pointer rounded-full'>
                            <button>Cart</button>
                        </li>
                    </ul>
                </nav>
            </Conatiner>
        </header>

    )
}