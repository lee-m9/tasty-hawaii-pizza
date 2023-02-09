"use client";

import NavLink from "./nav-link";
import Link from "next/link";
import Image from "next/image";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Header() {
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
            <header className="max-w-screen bg-zinc-900/50 backdrop-blur-[1px]">
                <div className="px-6 py-5 flex items-center space-y-0 mx-auto max-w-screen-xl">
                    <div className="flex-grow flex justify-start">
                        <Link href="/">
                            <Image
                                className="invert"
                                src="/papajohns_small_logo.png"
                                alt="Papajohns Logo"
                                width={100}
                                height={24}
                                priority
                            />
                        </Link>
                    </div>
                    <div className="hidden sm:flex items-center justify-center space-x-6 font-medium tracking-wide">
                        <nav className="flex items-center justify-end space-x-8 text-sm">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/about">About</NavLink>
                            <NavLink href="/contact">Contact</NavLink>
                            <NavLink href="/locations">Locations</NavLink>
                        </nav>
                    </div>
                    <div className="sm:hidden">
                        <Hamburger
                            toggled={hamburgerOpen}
                            toggle={setHamburgerOpen}
                            size={28}
                            direction="right"
                            easing="ease-in-out"
                            color="#fff"
                        />
                    </div>
                </div>
            </header>
            {hamburgerOpen && (
                <div className="hambuger-menu flex flex-col absolute left-0 text-lg items-center z-[9999] bg-zinc-900/50 backdrop-blur-[1px] w-screen sm:hidden">
                    <NavLink
                        href="/"
                        className="w-full !rounded-none !text-base !p-5 hover:bg-gray-800"
                        onClick={onNavLinkClick}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        href="/about"
                        className="w-full !rounded-none !text-base !p-5 hover:bg-gray-800"
                        onClick={onNavLinkClick}
                    >
                        About
                    </NavLink>
                    <NavLink
                        href="/contact"
                        className="w-full !rounded-none !text-base !p-5 hover:bg-gray-800"
                        onClick={onNavLinkClick}
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        href="/locations"
                        className="w-full !rounded-none !text-base !p-5 hover:bg-gray-800"
                        onClick={onNavLinkClick}
                    >
                        Locations
                    </NavLink>
                </div>
            )}
        </>
    );
}
