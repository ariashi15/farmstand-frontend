import { Search } from 'lucide-react';

export default function SearchBar() {
    return (
        <>
        <form className="relative text-dark-gray bg-light-gray w-md rounded-full">
            <div className="relative">
                {/*icon*/}
                <input type="search" placeholder="Search for produce..." className="px-3 py-3 w-full rounded-full"/>
                <button className='absolute right-3 top-3 rounded-full bg-gray-100'>
                    <Search />
                </button>
            </div>
            </form>
        </>
    )
}