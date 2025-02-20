import React from "react";
import { Container, Logo, LogoutBtn } from '../index'
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Headers() {

    const authStatus = useSelector((state) => state.auth.status)
    // console.log("authstatus :",authStatus);
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Login',
            slug: '/Login',
            active: !authStatus
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            active: authStatus
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus
        },
    ]

    return (
        <header className="py-3 bg-gray-500 shadow-2xl">
            <Container>
                <nav className=''>
                    <div className='mr-4 inline-block float-start'>
                        <Link to='/'>
                            <Logo width='70px' />
                        </Link>
                    </div>

                    <ul className="flex flex-wrap ms-150">
                        {
                            navItems.map((item) => (
                                item.active ?
                                    <li key={item.name}>
                                        <button
                                            onClick={() => navigate(item.slug)}
                                            className='inline-block bg-black/10 mx-2 px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                        >{item.name}</button>
                                    </li>
                                    : null
                            ))
                        }
                        {
                            authStatus && (
                                <li className="bg-black/10 px-2 mx-2 duration-200 hover:bg-red-700 rounded-full">
                                    <LogoutBtn />
                                </li>
                            )
                        }
                    </ul>

                </nav>
            </Container>
        </header>
    )
}

export default Headers