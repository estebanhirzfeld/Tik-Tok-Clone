import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: '_jsx',
    jsxFragment: '_jsxFragment',
    jsxInject: `import { jsx as _jsx, jsxFrag as _jsxFragment } from 'react'`,
  },
  
  plugins: [react()],
})
