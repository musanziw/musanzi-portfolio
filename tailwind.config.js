const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
                courgette: ['Courgette', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                'hero': "url('/imgs/hero.png')",
                'section': "url('/imgs/section.png')",
            },
            colors: {
                'navy': '#0a192f',
                'dark-navy': '#020c1b',
                'light-navy': '#112240',
                'lightest-navy': '#233554',
                'navy-shadow': 'rgba(2,12,27,0.7)',
                'slate': '#8892b0',
                'light-slate': '#a8b2d1',
                'lightest-slate': '#ccd6f6',
                'green': '#64ffda',
                'green-tint': 'rgba(100,255,218,0.1)',
            }
        },
    },

};
