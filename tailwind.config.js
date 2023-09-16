/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: { 
        'light': { DEFAULT: '#f5e6e8', 100: '#441b20', 200: '#883641', 300: '#bf5e6b', 400: '#daa2a9', 500: '#f5e6e8', 600: '#f7ebec', 700: '#f9f0f1', 800: '#fbf5f6', 900: '#fdfafa' },
        'main': { DEFAULT: '#611975', 100: '#140518', 200: '#270a2f', 300: '#3b0f47', 400: '#4e145e', 500: '#611975', 600: '#9426b2', 700: '#b949d8', 800: '#d186e5', 900: '#e8c2f2' },
        'accent1': { DEFAULT: '#663076', 100: '#150a18', 200: '#291430', 300: '#3e1d48', 400: '#522760', 500: '#663076', 600: '#9145a8', 700: '#af6dc4', 800: '#ca9ed7', 900: '#e4ceeb' },
        'accent2': { DEFAULT: '#a680b3', 100: '#221726', 200: '#452e4d', 300: '#674573', 400: '#8a5c99', 500: '#a680b3', 600: '#b899c2', 700: '#c9b3d1', 800: '#dbcce0', 900: '#ede6f0' }
      },
      boxShadow: {
        'custom': 'inset 0 8px 10px -12px rgba(97,25,117, 0.3)',
      }
      ,
    },
  },
  plugins: [],
}
