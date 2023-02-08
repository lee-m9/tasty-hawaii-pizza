"use client";

import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";
import NavLink from "./nav-link";

export default function HamburgerMenu() {
    let [hamburgerOpen, setHamburgerOpen] = useState(false);

    const onNavLinkClick = () => {
        setTimeout(() => {
            // To reduce motion of close the menu on click
            // if link is click when hamburger is open close the hamburger manually
            setHamburgerOpen(!hamburgerOpen);
        }, 150);
    };

    return (
        <>
            <Hamburger toggled={hamburgerOpen} toggle={setHamburgerOpen} size={28} direction="right" easing="ease-in-out" color="#fff" />
            {hamburgerOpen && (
                <div className="hambuger-menu flex flex-col absolute left-0 !text-white text-lg items-center z-[9999] bg-gray-900 w-screen sm:hidden">
                    <NavLink href="/" className="w-full !rounded-none !text-base !p-5 hover:bg-gray-800" onClick={onNavLinkClick}>
                        Home
                    </NavLink>
                    <NavLink href="/about" className="w-full !rounded-none !text-base !p-5 hover:bg-gray-800" onClick={onNavLinkClick}>
                        About
                    </NavLink>
                    <NavLink href="/contact" className="w-full !rounded-none !text-base !p-5 hover:bg-gray-800" onClick={onNavLinkClick}>
                        Contact
                    </NavLink>
                    <NavLink href="/locations" className="w-full !rounded-none !text-base !p-5 hover:bg-gray-800" onClick={onNavLinkClick}>
                        Locations
                    </NavLink>
                </div>
            )}
        </>
    );
}
