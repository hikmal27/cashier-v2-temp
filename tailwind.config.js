module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            sen: ['Sen', 'sans-serif'],
        }
    },
    variants: {
        extend: {},
    },
    plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
