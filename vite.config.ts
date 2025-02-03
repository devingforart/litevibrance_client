import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: false, // Esto unirá todo el CSS en un único archivo
  },
  server: {
    // configuración del servidor en desarrollo (si la necesitas)
  },
});