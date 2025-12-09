/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      typewriter: ["Elegant Typewriter", "sans-serif"],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // Match existing font
            fontFamily: '"Elegant Typewriter", sans-serif',
            // Preserve existing link styles
            a: {
              color: "#1d4ed8", // blue-700
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            // Match existing spacing
            p: {
              marginBottom: "1rem",
            },
            // List styling
            ul: {
              listStyleType: "disc",
              listStylePosition: "inside",
            },
            ol: {
              listStylePosition: "inside",
            },
            // Code styling
            code: {
              backgroundColor: "#f3f4f6",
              padding: "0.125rem 0.25rem",
              borderRadius: "0.25rem",
              fontWeight: "400",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
