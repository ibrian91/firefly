import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Asegúrate de que la salida de build esté correcta
    assetsDir: 'assets', // Asegura que los assets estén correctamente organizados
  },
})