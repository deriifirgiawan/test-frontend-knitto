import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"blue-sky": {
					"500": "#1877F2",
					"400": "#3D8AEF",
					"200": "#BEDAFF",
				},
				"green-grass": "#42B72A",
				"black-primary": "#232526",
			},
			backgroundColor: {
				"blue-sky": {
					"500": "#1877F2",
					"400": "#3D8AEF",
					"200": "#BEDAFF",
				},
				"green-grass": "#42B72A",
				"black-primary": "#232526",
			},
		},
	},
	plugins: [],
};
export default config;
