import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  build: {
    cssCodeSplit: false, // Esto unirá todo el CSS en un único archivo
  },
  server: {
    // Configuración del servidor en desarrollo (si la necesitas)
  },
});