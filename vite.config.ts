import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const config: UserConfig  = {
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler']],
        },
      }),    
    ],
  }

  if (command !== "serve") {
    config.base = "/wandegar-who-is-who/";
  }

  return config;
})
