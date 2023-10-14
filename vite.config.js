import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/TextUtils_REACT_APP",
  server: {
  hmr: {
  overlay: false,
  },
  },

})
