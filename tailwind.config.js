// tailwind.config.js
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: '320px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1440px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '2560px',
			// => @media (min-width: 1536px) { ... }
		},
		fontFamily: {
			sans: ['inter', 'sans-serif'],
			serif: ['minion-pro-display', 'serif'],
			mono: ['Menlo', 'monospace'],
		},
	},
};
