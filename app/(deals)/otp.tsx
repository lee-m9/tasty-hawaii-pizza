"use client";

import React, { useReducer } from "react";

interface OTPModel {
    otp1: string;
    otp2: string;
    otp3: string;
    otp4: string;
    otp5: string;
    otp6: string;
}

const reducer = (state: OTPModel, action: any) => {
    switch (action.type) {
        case "otp1": {
            return { ...state, otp1: action.otpValue };
        }
        case "otp2": {
            return { ...state, otp2: action.otpValue };
        }
        case "otp3": {
            return { ...state, otp3: action.otpValue };
        }
        case "otp4": {
            return { ...state, otp4: action.otpValue };
        }
        case "otp5": {
            return { ...state, otp5: action.otpValue };
        }
        case "otp6": {
            return { ...state, otp6: action.otpValue };
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
};

const initialState: OTPModel = { otp1: "", otp2: "", otp3: "", otp4: "", otp5: "", otp6: "" };

export default function OTP({ enableNext }: { enableNext: Function }) {
    const [otpState, dispatch] = useReducer(reducer, initialState);

    const handleChange = (otp: any, event: any) => {
        dispatch({
            type: otp,
            otpValue: event.target.value,
        });
    };

    const checkCurrentOTPValues = () => {
        let currentValues = Object.values(otpState).join("");
        currentValues = currentValues.replaceAll(" ", "");
        enableNext(currentValues.length === 6);
    };

    const inputfocus = (element: any) => {
        switch (element.key) {
            case "Delete":
            case "Backspace":
                {
                    const next = element.target.tabIndex - 2;
                    if (next > -1) {
                        element.target.form.elements[next].focus();
                    }
                }
                break;
            case "Tab":
            case "Shift":
            case "ArrowRight":
            case "ArrowLeft":
                break;
            case " ":
            case "Spacebar":
                element.preventDefault();
                break;
            default: {
                const next = element.target.tabIndex;
                if (next < 6) {
                    element.target.form.elements[next].focus();
                }
            }
        }
        checkCurrentOTPValues();
    };

    return (
        <form noValidate>
            <div className="flex">
                <input
                    name="otp1"
                    type="text"
                    autoComplete="off"
                    className="inline-flex w-10 text-center h-10 font-semibold mr-3 rounded outline-0 px-1 text-black sm:text-sm"
                    value={otpState.otp1}
                    onChange={(event) => handleChange("otp1", event)}
                    tabIndex={1}
                    maxLength={1}
                    onKeyUp={(event) => inputfocus(event)}
                />
                <input
                    name="otp2"
                    type="text"
                    autoComplete="off"
                    className="inline-flex w-10 text-center h-10 font-semibold mr-3 rounded outline-0 px-1 text-black sm:text-sm"
                    value={otpState.otp2}
                    onChange={(event) => handleChange("otp2", event)}
                    tabIndex={2}
                    maxLength={1}
                    onKeyUp={(event) => inputfocus(event)}
                />
                <input
                    name="otp3"
                    type="text"
                    autoComplete="off"
                    className="inline-flex w-10 text-center h-10 font-semibold mr-3 rounded outline-0 px-1 text-black sm:text-sm"
                    value={otpState.otp3}
                    onChange={(event) => handleChange("otp3", event)}
                    tabIndex={3}
                    maxLength={1}
                    onKeyUp={(event) => inputfocus(event)}
                />
                <input
                    name="otp4"
                    type="text"
                    autoComplete="off"
                    className="inline-flex w-10 text-center h-10 font-semibold mr-3 rounded outline-0 px-1 text-black sm:text-sm"
                    value={otpState.otp4}
                    onChange={(event) => handleChange("otp4", event)}
                    tabIndex={4}
                    maxLength={1}
                    onKeyUp={(event) => inputfocus(event)}
                />

                <input
                    name="otp5"
                    type="text"
                    autoComplete="off"
                    className="inline-flex w-10 text-center h-10 font-semibold mr-3 rounded outline-0 px-1 text-black sm:text-sm"
                    value={otpState.otp5}
                    onChange={(event) => handleChange("otp5", event)}
                    tabIndex={5}
                    maxLength={1}
                    onKeyUp={(event) => inputfocus(event)}
                />
                <input
                    name="otp6"
                    type="text"
                    autoComplete="off"
                    className="inline-flex w-10 text-center h-10 font-semibold mr-3 rounded outline-0 px-1 text-black sm:text-sm"
                    value={otpState.otp6}
                    onChange={(event) => handleChange("otp6", event)}
                    tabIndex={6}
                    maxLength={1}
                    onKeyUp={(event) => inputfocus(event)}
                />
            </div>
        </form>
    );
}
