import type {Config} from 'tailwindcss';

export default {
	content: ['./src/**/*.{ts,tsx,astro}'],
	theme: {
		extend: {
			fontFamily: {
				sans: 'var(--font-primary)',
			},
			colors: {
				'text-link': 'var(--text-link)',
			},
		},
	},
} satisfies Config;
