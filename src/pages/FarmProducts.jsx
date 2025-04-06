import { useState, useEffect } from "react";
import { PlusIcon, Trash2Icon, FileUpIcon, PencilIcon } from "lucide-react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FarmProducts() {
    const [products, setProducts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({image: "", name: "", price: "", inventory: ""});
    const [editingIndex, setEditingIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleCancel = () => {
        setShowForm(false);
        setForm({ image: "", name: "", price: "", inventory: "" });
        setEditingIndex(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingIndex !== null) {
           const updated = [...products];
           updated[editingIndex] = form; 
           setProducts(updated); 
           setEditingIndex(null); 
        } else {
            // Add a new product
            setProducts((prevProducts) => {
                const newProducts = [...prevProducts, form];
                return newProducts;
            });
        }
        setForm({ image: "", name: "", price: "", inventory: "" });
        setShowForm(false); 
    };

    const handleDelete = (index) => {
        const updated = products.filter((_, i) => i !== index);
        setProducts(updated);

        if (editingIndex === index) {
            setForm({ image: "", name: "", price: "", inventory: "" });
            setShowForm(false);
            setEditingIndex(null);
    }}

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setForm((prev) => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleEdit = (index) => {
        setForm(products[index]);
        setEditingIndex(index);
        setShowForm(true);
    };
    return (
        <>
           <div className="flex justify-between ">
                <h1 className="font-bold text-2xl">Your Produces</h1>
                <button className="btn bg-dark-green text-yellow-200 rounded-3xl px-3 py-2 flex hover:bg-yellow-200 hover:text-dark-green mr-10" onClick={() => setShowForm(true)}>
                    <PlusIcon size={25} className="mt-0.5" />
                </button>
            </div>
            <div className="grid grid-cols-4 font-semibold border-b pb-2 mt-3">
                <div></div>
                <div>Name</div>
                <div>Price</div>
                <div>Inventory</div>
            </div>

            {products.map((product, index) => (
                <div key={index} className="grid grid-cols-5 gap-4 items-center border-b pb-2 hover:bg-gray-500/30">
                    <div>
                        <img src={product.image} className="w-28 h-28 object-cover rounded mt-2 ml-3" />
                    </div>
                    <div className="ml-18">{product.name}</div>
                    <div className="ml-35">$ {product.price}</div>
                    <div className="ml-53">{product.inventory}</div>
                    <div className = "flex justify-end gap-[4vw] mr-3">
                        <button className="btn ml-30 hover:text-yellow-500" onClick={() => handleEdit(index)}><PencilIcon size={24}/></button>
                        <button type="button" className = " mr-3 hover:text-red-600" onClick={() => handleDelete(index)}><Trash2Icon size={24}/></button>
                    </div>
                </div>
            ))}

            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center rounded-3xl bg-black/30 z-50">
                    <div className="bg-white p-4 rounded-3xl border-10 border-dark-green">
                        <h2 className="text-lg font-bold">Enter Produce</h2>
                        <form className = "flex flex-col " onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-[2vw] mt-10">
                                    <div className="w-full h-48 bg-gray-200 border border-gray-300 rounded-md items-center justify-center hover:bg-black/30" onClick={() => document.getElementById("fileInput").click()}>
                                        {form.image ? (
                                            <img
                                                src={form.image}
                                                alt="Preview"
                                                className="w-full h-48 object-cover rounded-md hover:opacity-70"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center">
                                                <FileUpIcon size={50} className="mt-15"/>
                                            </div>
                                        )}
                                        <input 
                                            id="fileInput"
                                            type = "file"
                                            accept="image/*"
                                            onChange={handleImageUpload} 
                                            className="hidden"
                                        />
                                    </div>
                                    <input name="bio" type="text" value={form.bio} onChange={handleChange} placeholder="Bio" className="border border-gray-300 rounded px-1 py-1"/>
                                </div>
                                <div className="flex flex-col gap-[5vw] mt-10 ml-10">
                                    <input name="name" value={form.name} onChange={handleChange} placeholder="Produce Name" className="border border-gray-300 rounded px-1 py-1"/>
                                    <input name="price" value={form.price} onChange={handleChange} placeholder="Price ($)" className="border border-gray-300 rounded px-1 py-1"/>
                                    <input name="inventory" value={form.inventory} onChange={handleChange} placeholder="Inventory" className="border border-gray-300 rounded px-1 py-1"/>
                                </div>
                            </div>
                            <div className="flex gap-2 mt-3 justify-between">
                                <button type="submit" className = "bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-800">{editingIndex !== null ? "Update" : "Add"} Produce</button>
                                <button variant="outline" type="button" className = "hover:text-red-800" onClick={() => handleCancel()}>Cancel</button>
                                {editingIndex !== null && (
                                    <button type="button" variant="destructive" className = "ml-5 hover:text-red-800" onClick={() => handleDelete(editingIndex)}><Trash2Icon size={24}/></button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )   
}