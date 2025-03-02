import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import { useEffect, useState } from 'react';
// import Card from '../../pages/Card';
// import { searchbarData } from '../../API/API';
import { useProductContext } from '../../pages/ProductContext';



export const Header = () => {
    const [cartCount, setCartCount] = useState(0);
    // const [filterData, setFilterData] = useState([])
    // const [state, setState] = useState([])

    const { filterByCategory } = useProductContext();

    const handleFilterChange = (e) => {
        const category = e.target.value;
        filterByCategory(category);
    };

    const updateCount = () => {
        const cartData = JSON.parse(localStorage.getItem('cartitem')) || 0;
        setCartCount(cartData);
    };

    
    // const data = JSON.parse(localStorage.getItem('products'))
    
    // const getFilterData = () => {
    //     const findData = document.querySelector('#searchbar').value
    //     const newData = state?.filter((item)=> item.category === findData)
    //     setFilterData(newData)
    //     // localStorage.setItem('filterData',JSON.stringify(newData))
    // }
    
    // useEffect(()=>{
    //     if(data){
    //         setState(data)
    //     }
    // },[])
        

    useEffect(() => {
        updateCount();
        window.addEventListener('storage', updateCount)

        return () => window.removeEventListener('storage', updateCount)
    }, []);

    return (
        <header className='w-full z-10 py-3 bg-blue-200 shadow-2xl shadow-blue-200 fixed'>
            <Container>
                <nav>
                    <ul className='flex flex-col sm:flex-row sm:justify-end items-center space-y-2 sm:space-y-0 sm:space-x-4'>
                        <li className='flex justify-start items-center outline-blue-600'>
                            <select type=""
                                id='searchbar'
                                className='bg-white/80 text-center w-full sm:w-xs lg:w-xs py-2 outline-blue-400 hover:outline-blue-600 rounded-xl select-none me-4 text-black focus:outline-blue-400'
                                onChange={handleFilterChange}
                            >
                                <option value='null' className='sm:w-auto'>-- Select Filter --</option>
                                <option value="men's clothing" className='text-2xl rounded-xl font-semibold cursor-pointer space-y-2 sm:w-auto sm:text-xl' >Men's Clothing</option>
                                <option value="jewelery" className='text-2xl rounded-xl font-semibold cursor-pointer space-y-2 sm:w-auto sm:text-xl'>Jewelery</option>
                                <option value="electronics" className='text-2xl rounded-xl font-semibold cursor-pointer space-y-2 sm:w-auto sm:text-xl'>Electronics</option>
                                <option value="women's clothing" className='text-2xl rounded-xl font-semibold cursor-pointer space-y-2 sm:w-auto sm:text-xl'>Women's Clothing</option>
                            </select>
                                    <img src='https://img.icons8.com/?size=100&id=HjFb6s4aXAL2&format=png&color=000000'
                                    className='bg-white text-white rounded-r-xl me-1 hover:cursor-pointer w-9 sm:relative sm:-left-14 rounded-xl' />
                        </li>
                        <li>
                            <NavLink to='/'>
                                <button className='inline-block border border-black text-white hover:bg-blue-300 px-6 py-2 duration-200 bg-blue-600 hover:text-black cursor-pointer rounded-full w-full sm:w-auto'>
                                    Home
                                </button>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/view-cart'>
                                <button
                                    className='inline-block border border-black text-white hover:bg-blue-300 px-6 py-2 duration-200 bg-blue-600 hover:text-black cursor-pointer rounded-full w-full sm:w-auto lg:w-auto'
                                    disabled={true}
                                >
                                    View Cart
                                </button>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/cart'>
                                <button className='inline-block border border-black text-white hover:bg-blue-300 px-6 py-2 duration-200 bg-blue-600 hover:text-black cursor-pointer rounded-full min-w-26 sm:w-auto'>
                                    Cart {cartCount === 0 ? '' : cartCount}
                                </button>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
};
