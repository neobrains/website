/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			"div-bg": "#ffffff0f",
			"hover-div-bg": "#ffffff1f",
			"menu": "#ffffff3f",
		  },
		  fontFamily: {
			"exo-2": ["'Exo 2'", "sans-serif"],
			lato: ["Lato", "sans-serif"],
		  },
		},
	  },
	plugins: [],
}
