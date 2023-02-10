import { LocationCardModel } from "@/model/location-model";
import { use } from "react";
import LocationCard from "./(location-card)/location-card";
import { BASE_URL } from "../../config";

async function getLocations() {
    let res = await fetch(BASE_URL + "/api/locations");
    return res.json();
}

export default function Locations() {
    let responseData = use(getLocations());
    let locations: LocationCardModel[] = JSON.parse(responseData);

    return (
        <div>
            <div className="text-5xl text-center sm:text-left font-extrabold tracking-wide">
                <span className="before:block before:absolute before:-inset-1 before:skew-y-2 before:top-8 before:bottom-0 before:bg-gradient-to-r before:from-emerald-400 before:to-teal-900 relative w-fit">
                    <span className="relative text-white">Locations</span>
                </span>
            </div>
            <div className="grid gap-6 lg:gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-12">
                {locations && locations.map((location) => <LocationCard {...location} key={location.id} />)}
            </div>
        </div>
    );
}
