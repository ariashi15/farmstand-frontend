import { useState } from "react";
import { Pencil } from 'lucide-react';

export default function Account() {
 //temp settings
 const [photo, setPhoto] = useState(null);
 const [name, setName] = useState("Jane Doe"); 
 const [address, setAddress] = useState("1046 TIPPERARY ROAD OREGON, WI 53575");
 const [phone, setPhone] = useState("(608) 835-5871");
 const [email, setEmail] = useState("cdsecher@gmail.com");

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
                 <div className="m-8 text-5xl" style={{ fontFamily: '"Playfair Display SC", serif' }}>My Account</div>
                 <div className="flex flex-col md:flex-row">
                     <div className="w-[40%] pb-[25%] relative m-2 ml-10"> 
                     <img className="absolute inset-0 w-full h-full object-cover" src={photo ? URL.createObjectURL(photo) : "/assets/pfp.jpeg"}/>
                     </div>
             <div className="grid grid-cols-1 text-xl grid-flow-row h-10 w-full mt-2">
                 <div className="grid grid-cols-3">
                     <div className= "px-4 py-2 font-semibold">Name</div>
                     <div className= "px-4 py-2"> {name}</div>
                     <button className="justify-self-end mr-20 hover:text-gray-400" onClick={() => setIsEdit(true)}><Pencil/></button>
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
             </div>
         </div>
         <div className="mt-8 px-4 text-lg max-w-8xl">
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
                 <label className="block font-semibold mb-1">Name</label>
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
           
             <button type="submit" className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Save</button>
         </form>
         )}
     </>
 )   
}