import { useState } from 'react';
import { ShoppingCart, MapPin } from 'lucide-react';

export default function Header() {
    const [isPopupOpen, setIsPopupOpen] = useState(false); 
    const [location, setLocation] = useState('');

    const handleLocationSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const location = formData.get('location');
        console.log("Submitted location:", location);
        setLocation(location);
        setIsPopupOpen(false);
        // Handle location submission logic here
    };
    return (
        <>
        <header className = "bg-dark-green py-3 items-center text-yellow-50">
            <nav className = "flex justify-between items-center bg-dark-green mx-auto w-[92%]">
                <div>
                    <button class ="btn flex bg-yellow-200 rounded border-white px-4 py-1 text-black" onClick={() => setIsPopupOpen(true)}>
                        <MapPin size={24} class = "mr-2 -ml-2"/>
                        <span>{location || "Enter Location"}</span>
                    </button>
                </div>
                <div className = "flex items-center gap-[2vw]">
                    <ul className= "flex gap-[2vw] pt-1">
                        <li>
                            <a className = "hover:text-yellow-200" href = "#">Products</a>
                        </li>
                        <li>
                            <a className = "hover:text-yellow-200" href = "#">Farms</a>
                        </li>
                    </ul>
                    <div className = "flex gap-[2vw]">
                        <button className = "btn bg-yellow-200 rounded border-white px-4 py-1 text-black">Login</button>
                        <button className = "btn bg-yellow-200 rounded border-white px-4 py-1 text-black"><ShoppingCart size={24} /></button>
                    </div>
                </div>
            </nav>
        </header>

        {/* Popup */}
        {isPopupOpen && (
            <div className="fixed inset-80 flex items-center justify-center bg-yellow-200/50 rounded-3xl mx-60 backdrop-blur-sm">
                <div className="bg-white p-4 rounded-3xl">
                    <h2 className="text-lg font-bold">Select Location</h2>
                    <form onSubmit={handleLocationSubmit}>
                        <input
                            type="text"
                            name="location"
                            placeholder="Enter your location"
                            className="border border-gray-300 rounded px-2 py-1"
                        />
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded m-5">
                            Submit
                        </button>
                    </form>
                    <button onClick={() => setIsPopupOpen(false)} className="mt-2 text-red-500">Close</button>
                </div>
            </div>
        )}

    </>
    );
}