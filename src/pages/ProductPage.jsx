import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function ProductPage() {
    const location = useLocation();
    const product = location.state?.product;
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [nextCartId, setNextCartId] = useState(Number(localStorage.getItem("nextCartId")) || 1);
    
   // const [product, setProduct] = useState(null);
   // const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(null); // null means no button is selected initially
    const [addedToCart, setAddedToCart] = useState(false);
    const [deliveryMethod, setDeliveryMethod] = useState(null);  // 'pickup' or 'delivery'


    const addToCart = () => {
        const newItem = {
            item_id: product.item_id,
            item_name: product.item_name,
            price: product.price,
            quantity,
            farm: product.farms.name,
            delivery_method: deliveryMethod,
            image_url: product.image_url,
            cart_id: nextCartId
        };

        const updatedCart = [...cart, newItem];  // Add the new item to the cart
        setCart(updatedCart);  // Update the cart state
        localStorage.setItem("cart", JSON.stringify(updatedCart));  // Save updated cart to localStorage

        const newNextId = nextCartId + 1;
        setNextCartId(newNextId);
        localStorage.setItem("nextCartId", newNextId);

                // Show the "Added to cart" message and hide it after 2 seconds
                setAddedToCart(true);
                setTimeout(() => {
                    setAddedToCart(false);
                }, 2000); // Hide message after 2 seconds

     
        console.log(cart)
        console.log(nextCartId)
    };


    // Sync cart and nextCartId to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("nextCartId", nextCartId);
    }, [nextCartId]);


    // useEffect(() => {
    //     const fetchProductByID = async () => {
    //         try {
    //             const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/inventory/${productid}`);
    //             const data = await response.json();
    //             setProduct(data[0]);
    //         } catch (error) {
    //             console.error('Error fetching product:', error);
    //         } finally {
    //             setLoading(false); // set loading to false after fetch
    //         }
    //     }

    //     fetchProductByID();
    // }, [productid]);

    // if (loading) {
    //     return <div>Loading...</div>; // Show a loading message while fetching
    // }



    const increaseQuantity = () => {
        if (quantity < 5) {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
    }
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const toggleButton = (method) => {
        setDeliveryMethod(method === deliveryMethod ? null : method);  // toggle
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
                            <button onClick={decreaseQuantity} className={`bg-gray-200 text-black font-bold py-2 px-4 rounded ${quantity==1 ? 'text-gray-400' : 'text-black'}`}>-</button>
                            <span className="mx-4 text-lg">{quantity}</span>
                            <button onClick={increaseQuantity} className={`bg-gray-200 text-black font-bold py-2 px-4 rounded ${quantity==5 ? 'text-gray-400' : 'text-black'}`}>+</button>
                        </div>
                        <div className="mt-6 mb-2"> 
                            Delivery Method
                        </div>
                        <div>
                        <button 
                        className={`text-lg border-dark-green border-2 text-gray-800 rounded-full p-1 px-4 inline-block mr-3 ${deliveryMethod === 'Pickup' ? 'bg-dark-green text-white' : ''}`}
                        onClick={() => toggleButton('Pickup')}>
                        Pickup
                        </button>

                        <button 
                        className={`text-lg border-dark-green border-2 text-gray-800 rounded-full p-1 px-4 inline-block mr-3 ${deliveryMethod === 'Delivery' ? 'bg-dark-green text-white' : ''}`}
                        onClick={() => toggleButton('Delivery')}>
                        Delivery
                        </button>

                        </div>

                        <button onClick={addToCart} className="text-lg border-dark-green border-2 text-white bg-dark-green rounded-md p-2 px-4 inline-block mt-8" >
                            Add to Cart
                        </button>
                        {addedToCart && <div className="text-green-800 mt-4">Added to cart</div>}
  
                    </div>
                </div>
                
        
            </div>
            
        </>
    )
}