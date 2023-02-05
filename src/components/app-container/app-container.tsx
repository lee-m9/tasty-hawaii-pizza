import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

const inter = Inter({ subsets: ["latin"] });

export default function AppContainer(props: any) {
    let [hamburgerOpen, setHamburgerOpen] = useState(false);

    return (
        <div className="h-auto min-h-screen">
            <Head>
                <title>Tasty Hawaii Pizza</title>
                <meta
                    name="description"
                    content="pizza food Hawaiian traditional fresh speciality soul comfort pizza coupon tasty food"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <header
                className="fixed top-0 w-screen z-[3000] bg-black/80 backdrop-saturate-100 backdrop-blur-sm"
                style={inter.style}
            >
                <div className="max-w-screen-lg mx-auto my-0 py-0 pl-8 pr-4 text-center flex items-center justify-between h-16">
                    <Link href="/">
                        <Image src="/papajohns_small_logo.png" alt="Papajohns Logo" width={100} height={24} priority />
                    </Link>
                    <div className="hidden md:flex justify-end">
                        <nav className="flex items-center justify-end space-x-16 text-white text-lg">
                            <Link href="/locations">Locations</Link>
                            <Link href="/about">About</Link>
                            <Link href="/contact">Contact</Link>
                        </nav>
                    </div>
                    <div className="md:hidden">
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
            <Image src="/pizza-bg.png" alt="" fill className="object-cover pointer-events-none -z-10" />
            <div className="flex flex-col justify-between pt-16 h-auto min-h-screen mx-auto backdrop-blur-[8px] bg-white/80 backdrop-saturate-100">
                <div
                    className={`flex-col space-y-8 p-8 text-black text-lg items-start fixed z-50 h-screen bg-white w-screen md:hidden ${
                        hamburgerOpen ? "flex" : "hidden"
                    }`}
                >
                    <Link href="/locations">Locations</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <main
                    className="flex flex-col justify-between items-center h-full w-full max-w-screen-lg mx-auto my-0"
                    style={inter.style}
                >
                    {props.children}
                </main>
                <footer className="flex justify-center px-8 py-4">
                    <div>©2022 Papa Johns International, Inc. All Rights Reserved</div>
                </footer>
            </div>
        </div>
    );
}
