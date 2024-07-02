/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			// colors: {
			// 	'primary-dark': '#1E1E1E', // Dark background for sections
			// 	'white': '#ffffff', // White text color
			// 	'accent-green': '#00e298', // Custom accent green
			// 	'accent-turquoise': '#0cd7b3', // Custom accent turquoise
			// 	'accent-light-turquoise': '#18ccce', // Custom accent light turquoise
			// 	'accent-blue': '#25c1e9', // Custom accent blue
			// }
		},
	},
	plugins: [],
}
