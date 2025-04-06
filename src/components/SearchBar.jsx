'use client'

import { Search } from 'lucide-react';
import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SearchBar({products, setFiltered}) {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeSearch, setActiveSearch] = useState([]);
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setQuery(value);

        if (value === '') {
            setActiveSearch([]);
            setFiltered(products);
            return;
        }

        const matches = products.filter(product => 
            product.item_name.toLowerCase().includes(value)
        );

        setActiveSearch(matches.slice(0, 8));
        setFiltered(matches);
    }

    const handleClick = (product) => {
        setQuery(product.item_name);

        if (location.pathname !== '/search') {
            navigate(`/search?query=${encodeURIComponent(product.item_name)}`);
        }
        else {
            setActiveSearch([]);
        }
    };

    const handleSubmit = (e) => {  
        console.log("submit");
        e.preventDefault();
        if (!query) return;

        const matches = products.filter((product) =>
            product.item_name.toLowerCase().includes(query)
        );

        if (location.pathname !== '/search') {
            navigate(`/search?query=${encodeURIComponent(query)}`);
        } else {
            setFiltered(matches);
        }

        setActiveSearch([]);
    };

    return (
        <>
        <form className="relative text-dark-gray bg-light-gray w-md rounded-full" onSubmit={handleSubmit}>
            <div className="relative">
                {/*icon*/}
                <input type="search" placeholder="Search for produce..." className="px-3 py-3 w-full rounded-full" onChange={(e) => handleSearch(e)} value={query}/>
                <button className='absolute right-3 top-3 rounded-full bg-gray-100'>
                    <Search />
                </button>
            </div>

            {activeSearch.length > 0 && (
            <div className="absolute top-17 bg-light-gray text-dark-gray w-full rounded-xl flex flex-col z-1">
                {
                    activeSearch.map((s, i) => (
                        <button type="button" className = "hover:bg-gray-300 hover:cursor-pointer px-2 py-2 rounded bg-light-gray text-start" onClick={() => handleClick(s)} key={i}>{s.item_name}</button>
                    ))
                }
            </div>
            )
            }

            </form>
        </>
    )
}