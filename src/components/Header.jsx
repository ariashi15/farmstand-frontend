import { useState } from 'react';
import { ShoppingCart, MapPin } from 'lucide-react';

export default function Header() {
    const [isPopupOpen, setIsPopupOpen] = useState(false); 
    const [location, setLocation] = useState('');

    const handleLocationSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const location = formData.get('Zip Code')
        setLocation(location);
        setIsPopupOpen(false);
        // Handle location submission logic here
    };
    return (
        <>
        <header className = "bg-dark-green py-3 items-center text-yellow-50">
            <nav className = "flex justify-between items-center bg-dark-green mx-auto w-[97%]">
                <div>
                    <button class ="btn flex bg-yellow-200 rounded border-white px-4 py-1 text-black" onClick={() => setIsPopupOpen(true)}>
                        <MapPin size={24} class = "mr-2 -ml-2"/>
                        <span>{location || "Enter Location"}</span>
                    </button>
                </div>
                <div className = "flex items-center gap-[2vw]">
                    <ul className= "flex gap-[2vw] pt-1">
                        <li>
                            <a className = "hover:text-yellow-200" href = "#">Search Produce</a>
                        </li>
                        <li>
                            <a className = "hover:text-yellow-200" href = "#">Explore Farms</a>
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