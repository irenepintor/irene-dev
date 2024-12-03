/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#4D4D4D',
					200: '#797979',
					300: '#d9d9d9',
				},
				accent: {
					100: '#FF9933',
					200: '#903e00',
				},
				text: {
					100: '#FFFFFF',
					200: '#e0e0e0',
				},
				bg: {
					100: '#1A1A1A',
					200: '#292929',
					300: '#404040',
				},
			},
		},
	},
	plugins: [],
};