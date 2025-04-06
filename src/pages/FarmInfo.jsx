import { useState } from "react";
import { Pencil} from 'lucide-react';

export default function FarmInfo() {
    //temp settings
    const [photo, setPhoto] = useState(null);
    const [name, setName] = useState("Carandale Farm"); 
    const [address, setAddress] = useState("1046 TIPPERARY ROAD OREGON, WI 53575");
    const [phone, setPhone] = useState("(608) 835-5871");
    const [email, setEmail] = useState("cdsecher@gmail.com");
    const [website, setWebsite] = useState("https://carandalefarm.com/");
    const [delivers, setDelivers] = useState(true);
    const [pickup, setPickup] = useState(true);
    const [desc, setDesc] = useState("We are a family-run farm focused on growing strawberries and blueberries. We are open from 10am-6pm on weekdays. Please email us for any questions.")

    const [isEdit, setIsEdit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEdit(false);
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhoto(file); // Set the selected file
        }
    };

    return (
        <>
        {!isEdit ? (
            <>
            <div className="flex flex-col md:flex-row">
                <img className="rounded-lg max-w-2xl" src={photo ? URL.createObjectURL(photo) : "/src/assets/farm-1.png"}/>
                <div className="grid grid-cols-1 text-xl grid-flow-row h-10 w-full">
                    <div className="grid grid-cols-3">
                        <div className= "px-4 py-2 font-semibold">Farm Name</div>
                        <div className= "px-4 py-2"> {name}</div>
                        <button className="justify-self-end hover:text-gray-400" onClick={() => setIsEdit(true)}><Pencil/></button>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className= "px-4 py-2 font-semibold">Address</div>
                        <div className= "px-4 py-2 col-span-2"> {address}</div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className= "px-4 py-2 font-semibold">Phone Number</div>
                        <div className= "px-4 py-2 col-span-2"> {phone}</div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className= "px-4 py-2 font-semibold">Email Address</div>
                        <div className= "px-4 py-2 col-span-2"> {email}</div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className= "px-4 py-2 font-semibold">Website</div>
                        <div className= "px-4 py-2 underline col-span-2"> <a href={website}>{website}</a></div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className= "px-4 py-2 font-semibold">Delivery</div>
                        <div className= "px-4 py-2 col-span-2">{delivers ? "Yes" : "No"}</div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className= "px-4 py-2 font-semibold">Pickup</div>
                        <div className= "px-4 py-2 col-span-2">{pickup ? "Yes" : "No"}</div>
                    </div>
                </div>
            </div>
            <div className="mt-8 px-4 text-lg max-w-8xl">
            <h2 className="text-2xl font-bold mb-2">Who We Are</h2>
            <p>{desc}</p>
            </div>
            </>)
            : (                
            <form className="px-4 py-6 space-y-4 max-w-3xl mx-auto" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4">Edit Farm Info</h2>
                <div>
                    <label class="block font-semibold mb-1">Farm photo</label>
                    {photo && (
                        <div className="mb-2">
                            <img src={URL.createObjectURL(photo)} className="w-48 object-cover rounded-lg"/>
                        </div>
                    )}
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 py-1" id="file_input" type="file" onChange={handlePhotoChange}/>
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">PNG or JPG only, landscape orientation</p>
                </div>
                <div>
                    <label className="block font-semibold mb-1">Farm Name</label>
                    <input className="w-full border rounded px-3 py-2" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Address</label>
                    <input className="w-full border rounded px-3 py-2" value={address} onChange={e => setAddress(e.target.value)} />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Phone Number</label>
                    <input className="w-full border rounded px-3 py-2" value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Email</label>
                    <input className="w-full border rounded px-3 py-2" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Website</label>
                    <input className="w-full border rounded px-3 py-2" value={website} onChange={e => setWebsite(e.target.value)} />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Who We Are</label>
                    <textarea className="w-full border rounded px-3 py-2" rows={4} value={desc} onChange={e => setDesc(e.target.value)} />
                </div>
                <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" checked={delivers} onChange={e => setDelivers(e.target.checked)} />
                        Delivers
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" checked={pickup} onChange={e => setPickup(e.target.checked)} />
                        Pickup
                    </label>
                </div>
                <button type="submit" className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Save</button>
            </form>
            )}
        </>
    )   
}