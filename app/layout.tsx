import { Inter } from "@next/font/google";
import Header from "./header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head />
            <body
                className="scroll-smooth antialiased flex flex-col min-h-screen bg-black/95 text-white bg-cover bg-center"
                style={inter.style}
            >
                <div className="flex-1 bg-gray-900/40 backdrop-blur-[1px]">
                    <Header />
                    <main className="main pb-12">
                        <div className="mx-auto max-w-screen-xl">
                            <div className="px-3 sm:px-6 pt-16 lg:pt-20 pb-16 md:pb-16">{children}</div>
                        </div>
                    </main>
                    <footer className="text-gray-400">
                        <div className="mx-auto max-w-screen-xl">
                            <div className="px-8 sm:px-6 py-9">
                                <div className="flex justify-center md:space-x-6 pt-10 border-t border-gray-700 text-gray-400">
                                    ©2022 Papa Johns International, Inc. All Rights Reserved
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
