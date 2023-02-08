import { LocationCardModel } from "@/model/location-model";
import { use } from "react";
import LocationCard from "./(location-card)/location-card";

async function getLocations() {
    let res = await fetch("http://localhost:3000/api/locations");
    return res.json();
}

export default function Locations() {
    let responseData = use(getLocations());
    let locations: LocationCardModel[] = JSON.parse(responseData);

    return (
        <div>
            Location
            {/* <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
                {locations && locations.map((location) => <LocationCard {...location} key={location.id} />)}
            </div> */}
        </div>
    );
}
