"use client";

import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import OTP from "./otp";
import LoadingSvg from "../loadingSvg";

interface SearchParams {
    coupon: string;
}

export default function Deals({ searchParams }: { searchParams: SearchParams }) {
    let [isOpen, setIsOpen] = useState(searchParams.coupon == "true");
    let [isProcessingOtp, setIsProcessingOtp] = useState(false);
    let [showOTPFields, setShowOTPFields] = useState(false);
    let [showCoupons, setShowCoupons] = useState(false);
    let [enableNext, setEnableNext] = useState(false);
    let [phone, setPhone] = useState("");

    function closeModal() {
        setIsOpen(false);
        setTimeout(() => {
            setIsProcessingOtp(false);
            setShowOTPFields(false);
            setShowCoupons(false);
            setEnableNext(false);
        }, 500);
    }

    function openModal() {
        setIsOpen(true);
    }

    function getOTP() {
        setIsProcessingOtp(true);
        setTimeout(() => {
            setIsProcessingOtp(false);
            setShowOTPFields(true);
        }, 1000);
    }

    function displayCoupon() {
        setShowCoupons(true);
        setEnableNext(false);
    }

    return (
        <>
            <div className="absolute left-0 top-[88px] sm:top-[76px] h-14 bg-slate-600/80 min-w-full flex items-center justify-center">
                <button
                    type="button"
                    className="inline-flex justify-center underline underline-offset-2"
                    onClick={openModal}
                >
                    Get an exclusive 15% off code
                </button>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-gray-800 px-8 py-12 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="text-lg font-light leading-6 text-gray-100">
                                        Get 15% off on your first order
                                    </Dialog.Title>
                                    <div className="mt-8 font-light">
                                        {showOTPFields ? (
                                            showCoupons ? (
                                                <div>TASTY15</div>
                                            ) : (
                                                <>
                                                    <div className="text-sm text-gray-200 mb-2">Enter the code</div>
                                                    <OTP enableNext={setEnableNext} />
                                                </>
                                            )
                                        ) : (
                                            <>
                                                <div className="text-sm text-gray-200">
                                                    Verify phone number and get an exclusive one-time discounted coupon
                                                    code
                                                </div>
                                                <div className="mt-6">
                                                    <label htmlFor="price" className="block text-sm text-gray-200 mb-1">
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        name="phonenumber"
                                                        id="phonenumber"
                                                        autoComplete="off"
                                                        maxLength={15}
                                                        onChange={(event) => setPhone(event.target.value)}
                                                        className="block tracking-wide w-2/3 font-medium outline-0 pl-2 pr-6 py-2 text-black placeholder:italic placeholder:text-slate-400 placeholder:text-sm"
                                                        placeholder="Enter phone number"
                                                    />
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <div className="mt-12 flex flex-wrap justify-between">
                                        {!showOTPFields && !isProcessingOtp && (
                                            <button
                                                type="button"
                                                className="inline-flex justify-center mr-1 rounded bg-teal-600/80 px-4 py-2 text font-normal text-white hover:bg-teal-600 shadow disabled:cursor-not-allowed disabled:bg-teal-900 disabled:shadow-none"
                                                onClick={getOTP}
                                                disabled={phone.length === 0}
                                            >
                                                Get OTP
                                            </button>
                                        )}
                                        {!showOTPFields && isProcessingOtp && (
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-4 py-2 font-nomal leading-6 shadow rounded-md text-white bg-teal-600/90 hover:bg-teal-900 transition ease-in-out duration-150 cursor-not-allowed disabled:cursor-not-allowed disabled:bg-teal-900 disabled:shadow-none"
                                                disabled
                                            >
                                                <LoadingSvg />
                                                Sending OTP...
                                            </button>
                                        )}
                                        {showOTPFields && (
                                            <button
                                                type="button"
                                                className="inline-flex justify-center mr-1 rounded bg-teal-600/80 px-4 py-2 text font-normal text-white hover:bg-teal-600 shadow disabled:cursor-not-allowed disabled:bg-teal-900 disabled:shadow-none"
                                                onClick={displayCoupon}
                                                disabled={enableNext === false}
                                            >
                                                Next
                                            </button>
                                        )}
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded px-4 py-2 text font-normal text-teal-500 hover:text-white/95 hover:bg-zinc-700/30"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
