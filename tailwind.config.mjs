/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#403092",
        secondary: "#caecff",
      },
      fontFamily: {
        branding: ['"branding"'],
        "branding-italic": ['"branding-italic"'],
        "branding-bold": ['"branding-bold"'],
        "branding-bold-italic": ['"branding-bold-italic"'],
        "branding-light": ['"branding-light"'],
        "branding-light-italic": ['"branding-light-italic"'],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', /* Internet Explorer and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari and Opera */
        },
      });
    },
  ],
};
