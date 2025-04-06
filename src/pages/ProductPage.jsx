import React, { useState, useEffect } from "react";
import { NavLink, useParams } from 'react-router-dom';

export default function ProductPage() {
    const { productid } = useParams();
    console.log(productid);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(0);
    const [selected, setSelected] = useState(null); // null means no button is selected initially

    useEffect(() => {
        const fetchProductByID = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/inventory/${productid}`);
                const data = await response.json();
                setProduct(data[0]);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false); // set loading to false after fetch
            }
        }

        fetchProductByID();
    }, [productid]);

    if (loading) {
        return <div>Loading...</div>; // Show a loading message while fetching
    }

    const increaseQuantity = () => {
        if (quantity < 10) {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
    }
    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const toggleButton = (button) => {
        setSelected(button === selected ? null : button); // toggle selection
    };

    console.log(product);

    return (
        <>
            <div className="m-10 "> 
                <NavLink to="/search" className ="text-gray-500 font-light my-5 hover:underline">Return to search</NavLink>
                {/*image div*/}
                <div className="flex mt-2"> 
                    <div className="w-[35%] pb-[35%] relative">
                        <img src={`${product.image_url}`} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div className="ml-25 w-[55%]">
                        <h4 className="text-xl font-medium mb-1">{product.farms.name}</h4>
                        <h3 className="text-4xl font-medium">{product.item_name}</h3>
                        <p className="text-sm mt-2">{product.description}</p>
                        <div className="flex flex-wrap items-end my-4 gap-2">
                            <h5 className="text-4xl text-dark-green font-bold">${product.price.toFixed(2)}</h5>
                            <h6 className="text-base text-gray font-light mb-1 italic">{product.unit}</h6>
                        </div>
                        
                        
                        <div className="mb-1 mt-2">Quantity</div>
                        <div className="flex items-center">
                            <button onClick={decreaseQuantity} className={`bg-gray-200 text-black font-bold py-2 px-4 rounded ${quantity==0 ? 'text-gray-400' : 'text-black'}`}>-</button>
                            <span className="mx-4 text-lg">{quantity}</span>
                            <button onClick={increaseQuantity} className={`bg-gray-200 text-black font-bold py-2 px-4 rounded ${quantity==10 ? 'text-gray-400' : 'text-black'}`}>+</button>
                        </div>
                        <div className="mt-6 mb-2"> 
                            Delivery Method
                        </div>
                        <div>
                            <button className={`text-lg border-dark-green border-2 text-gray-800 rounded-full p-1 px-4 inline-block mr-3 ${selected === 'sort' ? 'bg-dark-green text-white' : ''}`} onClick = {() => toggleButton('sort')}> 
                                Pickup
                            </button>
                            <button className={`text-lg border-dark-green border-2 text-gray-800 rounded-full p-1 px-4 inline-block mr-3 ${selected === 'filter' ? 'bg-dark-green text-white' : ''}`} onClick= {() => toggleButton('filter')}>
                                Delivery
                            </button>

                        </div>

                        <button className="text-lg border-dark-green border-2 text-white bg-dark-green rounded-md p-2 px-4 inline-block mt-8" >
                            Add to Cart
                        </button>
                    </div>
                </div>
                
        
            </div>
            
        </>
    )
}