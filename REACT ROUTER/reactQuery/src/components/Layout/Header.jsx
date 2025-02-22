import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <div>
                <NavLink to='/'>ReactQuery</NavLink>
                <ul>
                    <li>
                        <NavLink to='/' className={({isActive}) => `${isActive ? "text-black" : 'text-white'}`}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/FetchOldData'>FetchOldData</NavLink>
                    </li>
                    <li>
                        <NavLink to='/FetchRQ'>FetchRQ</NavLink>
                    </li>
                    <li>
                        <NavLink to='/infinite-scrolling'>InfiniteScroll</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}