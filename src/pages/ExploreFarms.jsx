import { useState, useEffect } from 'react';

export default function ExploreFarms() {
    const [farms, setFarms] = useState([]);

    useEffect(() => {
        const fetchFarms = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/farms`);
                const data = await response.json();
                setFarms(data);
            } catch (error) {
                console.error('Error fetching farms:', error);
            }
        };

        fetchFarms();

    }, []);


    return (
        <>
            <div className="relative flex justify-center">
                {/* path png */}
                <div
                    className="absolute top-0 w-[80%] h-screen bg-contain bg-top bg-repeat-y z-[-1]"
                    style={{ backgroundImage: "url('src/assets/path.svg')" }}
                ></div>

                <div className="grid grid-cols-3 gap-x-20 gap-y-31 mt-[18.5vh] m-[4vh]">
                    {farms.map((farm, index) => (
                    <FarmCard
                        key={index}
                        name={farm.name}
                        image_url={farm.image_url}
                    />
                    ))}
                </div>
            </div>
        </>
    )
}

function FarmCard({ name, image_url }) {
    return (
        <div className="bg-light-gray h-[35vh] w-[35vh] flex flex-col items-center rounded-2xl">
            <div className="bg-dark-gray bg-cover bg-no-repeat bg-center h-[60%] w-[100%] p-0 m-0 rounded-tl-2xl rounded-tr-2xl"
                style={{ backgroundImage: `url(${image_url})` }}></div>
            <h1 className="font-bold">{name}</h1>
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

