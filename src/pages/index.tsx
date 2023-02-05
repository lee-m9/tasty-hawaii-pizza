import { Syne } from "@next/font/google";
import AppContainer from "@/components/app-container/app-container";

const syne = Syne({ subsets: ["latin"] });

export default function Home() {
    return (
        <AppContainer>
            <div className="flex mx-auto my-0">
                <div className=" p-8 relative top-36 lg:top-52 text-center" style={{ height: "calc(100vh - 120px)" }}>
                    <div className="text-5xl font-extrabold">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-widest">
                            Tasty
                            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r before:from-primary before:to-secondary relative inline-flex scale-100 origin-center-left -rotate-[8deg]">
                                <span className="relative text-white">hawaii</span>
                            </span>
                            Pizza
                        </span>
                    </div>
                </div>
            </div>
        </AppContainer>
    );
}
