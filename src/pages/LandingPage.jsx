import SearchBar from "../components/SearchBar"

export default function LandingPage() {
    return (
    <>
        <div class="flex flex-col justify-center items-center m-24">
            {/* background image*/}
            {/* <div class="absolute inset-0 bg-cover bg-center z-[-1] object-cover"
                style={{ backgroundImage: "url('src/assets/farmstand.jpg')" }}
            ></div> */}
            <h1 class="text-dark-green text-7xl">
                Welcome to Farmstand!
            </h1>
            <h2 class="text-dark-green text-lg m-8">
                Some subheading that we should decide later
            </h2>
            <SearchBar />
            <button class="bg-light-yellow rounded-xl w-[250px] p-5 m-10 text-center">Explore Farms Near Me</button>
        </div>

    </>
    )
}