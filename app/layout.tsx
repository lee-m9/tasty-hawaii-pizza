import Image from "next/image";
import { Turn as Hamburger } from "hamburger-react";
import { Inter } from "@next/font/google";
import NavLink from "./nav-link";

const inter = Inter({ subsets: ["latin"] });

import "./globals.css";
import HamburgerMenu from "./hamburger-menu";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head />
            <body className="antialiased flex flex-col min-h-screen bg-black/95 text-white" style={inter.style}>
                <div className="flex-1">
                    <header className="max-w-screen bg-gray-900/40 backdrop-blur-[1px]">
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
                                <HamburgerMenu />
                            </div>
                        </div>
                        {/* <div className="max-w-screen-lg min-w-full py-0 pl-8 pr-4 text-center flex items-center justify-between h-full"> */}

                        {/* <div className="md:hidden">
                            <Hamburger
                            toggled={hamburgerOpen}
                            toggle={setHamburgerOpen}
                            size={28}
                            direction="right"
                            easing="ease-in-out"
                            color="#fff"
                        />
                        </div> */}
                        {/* </div> */}
                    </header>
                    <Image src="/pizza-bg.svg" alt="" fill className="object-cover pointer-events-none -z-10" />

                    {/* className={`flex-col space-y-8 p-8 text-black text-lg items-start fixed z-50 h-screen bg-white w-screen md:hidden ${
                    hamburgerOpen ? "flex" : "hidden"
                 }`} */}
                    {/* <div className="flex flex-col justify-between pt-16 h-auto min-h-screen mx-auto backdrop-blur-[8px] bg-white/80 backdrop-saturate-100">
                    <main
                        className="flex flex-col justify-between items-center h-full w-full max-w-screen-lg mx-auto my-0"
                        style={inter.style}
                    >
                        {props.children}
                    </main>
                </div> */}
                    <main className="main relative pb-12 bg-gray-900/40 backdrop-blur-[1px]">
                        <div className="mx-auto max-w-screen-xl">
                            <div className="px-3 sm:px-6 pt-16 lg:pt-20 pb-16 md:pb-16">{children}</div>
                        </div>
                    </main>
                    <footer className="text-gray-400 bg-gray-900/40 backdrop-blur-[1px]">
                        <div className="mx-auto max-w-screen-xl">
                            <div className="px-8 sm:px-6 py-9">
                                <div className="flex justify-center md:space-x-6 pt-10 border-t border-gray-700 text-gray-400">
                                    ©2022 Papa Johns International, Inc. All Rights Reserved
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                        <div className="flex justify-center border-t border-slate-400/20 py-10">
                            <div className="text-center mt-4 text-sm text-slate-500 sm:mt-3">
                                ©2022 Papa Johns International, Inc. All Rights Reserved
                            </div>
                        </div>
                    </footer> */}
                </div>
            </body>
        </html>
    );
}
