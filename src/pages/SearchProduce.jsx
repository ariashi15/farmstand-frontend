import SearchBar from "../components/SearchBar";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function SearchProduce() {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/inventory/allfarms`);
                const data = await response.json();
                setProducts(data);
                setFiltered(data);

                const params = new URLSearchParams(location.search);
                const query = params.get('query');
                if (query) {
                    const filteredItems = data.filter((item) =>
                        item.item_name.toLowerCase().includes(query.toLowerCase())
                    );
                    setFiltered(filteredItems);
                }
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
            <div style={{ fontFamily: '"Playfair Display SC", serif' }} className="text-dark-green text-5xl m-5 font-bold">Search Produce</div>
            {/* Div for search and sort elements */}
            <div className="m-5 flex">
                <SearchBar products={products} setFiltered={setFiltered}/>
                {/* Sort Dropdown */}
                <div className="relative">
                    <button className={`bg-dark-green text-white font-medium py-2 px-4 hover:cursor-pointer rounded m-1 ml-3 ${sortVisible ? 'bg-green-700' : ''}`} onClick={toggleSort}>Sort By</button>
                    {sortVisible && (
                        <div className="absolute shadow-lg bg-white rounded-md mt-2 py-2 w-[200px] z-10">
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
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
                    <button className={`bg-dark-green text-white hover:cursor-pointer font-medium py-2 px-4 rounded m-1 ${filterVisible ? 'bg-green-700' : ''}`} onClick ={toggleFilter}>Filter By</button>
                    {filterVisible && (
                        <div className="absolute shadow-lg bg-white rounded-md mt-2 py-2 w-[200px] z-10">
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
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
                {filtered.length > 0 ? (
                    filtered.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))
                ) : (
                    <div className="text-gray-500 text-xl w-full text-center mt-10">
                        No results found.
                    </div>
                )}
            </div>
        </>
    );
}

function ProductCard({ product }) {
    return (
        <NavLink to="/product" state={{product}} className="w-[22%] shadow-md m-3 p-3 relative"> 
            {/* Image container */}
            <div className="w-full pb-[100%] relative">
                <img src={`${product.image_url}`} className="absolute inset-0 w-full h-full object-cover" draggable="false"/>
            </div>
            <h4 className="text-base font-light mt-3">{product.farms.name}</h4>
            <h3 className="text-xl font-medium">{product.item_name}</h3>
            <div className="flex flex-wrap items-end my-2 gap-2">
                <h5 className="text-3xl text-dark-green font-bold">${product.price.toFixed(2)}</h5>
                <h6 className="text-sm text-gray font-light mb-1 italic">{product.unit}</h6>
            </div>
            {(product.farms.pickup || product.farms.delivery) && (
                <div className="flex gap-2">
                    {product.farms.pickup && (
                        <div className="text-sm bg-light-yellow text-gray-800 rounded-full p-1 px-3 inline-block">
                            <p>Pickup</p>
                        </div>
                    )}
                    {product.farms.delivery && (
                        <div className="text-sm bg-light-green text-gray-800 rounded-full p-1 px-3 inline-block">
                            <p>Delivery</p>
                        </div>
                    )}
                </div>
            )}
        </NavLink>
    );
}