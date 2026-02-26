import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Plugin to resolve figma:asset/ imports to placeholder images
function figmaAssetPlugin(): Plugin {
  return {
    name: 'figma-asset-resolver',
    enforce: 'pre',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        return '\0' + id // virtual module prefix
      }
    },
    load(id) {
      if (id.startsWith('\0figma:asset/')) {
        const svg = `data:image/svg+xml,${encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
            <rect width="200" height="200" fill="#EEEDFF" rx="12"/>
            <circle cx="100" cy="80" r="35" fill="#C4C4E7"/>
            <rect x="60" y="125" width="80" height="10" rx="5" fill="#C4C4E7"/>
            <rect x="75" y="145" width="50" height="8" rx="4" fill="#D8D7F0"/>
          </svg>`
        )}`
        return `export default "${svg}"`
      }
    },
  }
}

export default defineConfig({
  base: '/merge-myplan/',
  plugins: [
    figmaAssetPlugin(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
