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
            <div className="text-5xl text-center sm:text-left font-extrabold text-white/95 tracking-wide">
                <span>Location</span>
            </div>
            <div className="grid gap-6 lg:gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-12">
                {locations && locations.map((location) => <LocationCard {...location} key={location.id} />)}
            </div>
        </div>
    );
}
