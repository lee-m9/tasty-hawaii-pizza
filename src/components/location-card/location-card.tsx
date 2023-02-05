import { LocationCardModel } from "@/models/location-card-model";
import { FaPhoneAlt, FaDirections } from "react-icons/fa";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { TbPaperBag } from "react-icons/tb";

export default function LocationCard(location: LocationCardModel) {
    return (
        <div className="relative flex leading-none rounded-xl max-w-[500px] min-w-[405px]">
            <div className="relative bg-gradient-to-b rounded-l-xl from-gradientPrimary to-gradientSecondary inline-block w-2 h-full"></div>
            <div className="flex w-full rounded-xl h-full">
                <div className="self-start flex-auto flex flex-wrap items-baseline pt-4 content-between h-full">
                    <div className="w-full flex flex-wrap items-baseline pb-5 px-5">
                        <div className="flex-auto">
                            <h2 className="inline-flex text-gray-900 text-lg opacity-100">{location.storeLocation}</h2>
                        </div>
                        <div className="whitespace-nowrap flex-none w-full">
                            <div>
                                <a
                                    href={`tel:${location.phone}`}
                                    target="_self"
                                    rel="noreferrer"
                                    className="inline-flex text-sm font-medium text-gray-500 -ml-2 py-1 px-2 hover:bg-gray-100 hover:rounded-full"
                                >
                                    <span className="inline-flex mr-1 items-center text-sky-500">
                                        <FaPhoneAlt />
                                    </span>
                                    {location.phone}
                                </a>
                                <a
                                    href={location.directions}
                                    className="inline-flex text-sm font-medium ml-2 py-1 px-2  text-gray-500 hover:bg-gray-100 hover:rounded-full"
                                >
                                    <span className="inline-flex mr-1 items-center text-sky-500">
                                        <FaDirections />
                                    </span>
                                    Directions
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex bg-slate-50 rounded-br-lg shadow flex-col">
                        <div className="flex mt-3 mb-7 justify-around">
                            <div className="">
                                <div className="text-gray-700">Delivery Hours</div>
                                <div className="text-gray-600 text-sm mt-1">{location.deliveryHours}</div>
                                <div className="mt-5">
                                    <a
                                        href={location.orderDelivery}
                                        className="group bg-sky-100 hover:bg-sky-500 text-sky-500 hover:text-white py-2 px-3 rounded-full"
                                        role="button"
                                    >
                                        <span className="inline-flex align-bottom text-sky-500  group-hover:text-white">
                                            <MdOutlineDeliveryDining />
                                        </span>{" "}
                                        Order Delivery
                                    </a>
                                </div>
                            </div>
                            <div className="border-r border-slate-100"></div>
                            <div className="">
                                <div className="text-gray-700">Carryout Hours</div>
                                <div className="text-gray-600 text-sm mt-1">{location.carryoutHours}</div>
                                <div className="mt-5">
                                    <a
                                        href={location.orderCarryout}
                                        className="group bg-sky-100 hover:bg-sky-500 text-sky-500 hover:text-white py-2 px-3 rounded-full"
                                        role="button"
                                    >
                                        <span className="inline-flex align-bottom text-sky-500 group-hover:text-white">
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
        </div>
    );
}
