import SearchBar from "../components/SearchBar"
import React, { useState, useEffect } from "react";

export default function SearchProduce() {
    const [products, setProducts] = useState([]);

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

    const [sortVisible, setSortVisible] = useState(false);
    const [filterVisible, setFilterVisible] = useState(false);

    const toggleSort = () => setSortVisible(!sortVisible);
    const toggleFilter = () => setFilterVisible(!filterVisible);

    return (
        <>
            <div className="text-dark-green text-5xl m-5 font-bold">Find Produce</div>
            {/* Div for search and sort elements */}
            <div className="m-5 flex">
                <SearchBar />
                {/* Sort Dropdown */}
                <div className="relative">
                    <button className="bg-dark-green text-white font-medium py-2 px-4 rounded m-1 ml-3 hover:cursor-pointer" onClick={toggleSort}>Sort By</button>
                    {sortVisible && (
                        <div className="absolute bg-white shadow-lg rounded-md mt-2 py-2 w-[2 00px] z-10">
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-200 hover:cursor-pointer">
                        Price (Low to High)
                      </button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-200 hover:cursor-pointer">
                        Price (High to Low)
                      </button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-200 hover:cursor-pointer">
                        Distance
                      </button>
                    </div>
                    )}
                </div>

                {/* Filter Dropdown */}
                <div className="relative">
                <button className="bg-dark-green text-white font-medium py-2 px-4 rounded m-1 hover:cursor-pointer" onClick ={toggleFilter}>Filter By</button>
                    {filterVisible && (
                        <div className="absolute bg-white shadow-lg rounded-md mt-2 py-2 w-[200px] z-10">
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-200 hover:cursor-pointer">
                        Offers Delivery
                      </button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-200 hover:cursor-pointer">
                       Offers Pickup
                      </button>
                    </div>
                    )}
                </div>
                
                
            </div>
            {/* Div for all product results */}
            <div className="m-5 mt-5 flex flex-wrap gap-5">
                {products.map((product, index) => (
                    <div key={index} className="w-[22%] shadow-md m-3 p-3 relative"> 
                    {/* Image container */}
                    <div className="w-full pb-[100%] relative">
                        <img src="/assets/apple.webp" className="absolute inset-0 w-full h-full object-cover"/>
                    </div>
                        <h4 className="text-base font-light mt-3">Farm</h4>
                        <h3 className="text-xl font-medium">{product.item_name}</h3>
                        <div className="flex flex-wrap items-end my-2 gap-2">
                            <h5 className="text-3xl text-dark-green font-bold">{product.price}</h5>
                            <h6 className="text-sm text-gray font-light mb-1 italic">{product.unit}</h6>
                        </div>
                        <div className="text-sm bg-light-yellow text-gray-800 rounded-full p-1 px-3 inline-block mr-1"> 
                            <h7 >Pickup</h7>
                        </div>
                        <div className="text-sm bg-light-yellow text-gray-800 rounded-full p-1 px-3 inline-block ml-1 mb-2"> 
                            <h7 >Delivery</h7>
                        </div>
                    </div>
                    ))}
            </div>

        </>
    );
}

function ProduceCard({}) {

}