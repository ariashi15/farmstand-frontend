export default function ExploreFarm() {
    return (
        <>
            <div className="relative flex justify-center">
                {/* path png */}
                <div
                    className="absolute top-0 w-[80%] h-full bg-contain bg-top bg-repeat-y z-[-1]"
                    style={{ backgroundImage: "url('src/assets/path.svg')" }}
                ></div>

                <div className="grid grid-cols-3 gap-x-20 gap-y-31 mt-[18.5vh] m-[4vh]">
                    <FarmCard />
                    <FarmCard />
                    <FarmCard />
                    <FarmCard />
                    <FarmCard />
                    <FarmCard />
                    <FarmCard />
                    <FarmCard />
                    <FarmCard />
                </div>
            </div>
        </>
    )
}

function FarmCard() {
    return (
        <div className="bg-light-gray h-[35vh] w-[35vh] flex flex-col items-center rounded-2xl">
            <div className="bg-dark-gray h-[60%] w-[100%] p-0 m-0 rounded-tl-2xl rounded-tr-2xl">image placeholder</div>
            <h1 className="font-bold">Farm Name</h1>
            <div className="flex gap-2">
                <div>
                    item
                </div>
                <div>
                    item
                </div>
                <div>
                    item
                </div>
            </div>
            <div className="flex gap-4">
                <div>Pickup</div>
                <div>Delivery</div>
            </div>
        </div>
    )
}

