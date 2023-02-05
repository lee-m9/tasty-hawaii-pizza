import Image from "next/image";
import { Fondamento } from "@next/font/google";

const fondamento = Fondamento({ weight: "400", subsets: ["latin"] });

export default function ComingSoon() {
    return (
        <div className="flex w-screen h-screen max-w-screen-lg mx-auto my-0">
            <div
                className="flex text-6xl p-8 relative top-36 lg:top-44 text-center h-screen bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                style={fondamento.style}
            >
                We are preparing something exciting & amazing for you
            </div>
        </div>
    );
}
