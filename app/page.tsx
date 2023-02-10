import { Fondamento } from "@next/font/google";
import Deals from "./(deals)/deals";

const fondamento = Fondamento({ weight: "400", subsets: ["latin"] });

export default function Home(props: any) {
    console.log(props);

    return (
        <>
            <Deals searchParams={props.searchParams} />
            <div className="flex w-screen max-w-screen-lg mx-auto my-0 justify-center pt-4">
                <div className="text-8xl !font-extrabold" style={fondamento.style}>
                    <div className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-900 tracking-widest">
                        <div className="flex justify-center">Tasty</div>
                        <div className="before:block before:absolute before:-inset-0 before:bottom-3 before:top-9 -mt-2 -mb-4 before:bg-gradient-to-r before:from-emerald-400 before:to-teal-900 relative">
                            <span className="relative text-white">hawaii</span>
                        </div>
                        <div className="flex justify-center">Pizza</div>
                    </div>
                </div>
            </div>
        </>
    );
}
