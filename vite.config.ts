import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: "/",   // keep this
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist"
  },
  server: {
    host: true,
    allowedHosts: [
      ".manus.computer",
      ".manus-asia.computer",
      "localhost",
      "127.0.0.1"
    ]
  }
})
