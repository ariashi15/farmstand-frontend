
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function FarmPage() {
    const location = useLocation();

    const [products, setProducts] = useState([]);
    
    const farm = location.state?.farm;
    
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
    

    if (!farm) {
        return <p>Loading...</p>;  // Or any loading indicator you prefer
    }

    // Filter the products based on the selected farm's id
    const filteredProducts = products.filter(product => product.farms.name === farm.name);
    
    const address = `${farm.street_address}, ${farm.city}, ${farm.state}, ${farm.zipcode}`;
    
    return (
        <>
            <p style={{ fontFamily: '"Playfair Display SC", serif' }} className="text-7xl text-center mt-7">{farm.name}</p>
            <div className='flex  ml-15 my-10'>
                {/* image div */}
                <div className='w-[35%] pb-[35%] relative mr-20'>
                    <img src={farm.image_url} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className='w-[55%]'>
                    <p style={{ fontFamily: '"Playfair Display SC", serif' }} className='text-2xl font-medium'>Who We Are</p>
                    <p> { farm.about}</p>
                    {farm.pickup && <div className="text-sm bg-light-yellow text-gray-800 rounded-full p-1 px-3 inline-block mr-1 mt-4">
                        <p >Pickup</p>
                    </div>}
                    {farm.delivery && <div className="text-sm bg-green-300 text-gray-800 rounded-full p-1 px-3 inline-block ml-1 mb-2 mt-4">
                        <p >Delivery</p>
                    </div>}
                    <p style={{ fontFamily: '"Playfair Display SC", serif' }} className='text-2xl font-medium mt-10'>Contact</p>
    
                    <div className="flex items-center gap-2 mt-4">
                         <img src="/assets/pin.svg" alt="Pin Icon" className="w-5 h-5" />
                        <p>{address}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                        <img src="/assets/phone.svg" alt="Phone Icon" className="w-5 h-5" />
                        <a href={`tel:${farm.phone_number}`}>{farm.phone_number}</a>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                        <img src="/assets/mail.svg" alt="Mail Icon" className="w-5 h-5" />
                        <a href={`mailto:${farm.email}`}>{farm.email}</a>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                        <img src="/assets/web.svg" alt="Website Icon" className="w-5 h-5" />
                        <a href={farm.website} target="_blank" rel="noopener noreferrer" >{farm.website}</a>
                    </div>

                </div>

            </div>
            <p style={{ fontFamily: '"Playfair Display SC", serif' }} className='text-3xl font-medium mt-10 text-center'>Our Products</p>
            {/* Container for all products*/}
            <div className="m-5 mt-5 flex flex-wrap gap-5">
                {filteredProducts.map((product, index) => (
                    <div key={index} className="w-[22%] shadow-md m-3 p-3 relative"> 
                    {/* Image container */}
                    <div className="w-full pb-[100%] relative">
                        <img src={`${product.image_url}`} className="absolute inset-0 w-full h-full object-cover"/>
                    </div>
                        <h4 className="text-base font-light mt-3">{product.farms.name}</h4>
                        <h3 className="text-xl font-medium">{product.item_name}</h3>
                        <div className="flex flex-wrap items-end my-2 gap-2">
                            <h5 className="text-3xl text-dark-green font-bold">${product.price.toFixed(2)}</h5>
                            <h6 className="text-sm text-gray font-light mb-1 italic">{product.unit}</h6>
                        </div>
                
                        </div>
                    
                    ))}
                </div>
           
        </>
    )
}