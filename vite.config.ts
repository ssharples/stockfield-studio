import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    define: {
      'process.env': {
        ...env,
        NEXT_PUBLIC_SPOTIFY_CLIENT_ID: JSON.stringify(env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID),
        SPOTIFY_CLIENT_SECRET: JSON.stringify(env.SPOTIFY_CLIENT_SECRET)
      }
    }
  };
});
