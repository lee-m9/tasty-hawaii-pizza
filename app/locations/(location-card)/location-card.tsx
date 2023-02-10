import { LocationCardModel } from "@/model/location-model";
import { FaPhoneAlt, FaDirections } from "react-icons/fa";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { TbPaperBag } from "react-icons/tb";
import { BiTimeFive } from "react-icons/bi";

export default function LocationCard(location: LocationCardModel) {
    return (
        <div className="p-5 lg:p-4 md:px-8 md:py-6 rounded-md bg-zinc-800/90 transform origin-center hover:bg-zinc-800/95 hover:shadow-2xl hover:scale-[1.01] transition duration-150 ease-in-out max-w-[510px]">
            <div className="flex flex-col h-full">
                <div className="text-sm">
                    <span className="relavite inline-flex inset-y-0 left-2 items-center" aria-hidden="true">
                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                    </span>
                    <span className="text-gray-400 ml-2 inline-flex">
                        <span className="inline-flex mr-[0.3rem] items-center">
                            <FaPhoneAlt />
                        </span>
                        {location.phone}
                    </span>
                </div>
                <div className="flex-auto pb-4">
                    <h2 className="inline-flex text-gray-100 text-lg font-light tracking-[0.02rem]">
                        {location.storeLocation}
                    </h2>
                </div>
                <div className="py-4 border-t border-zinc-600/50 flex flex-col text-gray-400 font-light">
                    <div>
                        <span className="inline-flex w-1/2 items-center">
                            <BiTimeFive />
                            <span className="inline-flex ml-1">Delivery Hours</span>
                        </span>
                        <span className="inline-flex text-sm">{location.deliveryHours}</span>
                    </div>
                    <div className="group pt-3 text-teal-500 hover:underline font-normal">
                        <a href={location.orderDelivery} className="inline-flex" role="button">
                            Delivery
                            <span className="inline-flex ml-1 items-center group-hover:underline">
                                <MdOutlineDeliveryDining />
                            </span>
                            {"  -->"}
                        </a>
                    </div>
                </div>
                <div className="py-4 border-y border-zinc-600/50 flex flex-col text-gray-400 font-light">
                    <div>
                        <span className="inline-flex w-1/2  items-center">
                            <BiTimeFive />
                            <span className="inline-flex ml-1">Carryout Hours</span>
                        </span>
                        <span className="inline-flex text-sm">{location.carryoutHours}</span>
                    </div>
                    <div className="group pt-3 text-teal-500 hover:underline font-normal">
                        <a href={location.orderCarryout} className="inline-flex" role="button">
                            Carryout
                            <span className="inline-flex ml-1 items-center group-hover:underline">
                                <TbPaperBag />
                            </span>
                            {" -->"}
                        </a>
                    </div>
                </div>
                <div className="flex mt-5 w-full">
                    <div className="group w-full px-3 bg-zinc-700/20 py-2 mr-1 text-center hover:bg-zinc-700/30 hover:shadow transition cursor-pointer duration-2000 ease-in-out">
                        <a
                            href={`tel:${location.phone}`}
                            target="_self"
                            rel="noreferrer"
                            className="inline-flex text-sm text-teal-500 group-hover:text-white/90"
                        >
                            <span className="inline-flex mr-2 items-center group-hover:text-white/90">
                                <FaPhoneAlt />
                            </span>
                            Call
                        </a>
                    </div>
                    <div className="group w-full px-3 bg-zinc-700/20 py-2 text-center hover:bg-zinc-700/30 hover:shadow transition cursor-pointer duration-2000 ease-in-out">
                        <a
                            href={location.directions}
                            className="inline-flex text-sm text-teal-500 group-hover:text-white/90"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="inline-flex mr-2 items-center group-hover:text-white/90">
                                <FaDirections />
                            </span>
                            Directions
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
