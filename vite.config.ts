import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react({}), viteTsconfigPaths(), svgrPlugin()],
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:4000',
				secure: false,
			},
		},
	},
});
