import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ command, mode }) => {
	const isGitHubPages = process.env.VITE_DEPLOY_TARGET === 'github-pages';

	return {
		plugins: [sveltekit()],
		base: isGitHubPages ? process.env.BASE_PATH : '/',
	};
});
