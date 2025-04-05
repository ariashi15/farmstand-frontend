import { Search } from 'lucide-react';

export default function SearchBar() {
    return (
        <>
            <div class="flex italic text-dark-gray bg-light-gray px-5 py-3 w-[500px] rounded-full">
                <Search /> 
                <div class="px-2">Search for produce...</div>
            </div>
        </>
    )
}