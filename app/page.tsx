import { Fondamento } from "@next/font/google";

const fondamento = Fondamento({ weight: "400", subsets: ["latin"] });

export default function Home() {
    return (
        <div className="flex w-screen max-w-screen-lg mx-auto my-0 justify-center">
            <div className="text-8xl font-extrabold" style={fondamento.style}>
                <div className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-widest">
                    <div className="flex">Tasty</div>
                    <div className="before:block before:absolute before:-inset-1 my-5 before:-skew-y-3 before:bg-gradient-to-r before:from-primary before:to-secondary relative flex scale-100 origin-center-left -rotate-[8deg]">
                        <span className="relative text-white">hawaii</span>
                    </div>
                    <div className="flex">Pizza</div>
                </div>
            </div>
        </div>
    );
}
