/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#f6d365",
                secondary: "#fda085",
                gradientPrimary: "#abe6ee",
                gradientSecondary: "#71d2f0",
            },
        },
    },
    plugins: [],
};
