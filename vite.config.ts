import { defineConfig, loadEnv } from "vite";
import { readFileSync } from "fs";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [],
    build: {
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: "./index.ts",
        name: "HtmlMesh",
        // the proper extensions will be added
        fileName: "babylon-forcegraph",
      },
      rollupOptions: {
        external: [
          '@babylonjs/core',
          '@babylonjs/inspector',
          '@babylonjs/loaders'
        ],
        output: {
          globals: {
            '@babylonjs/core': 'BABYLON',
            '@babylonjs/inspector': 'BABYLON',
            '@babylonjs/loaders': 'BABYLON'
          }
        }
      }
    },
    optimizeDeps: {
      exclude: [
        "@babylonjs/core",
        "@babylonjs/inspector",
        "@babylonjs/loaders"
      ]
    },
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
        key: readFileSync(env.HTTPS_KEY_PATH),
        cert: readFileSync(env.HTTPS_CERT_PATH),
      }
    },
    resolve: {
      alias: {
        "babylon-forcegraph": resolve(__dirname, "./index.ts"),
      },
    },
  }
})


