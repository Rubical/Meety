/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins-Regular", "sans-serif"],
				"poppins-bold": ["Poppins-Bold", "sans-serif"],
				"poppins-extrabold": ["Poppins-ExtraBold", "sans-serif"],
				"poppins-semibold": ["Poppins-SemiBold", "sans-serif"],
				"poppins-medium": ["Poppins-Medium", "sans-serif"],
				"poppins-light": ["Poppins-Light", "sans-serif"]
			},
			colors: {
				primary: {
					100: "#6960F70A",
					200: "#6960F71A",
					300: "#6960F7"
				},
				accent: {
					100: "#FBFBFD"
				},
				black: {
					DEFAULT: "#000000",
					100: "#8C8E98",
					200: "#666876",
					300: "#191d31"
				},
				danger: "#F75555"
			}
		}
	},
	plugins: []
}
