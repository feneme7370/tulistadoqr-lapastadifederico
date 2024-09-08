/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "primary": {
          50: '#f9f5f1',
          100: '#ede4d8',
          200: '#8f5944',
          300: '#603f32',
          400: '#873e22',
          500: '#d9c5ae',
          600: '#8f5944',
          700: '#7f493e',
          800: '#fffcf2',
          900: '#573430',
          950: '#301a18',
        },
        "secondary": {
          50: "#F4FFE5",
          100: "#EAFFCC",
          200: "#D5FF99",
          300: "#BFFF66",
          400: "#AAFF33",
          500: "#95FF00",
          600: "#77CC00",
          700: "#599900",
          800: "#3B6600",
          900: "#1E3300",
          950: "#0F1900"
        }
      }
    },
  },
  plugins: [],
}

