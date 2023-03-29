/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// Primary
				darkCyan: "hsl(158, 36%, 37%)",
				cream: "hsl(30, 38%, 92%)",

				// Neutral
				veryDarkBlue: "hsl(212, 21%, 14%)",
				darkGrayishBlue: "hsl(228, 12%, 48%)",
			},
			fontFamily: {
				fraunces: ["Fraunces", "serif"],
				montserrat: ["Montserrat", "sans-serif"],
			},
		},
	},
	plugins: [],
};
