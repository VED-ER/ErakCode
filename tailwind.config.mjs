import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
                neuropolitcal: ["Neuropolitical"],
            },
            colors: {
                primary: "#0000EC",
                background: "#000102",
            },
        },
    },
    plugins: [],
}
