import React, { useState } from "react";
import { PencilIcon, Trash2Icon } from "lucide-react";

export default function Cart() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Apple",
            farm: "Crystaliciariachloe Farm",
            quantity: 1,
            price: 5.99,
        },
        {
            id: 2,
            name: "Banana",
            farm: "Banana Farm",
            quantity: 2,
            price: 3.99,
        },
        {
            id: 3,
            name: "Orange",
            farm: "Orange Farm",
            quantity: 1,
            price: 4.99,
        },
        {
            id: 4,
            name: "Grapes",
            farm: "Grape Farm",
            quantity: 3,
            price: 2.99,
        },
        {
            id: 5,
            name: "Strawberry",
            farm: "Strawberry Farm",
            quantity: 1,
            price: 6.99,
        },
        {
            id: 6,
            name: "Blueberry",
            farm: "Blueberry Farm",
            quantity: 2,
            price: 4.49,
        },
        {
            id: 7,
            name: "Pineapple",
            farm: "Pineapple Farm",
            quantity: 1,
            price: 5.49,
        }
    ]);


    const handleQuantityChange = (id, newQuantity) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const calcSum = () => {
        return (cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)).toFixed(2);
    }

    const cartSum = () => {
        return (cartItems.reduce((sum, item) => sum + item.quantity, 0))
    }

    return (
        <>
        <div className="text-2xl ml-5 mt-3 font-bold">
            Cart
        </div>
        <hr className="border-b-2 border-dark-green my-4" />
        <div className="flex gap-8 h-screen px-2"> {/* Added gap to create space between cart items and summary */}
            <div className="w-2/3 pr-4 h-full overflow-y-auto">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border py-5 px-6 rounded-2xl bg-dark-green text-light-yellow mb-4">
                        <div className="flex items-center gap-4">
                            <img src="./assets/apple.webp" className="h-20 w-20 rounded-2xl border-2 border-light-yellow" alt={item.name} />
                            <div>
                                <div className="font-bold text-xl">{item.name}</div>
                                <div>{item.farm}</div>
                            </div>
                        </div>
                        <div className="flex gap-8 items-center">
                            <div>
                                <div className="ml-1">Quantity</div>
                                <select 
                                    className="bg-light-yellow text-dark-green rounded-2xl py-2 px-3 text-lg font-semibold"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                                >
                                    {[1, 2, 3, 4, 5].map(qty => (
                                        <option key={qty} value={qty}>{qty}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <div className="ml-1">Total Price</div>
                                <div className="bg-light-yellow text-dark-green rounded-2xl py-2 px-5 text-lg font-semibold">
                                    ${(item.quantity * item.price).toFixed(2)}
                                </div>
                            </div>
                            <button className="ml-3 hover:text-red-800" onClick={() => handleRemoveItem(item.id)}>
                                <Trash2Icon size={24} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Order Summary Section */}
            <div className="w-1/3">
                <div className="flex flex-col justify-between items-center border py-6 px-8 rounded-2xl bg-dark-green text-light-yellow">
                    <div className="font-bold text-2xl mb-4">Order Summary</div>
                    <div className="bg-light-yellow text-dark-green rounded-2xl py-4 px-5 text-lg font-semibold mb-6 flex-col">
                        <div>Total: ${calcSum()} </div>
                        <div className="text-sm">{cartSum()} items </div>
                    </div>
                    <button className="btn bg-light-yellow text-dark-green w-full py-3 px-8 rounded-2xl hover:opacity-70">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    </>
    )
}