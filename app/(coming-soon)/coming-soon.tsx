import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ComingSoon() {
    return (
        <div className="flex w-screen max-w-screen-lg mx-auto my-0 justify-center">
            <div
                className="flex flex-col text-6xl sm:text-7xl p-4 mr-11 pt-24 sm:pt-28 md:pt-20 lg:pt-0 md:text-8xl lg:text-9xl font-extrabold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                style={inter.style}
            >
                <span className="we-are animated-gradient-text_background animated-gradient-text_background-1">
                    <span className="animated-gradient-text_foreground animated-gradient-text_foreground-1">
                        We are cooking
                    </span>
                </span>
                <span className="something animated-gradient-text_background animated-gradient-text_background-2">
                    <span className="animated-gradient-text_foreground animated-gradient-text_foreground-2">
                        Something
                    </span>
                </span>
                <span className="amazing animated-gradient-text_background animated-gradient-text_background-3">
                    <span className="animated-gradient-text_foreground animated-gradient-text_foreground-3">
                        Amazing for you!
                    </span>
                </span>
            </div>
        </div>
    );
}
