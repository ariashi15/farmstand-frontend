import { useState, useEffect } from 'react';
import { ShoppingCart, MapPin, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [isPopupOpen, setIsPopupOpen] = useState(false); 
    const [location, setLocation] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [profileDropVisible, setProfileDropVisible] = useState(false);
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    const handleLocationSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const location = formData.get('Zip Code')
        setLocation(location);
        setIsPopupOpen(false);
        // Handle location submission logic here
    };

       // Sync cart to local storage whenever it changes
       useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
       }, [cartItems]);
       
    
       const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
       


    const farmid = "eb37b71a-e2b3-4ea4-ba8b-89d2252e4f64"

    return (
        <>
        <header className = "bg-dark-green py-3 items-center text-yellow-50">
            <nav className = "flex justify-between items-center bg-dark-green mx-auto w-[97%]">
                <div className="flex gap-8 items-center">
                    <NavLink to = "/">Farmstand</NavLink>
                    <div>
                        <button className="btn flex bg-yellow-200 rounded border-white px-4 py-1 text-dark-yellow" onClick={() => setIsPopupOpen(true)}>
                            <MapPin size={24} className= "mr-2 -ml-2"/>
                            <span>{location || "Enter Location"}</span>
                        </button>
                    </div>
                </div>

                <div className = "flex items-center gap-[2vw]">
                    <ul className= "flex gap-[2vw] pt-1">
                        <li>
                            <NavLink className = "hover:text-yellow-200" to = "/search">Search Produce</NavLink>
                        </li>
                        <li>
                            <NavLink className = "hover:text-yellow-200" to = "/explore">Explore Farms</NavLink>
                        </li>
                    </ul>
                    <div className = "flex gap-[2vw]">

                        {!loggedIn 
                        ? (<button className = "btn bg-yellow-200 rounded border-white px-4 py-1 text-dark-yellow hover:cursor-pointer" onClick={() => setLoggedIn(true)}>Login</button>)
                        : (<button className = "btn bg-yellow-200 rounded-full border-white px-1 py-1 text-dark-yellow hover:cursor-pointer" onClick={() => setProfileDropVisible(!profileDropVisible)}><User/></button>)}

                        {profileDropVisible && (
                        <div className="absolute bg-white shadow-lg rounded-md mt-10 py-2 w-[120px] z-1">
                            <NavLink className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-black" to="/account">
                                My Account
                            </NavLink>
                            <NavLink className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-black" to="/messages">
                                Messages
                            </NavLink>
                            <NavLink className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-black" to ={`/farm/${farmid}/info`}>
                                My Farm
                            </NavLink>
                        </div>)}

                            <NavLink className="relative btn bg-yellow-200 rounded border-white px-4 py-1 text-dark-yellow" to="/cart"><ShoppingCart size={24} /></NavLink>
                            {cartQuantity > 0 && (
                                <div className="absolute top-[5px] right-[10px] bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartQuantity}
                                </div>
                            )}
                    </div>
                </div>
            </nav>
        </header>

        {/* Popup */}
        {isPopupOpen && (
            <div className="fixed inset-0 flex items-center justify-center rounded-3xl bg-black/30 z-50">
                <div className="bg-white p-4 rounded-3xl border-10 border-yellow-200">
                    <h2 className="text-lg font-bold">Enter Location</h2>
                    <form className = "flex flex-col " onSubmit={handleLocationSubmit}>
                        <input 
                            type="text"
                            name="Zip Code"
                            placeholder="Zip Code"
                            className="border border-gray-300 rounded px-1 py-1"
                            required
                        />
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded m-5">
                            Submit
                        </button>
                    </form>
                    <button onClick={() => setIsPopupOpen(false)} className="text-red-500 mx-20">Close</button>
                </div>
            </div>
        )}

    </>
    );
}