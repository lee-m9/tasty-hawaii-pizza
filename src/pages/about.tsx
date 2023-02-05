import AppContainer from "@/components/app-container/app-container";
import ComingSoon from "@/components/coming-soon/coming-soon";
import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>Tasty Hawaii Pizza - About</title>
                <meta
                    name="description"
                    content="pizza food Hawaiian traditional fresh speciality soul comfort pizza coupon tasty food"
                />
            </Head>
            <AppContainer>
                <ComingSoon />
            </AppContainer>
        </>
    );
}
