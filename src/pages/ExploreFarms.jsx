import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowBigRightIcon } from 'lucide-react';

export default function ExploreFarms() {
    const [farms, setFarms] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchFarms = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/farms`);
                const data = await response.json();
                setFarms(data);
            } catch (error) {
                console.error('Error fetching farms:', error);
            }
        };

        fetchFarms();

    }, []);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/inventory/allfarms`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchAllProducts();
    }, []);


    return (
        <>
            <div className="relative flex justify-center items-center">
                {/* path png */}
                
               
                <img
                    src="/assets/path.svg"
                    className="absolute top-0 w-[80%] h-screen bg-contain bg-top bg-repeat-y z-[-1]"
                />
                
                <div className='flex justify-center text-center gap-5'>
                    <h1 className="text-4xl font-bold mb-[4vh] text-center tracking-widest" style={{ fontFamily: '"Playfair Display SC", serif' }}>Explore Farms! </h1>
                    <h1 className="text-4xl mt-1"><ArrowBigRightIcon size={40} /></h1>
                </div>
                <div className="grid grid-cols-3 gap-x-20 gap-y-31 mt-[18.5vh] m-[4vh]">
                    {farms.map((farm, index) => (
                    <FarmCard
                        key={index}
                        farm={farm}
                        name={farm.name}
                        image_url={farm.image_url}
                        products={products}
                            
                    />
                    ))}
                </div>
            </div>
        </>
    )
}

function FarmCard({ farm, name, image_url, products }) {
    const farmProducts = products.filter(product => product.farms.name === farm.name);

    const firstThreeItems = farmProducts.slice(0, 3);

    const itemsString = firstThreeItems.map(item => item.item_name).join(', ');

    const displayString = farmProducts.length > 3 ? `${itemsString} and more` : itemsString;


    return (
        <>
        
        <NavLink to="/farmpage" state={{farm}}>
        
        <div className="bg-light-gray h-[35vh] w-[35vh] flex flex-col items-center rounded-2xl">
            <div className="bg-dark-gray bg-cover bg-no-repeat bg-center h-[60%] w-[100%] p-0 m-0 rounded-tl-2xl rounded-tr-2xl"
                style={{ backgroundImage: `url(${image_url})` }}></div>
            <h1 className="font-bold" style={{ fontFamily: '"Playfair Display SC", serif' }}>{name}</h1>
            <div className="flex gap-2 text-center text-sm">
                {displayString}
                </div>
            <div className="flex gap-4">
            {farm.pickup && <div className="text-sm bg-light-yellow text-gray-800 rounded-full p-1 px-3 inline-block mr-1 mt-4">
                <p >Pickup</p>
            </div>}
            {farm.delivery && <div className="text-sm bg-green-300 text-gray-800 rounded-full p-1 px-3 inline-block ml-1 mt-4">
                <p >Delivery</p>
            </div>}
            </div>
            </div>
            </NavLink>
        </>
    )
}

