import { Search } from 'lucide-react';

export default function SearchBar() {
    return (
        <>
            <div className="flex italic text-dark-gray bg-light-gray px-5 py-3 w-[500px] rounded-full">
                {/*icon*/}
                <Search /> 
                <div className="px-2">Search for produce...</div>
            </div>
        </>
    )
}