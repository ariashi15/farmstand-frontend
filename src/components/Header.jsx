import { ShoppingCart } from 'lucide-react';

export default function Header() {
    return (
        <header class = "bg-green-700 py-3 items-center">
            <nav class = "flex justify-between items-center bg-green-700 mx-auto w-[92%]">
                <div>
                    <h5>Location</h5>
                </div>
                <div>
                    <ul class= "flex items-center gap-[4vw]">
                        <li>
                            <a class = "hover:text-yellow-200" href = "#">Products</a>
                        </li>
                        <li>
                            <a class = "hover:text-yellow-200" href = "#">Farms</a>
                        </li>
                    </ul>
                </div>
                <div class = "flex items-center gap-[4vw]">
                    <button class = "btn bg-green-200 rounded border-white px-4 py-1">Login</button>
                    <button class = "btn  bg-green-200 rounded border-white px-4 py-1"><ShoppingCart size={24} /></button>
                </div>
            </nav>
        </header>
    )
}