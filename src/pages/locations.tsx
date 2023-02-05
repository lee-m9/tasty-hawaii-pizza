import { BASE_URL } from "../config";
import LocationCard from "@/components/location-card/location-card";
import { LocationCardModel } from "@/models/location-card-model";
import AppContainer from "@/components/app-container/app-container";
import Head from "next/head";
import { Syne } from "@next/font/google";

const syne = Syne({ subsets: ["latin"] });

export default function Locations(props: any) {
    let locations: LocationCardModel[] = JSON.parse(props.locations || []);

    return (
        <AppContainer>
            <Head>
                <title>Tasty Hawaiian Pizza - Locations</title>
            </Head>
            <div className="flex flex-col p-4 py-8 px-4">
                <div className="h-10">
                    <h2 style={syne.style} className="text-3xl tracking-wide">
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative">
                            <span className="relative text-white">Locations</span>
                        </span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2">
                    {locations && locations.map((location) => <LocationCard {...location} key={location.id} />)}
                </div>
            </div>
        </AppContainer>
    );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
    // Call an external API endpoint to get locations.
    // You can use any data fetching library
    const res = await fetch(BASE_URL + "/api/locations");
    const locations = await res.json();

    // By returning { props: { locations } }
    // will receive `locations` as a prop at build time
    return {
        props: {
            locations,
        },
    };
}
