import { defineConfig, loadEnv } from 'vite'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [],
    server: {
      hmr: {
        host: env.HOST
      },
      host: env.HOST,
      watch: {
        usePolling: true,
      },
      port: parseInt(env.PORT),
      https: {
        key: fs.readFileSync(env.HTTPS_KEY_PATH),
        cert: fs.readFileSync(env.HTTPS_CERT_PATH),
      }
    }
  }
})


