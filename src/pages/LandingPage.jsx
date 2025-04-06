import { Link } from 'react-router-dom';
import SearchBar from "../components/SearchBar"

export default function LandingPage() {

    return (
    <>
        {/* welcome banner */}
        <div className="flex flex-col justify-center items-center m-30">
            {/* background image*/}
            {/*<div className="absolute inset-0 bg-cover bg-center z-[-1] object-cover"
                style={{ backgroundImage: "url('src/assets/farmstand-3.jpg')" }}
            ></div> */}
            <h1 className="text-dark-green text-7xl">
                Welcome to Farmstand!
            </h1>
            <h2 className="text-dark-green text-lg m-8">
                Some subheading that we should decide later
            </h2>
            <SearchBar />
            <Link className="bg-light-yellow text-dark-yellow font-bold rounded-xl w-[250px] p-5 m-10 text-center" to="/explore">Explore Farms Near Me</Link>
        </div>
        {/* what's in season */}
        <div className="flex flex-col justify-center items-center bg-dark-green p-10">
            <h1 className="text-white text-4xl">What's In Season?</h1>
            {/* food pics */}
            <div className="flex justify-center gap-10 pt-10">
                <div className="bg-light-gray h-24 w-24">placeholder</div>
                <div className="bg-light-gray h-24 w-24">placeholder</div>
                <div className="bg-light-gray h-24 w-24">placeholder</div>
                <div className="bg-light-gray h-24 w-24">placeholder</div>
                <div className="bg-light-gray h-24 w-24">placeholder</div>
                <div className="bg-light-gray h-24 w-24">placeholder</div>
            </div>
        </div>
    </>
    )
}