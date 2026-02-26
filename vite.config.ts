import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [inspectAttr(), react()],
  build: {
    outDir: '_site',
    rollupOptions: {
      output: {
        // Split large vendor libraries into separate cacheable chunks
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('gsap')) return 'vendor-gsap'
          if (id.includes('/three/') || id.includes('@react-three')) return 'vendor-three'
          if (id.includes('@radix-ui')) return 'vendor-radix'
          if (id.includes('recharts') || id.includes('/d3-') || id.includes('/d3.')) return 'vendor-charts'
          if (id.includes('lucide-react')) return 'vendor-icons'
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
