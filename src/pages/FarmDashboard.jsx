import { NavLink, Outlet } from "react-router-dom"
import { ClipboardList } from "lucide-react"

export default function FarmDashboard() {
    //hardcoded farmID for the sake of demo
    const farmid = "eb37b71a-e2b3-4ea4-ba8b-89d2252e4f64";

    return (
        <>
            <div className="border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    <li className="me-2">
                    <NavLink to={`/farm/${farmid}/info`} className={({isActive}) => isActive ? "inline-flex items-center justify-center p-4 text-dark-green border-b-2 border-dark-green rounded-t-lg active dark:text-dark-green dark:border-dark-green group" : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"} aria-current="page">
                            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path className={({ isActive }) => isActive ? "text-dark-green dark:text-dark-green" : "text-gray-400 dark:text-gray-500"} d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                            </svg>Farm Info
                        </NavLink>
                    </li>
                    <li className="/farmdashboard/products">
                        <NavLink to={`/farm/${farmid}/products`} className={({isActive}) => isActive ? "inline-flex items-center justify-center p-4 text-dark-green border-b-2 border-dark-green rounded-t-lg active dark:text-dark-green dark:border-dark-green group" : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"}>
                            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path className={({ isActive }) => isActive ? "text-dark-green dark:text-dark-green" : "text-gray-400 dark:text-gray-500"} d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                            </svg>Products
                        </NavLink>
                    </li>
                    <li className="/farmdashboard/orders">
                        <NavLink to={`/farm/${farmid}/orders`} className={({isActive}) => isActive ? "inline-flex items-center justify-center p-4 text-dark-green border-b-2 border-dark-green rounded-t-lg active dark:text-dark-green dark:border-dark-green group" : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"}>
                            <ClipboardList className="w-5 h-5 me-2"/>
                            Orders
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="p-4">
                <Outlet />
            </div>

        </>
    )
}