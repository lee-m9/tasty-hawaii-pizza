import { LocationCardModel } from "@/model/location-model";
import { FaPhoneAlt, FaDirections } from "react-icons/fa";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { TbPaperBag } from "react-icons/tb";

export default function LocationCard(location: LocationCardModel) {
    return (
        <div className="p-5 md:px-8 md:py-6 rounded-xl bg-gray-800 transform origin-center hover:scale-105 hover:bg-gray-700 transition duration-150 ease-in-out">
            {/* <div className="relative bg-gradient-to-b rounded-l-xl from-gradientPrimary to-gradientSecondary inline-block w-2 h-full"></div> */}
            <div className="flex w-full rounded-xl h-full">
                <div className="self-start flex-auto flex flex-wrap items-baseline pt-4 content-between h-full">
                    <div className="w-full flex flex-wrap items-baseline pb-5">
                        <div className="flex-auto">
                            <h2 className="inline-flex text-gray-100 text-lg opacity-100">{location.storeLocation}</h2>
                        </div>
                        <div className="whitespace-nowrap flex-none w-full">
                            <div>
                                <a
                                    href={`tel:${location.phone}`}
                                    target="_self"
                                    rel="noreferrer"
                                    className="inline-flex text-sm text-gray-300 -ml-2 py-1 px-2 hover:bg-gray-600 hover:rounded-full hover:text-white"
                                >
                                    <span className="inline-flex mr-1 items-center text-sky-500">
                                        <FaPhoneAlt />
                                    </span>
                                    {location.phone}
                                </a>
                                <a
                                    href={location.directions}
                                    className="inline-flex text-sm ml-2 py-1 px-2  text-gray-200 hover:bg-gray-600 hover:rounded-full hover:text-white"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="inline-flex mr-1 items-center text-sky-500">
                                        <FaDirections />
                                    </span>
                                    Directions
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto flex pb-6">
                        <div className="pb-8 sm:pb-0 pr-2">
                            <div className="text-gray-200">Delivery Hours</div>
                            <div className="text-gray-400 text-sm mt-1">{location.deliveryHours}</div>
                            <div className="mt-5">
                                <a
                                    href={location.orderDelivery}
                                    className="group bg-white/5 hover:bg-gray-600 text-teal-500 hover:text-white py-2 px-3 rounded-full"
                                    role="button"
                                >
                                    <span className="inline-flex align-baseline text-teal-500 group-hover:text-white">
                                        <MdOutlineDeliveryDining />
                                    </span>{" "}
                                    Order Delivery
                                </a>
                            </div>
                        </div>
                        <div className="pl-2">
                            <div className="text-gray-200">Carryout Hours</div>
                            <div className="text-gray-400 text-sm mt-1">{location.carryoutHours}</div>
                            <div className="mt-5">
                                <a
                                    href={location.orderCarryout}
                                    className="group bg-white/5 hover:bg-gray-600 text-teal-500 hover:text-white py-2 px-3 rounded-full"
                                    role="button"
                                >
                                    <span className="inline-flex align-baseline text-teal-500 group-hover:text-white">
                                        <TbPaperBag />
                                    </span>{" "}
                                    Order Carryout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
