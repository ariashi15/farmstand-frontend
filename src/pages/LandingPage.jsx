import { NavLink } from 'react-router-dom';
import SearchBar from "../components/SearchBar";
import React, { useState, useEffect } from "react";

export default function LandingPage() {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/inventory/allfarms`);
                const data = await response.json();
                setProducts(data);
                setFiltered(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchAllProducts();
    }, []);
    

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* welcome banner */}
      <div className="flex flex-col justify-center items-center m-30">
        {/* background image*/}
        {/*<div className="absolute inset-0 bg-cover bg-center z-[-1] object-cover"
                style={{ backgroundImage: "url('src/assets/farmstand-3.jpg')" }}
            ></div> */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm brightness-75 z-[-1] scale-105"
          style={{
            backgroundImage: "url('src/assets/farmstand.jpg')",
            transform: `translateY(${offset * 0.3}px)`,
          }}
        ></div>
        <h1
          className="text-white text-7xl font-semibold "
          style={{ fontFamily: '"Playfair Display SC", serif' }}
        >
          Welcome to Farmstand!
        </h1>
        <h2 className="text-white text-lg m-8">
          Connecting you to local, organic, and sustainable produce.
        </h2>
        <SearchBar />
        <NavLink
          className="bg-light-yellow text-dark-yellow font-bold rounded-xl w-[250px] p-5 m-10 text-center"
          to="/explore"
        >
          Explore Farms Near Me
        </NavLink>
      </div>
      {/* what's in season */}
      <div className="flex flex-col justify-center items-center bg-dark-green p-10">
        <h1
          className="text-white text-4xl"
          style={{ fontFamily: '"Playfair Display SC", serif' }}
        >
          What's In Season?
        </h1>
        {/* food pics */}
        <div className="flex justify-center gap-10 pt-10">
          <div className="flex flex-col items-center">
            <div className="h-32 w-32 rounded-full overflow-hidden">
              <img
                src="assets/strawberries.png"
                className="object-cover h-full w-full"
              />
            </div>
            <p className="mt-2 text-center text-white text-sm">Strawberries</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-32 w-32 rounded-full overflow-hidden">
              <img
                src="assets/apples.webp"
                className="object-cover h-full w-full"
              />
            </div>
            <p className="mt-2 text-center text-white text-sm">Apples</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-32 w-32 rounded-full overflow-hidden">
              <img
                src="assets/peaches.jpg"
                className="object-cover h-full w-full"
              />
            </div>
            <p className="mt-2 text-center text-white text-sm">Peaches</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-32 w-32 rounded-full overflow-hidden">
              <img
                src="assets/oranges.webp"
                className="object-cover h-full w-full"
              />
            </div>
            <p className="mt-2 text-center text-white text-sm">Oranges</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-32 w-32 rounded-full overflow-hidden">
              <img
                src="assets/blackberries.jpg"
                className="object-cover h-full w-full"
              />
            </div>
            <p className="mt-2 text-center text-white text-sm">Blackberries</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-32 w-32 rounded-full overflow-hidden">
              <img
                src="assets/pear.jpg"
                className="object-cover h-full w-full"
              />
            </div>
            <p className="mt-2 text-center text-white text-sm">Pears</p>
          </div>
              </div>
              
              <NavLink
          className="bg-white text-dark-green font-bold rounded-full w-[250px] p-3 m-10 text-center"
          to="/search"
        >
          Search Produce
        </NavLink>
      </div>
    </>
  );
}
