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
    // Enable compression
    minify: 'terser',
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
          if (id.includes('react') || id.includes('react-dom')) return 'vendor-react'
          if (id.includes('react-router')) return 'vendor-router'
        },
        // Optimize chunk file names for caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Generate source maps for production debugging
    sourcemap: false,
    // Enable CSS code splitting
    cssCodeSplit: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'gsap',
      '@radix-ui/react-dialog',
      'lucide-react',
    ],
  },
});
