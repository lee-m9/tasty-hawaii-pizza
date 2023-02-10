import LoadingSvg from "./loadingSvg";

export default function Loading() {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>
            <div className="font-xl min-h-full font-medium flex justify-center items-center">
                <LoadingSvg /> Loading...
            </div>
        </>
    );
}
