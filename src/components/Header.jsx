export default function Header() {
    return (
        <header>
            <nav className="flex justify-between items-center bg-green-700 mx-auto">
                <div>
                    <h5>Location</h5>
                </div>
                <div>
                    <ul className="flex items-right gap-[4vw]">
                        <li>
                            <a className="hover:text-gray-500" href="#">Products</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Farms</a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-[4vw]">
                    <button className="btn">Login</button>
                    <button className="btn">Cart</button>
                </div>
            </nav>
        </header>
    )
}