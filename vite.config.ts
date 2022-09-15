import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import Unocss from 'unocss/vite';
import { presetUno } from 'unocss';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		Unocss({
			presets: [presetUno()]
		})
	],
	server: {
		host: true
	}
};

export default config;
