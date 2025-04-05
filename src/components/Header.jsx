export default function Header() {
    return (
        <header>
            <nav class = "flex justify-between items-center bg-green-700 mx-auto">
                <div>
                    <h5>Location</h5>
                </div>
                <div class="">
                    <ul class= "flex items-right gap-[4vw]">
                        <li>
                            <a class = "hover:text-gray-500" href = "#">Products</a>
                        </li>
                        <li>
                            <a class = "hover:text-gray-500" href = "#">Farms</a>
                        </li>
                    </ul>
                </div>
                <div class = "flex items-center gap-[4vw]">
                    <button class = "btn">Login</button>
                    <button class = "btn">Cart</button>
                </div>
            </nav>
        </header>
    )
}