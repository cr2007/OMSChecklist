import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		csp: {
			directives: {
				'script-src': ['self']
			}
		},
		paths: {
			base: process.env.VITE_DEPLOY_TARGET === 'github-pages' ? '' : process.env.BASE_PATH
		}
	},
	preprocess: vitePreprocess()
};

export default config;
