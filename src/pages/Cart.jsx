import React, { useState, useEffect } from "react";
import { Trash2Icon } from "lucide-react";

export default function Cart() {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    console.log(cartItems);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const handleQuantityChange = (cart_id, newQuantity) => {
        const updatedCart = cartItems.map(item =>
            item.cart_id === cart_id ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCart);
    };

    const handleRemoveItem = (cart_id) => {
        const updatedCart = cartItems.filter(item => item.cart_id !== cart_id);
        setCartItems(updatedCart);
    };

    const clearCart = () => {

        const updatedCart = [];
        setCartItems(updatedCart);
        localStorage.removeItem("cart");
        localStorage.removeItem("nextCartId");
        
    };


    const calcSum = () => (cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)).toFixed(2);
    const cartSum = () => cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <>
            <div style={{ fontFamily: '"Playfair Display SC", serif' }} className="text-2xl ml-5 mt-3 font-bold">Cart</div>
            <hr className="border-b-2 border-dark-green my-4" />

            <div className="flex gap-8 h-screen px-2">
                <div className="w-2/3 pr-4 h-full overflow-y-auto">
                    {cartItems.map(item => (
                        <div key={item.cart_id} className="flex justify-between items-center border py-5 px-6 rounded-2xl bg-dark-green text-light-yellow mb-4">
                            <div className="flex items-center gap-4">
                                <img src={item.image_url} className="h-20 w-20 rounded-2xl border-2 border-light-yellow" alt={item.item_name} />
                                <div>
                                    <div className=" text-white font-bold">{item.item_name}</div>
                                    <div className = "flex">
                                        <div className="text-medium">{item.farm}</div>
                                        <div className="text-light italic"> - {item.delivery_method}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-8 items-center">
                                <div>
                                    <div className="ml-1">Quantity</div>
                                    <select
                                        className="bg-light-yellow text-dark-green rounded-2xl py-2 px-3 text-lg font-semibold"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.cart_id, Number(e.target.value))}
                                    >
                                        {[1, 2, 3, 4, 5].map(qty => (
                                            <option key={qty} value={qty}>{qty}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <div className="ml-1">Total Price</div>
                                    <div className="bg-light-yellow text-dark-green rounded-2xl py-2 px-5 text-lg font-semibold">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>

                                <button className="ml-3 hover:text-red-800" onClick={() => handleRemoveItem(item.cart_id)}>
                                    <Trash2Icon size={24} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-1/3">
                    <div className="flex flex-col justify-between items-center border py-6 px-8 rounded-2xl bg-dark-green text-light-yellow">
                        <div style={{ fontFamily: '"Playfair Display SC", serif' }} className="font-bold text-2xl mb-4">Order Summary</div>
                        <div className="bg-light-yellow text-dark-green rounded-2xl py-4 px-5 text-lg font-semibold mb-6 flex-col">
                            <div>Total: ${calcSum()}</div>
                            <div className="text-sm">{cartSum()} items</div>
                        </div>
                        <button className="btn bg-light-yellow text-dark-green w-full py-3 px-8 rounded-2xl hover:opacity-70">
                            Checkout
                        </button>
                    </div>

                    <button 
                        className="btn bg-red-600 text-white w-full py-3 px-8 rounded-2xl hover:opacity-70 mt-4"
                    onClick={clearCart}>
                         Clear Cart
                    </button>
                </div>
            </div>
        </>
    );
}