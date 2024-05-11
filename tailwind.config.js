/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-var-requires */
import tailwind from 'flowbite-react/tailwind'
import typography from 'flowbite-typography'

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', tailwind.content()],
    theme: {
        extend: {
            fontFamily: {
                bold: ['montserrat-bold', 'Arial', 'sans-serif'],
                medium: ['montserrat-medium', 'Arial', 'sans-serif'],
                regular: ['montserrat-regular', 'Arial', 'sans-serif'],
            },
            colors: {
                'brown-700': '#795458',
                'brown-400': '#FEECE2',
                'gray-700': '#4D4D4D',
            },
        },
    },
    plugins: [tailwind.plugin(), typography],
}
