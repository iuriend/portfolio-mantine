import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // Para 'npm run dev'
  if (command === 'serve') {
    return {
      // Configuração localhost
      plugins: [react()],
    }
  } else {
    // Para 'npm run build' e 'npm run deploy'
    return {
      // Configuração para a publicação no GitHub
      base: '/portfolio-mantine/', 
      plugins: [react()],
    }
  }
})
