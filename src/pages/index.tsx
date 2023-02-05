import { Syne, Fondamento } from "@next/font/google";
import AppContainer from "@/components/app-container/app-container";
import Head from "next/head";

const syne = Syne({ subsets: ["latin"] });
const fondamento = Fondamento({ weight: "400", subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Tasty Hawaii Pizza</title>
                <meta
                    name="description"
                    content="pizza food Hawaiian traditional fresh speciality soul comfort pizza coupon tasty food"
                />
            </Head>
            <AppContainer>
                <div className="flex mx-auto my-0">
                    <div className=" p-8 relative top-52 text-center" style={{ height: "calc(100vh - 120px)" }}>
                        <div className="text-5xl font-extrabold" style={fondamento.style}>
                            <div className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-widest">
                                <div className="sm:inline-flex">Tasty </div>
                                <div className="before:block before:absolute before:-inset-1 my-3 sm:my-0 before:-skew-y-3 before:bg-gradient-to-r before:from-primary before:to-secondary relative sm:inline-flex scale-100 origin-center-left -rotate-[8deg]">
                                    <span className="relative text-white">hawaii</span>
                                </div>
                                <div className="sm:inline-flex"> Pizza</div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppContainer>
        </>
    );
}
