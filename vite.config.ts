// Helpers
import { getComponentImports } from "./src/app/helpers/auto-imports.helper";

// Path
import path from "path";

// URL
import { fileURLToPath, URL } from "url";

// Unplugin libraries
/**
 * @description Vite plugin to automatically import files from a directory.
 * @see https://github.com/antfu/unplugin-auto-import
 */
import AutoImport from "unplugin-auto-import/vite";

/**
 * @description Vite plugin to minify images using imagemin.
 * @see https://github.com/unplugin/unplugin-imagemin
 */
import imagemin from "unplugin-imagemin/vite";

// Vite libraries
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

/**
 * @description Vite plugin to minify svg files
 * @see https://github.com/vbenjs/vite-plugin-svg-icons
 */
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

/**
 * @description Vite plugin to remove console.log and other console.* calls from your code.
 * @see https://github.com/xiaoxian521/vite-plugin-remove-console
 */
import removeConsole from "vite-plugin-remove-console";

/**
 * @description Vite plugin to compress the build output using vite-plugin-compression.
 * @see https://github.com/vbenjs/vite-plugin-compression
 */
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      // Enable auto import by filename for default module exports under directories
      defaultExportByFilename: false,

      // Auto import for module exports under directories
      // by default it only scan one level of modules under the directory
      dirs: ["src/app/constants", "src/app/helpers"],

      // Filepath to generate corresponding .d.ts file.
      // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
      // Set `false` to disable.
      dts: "src/app/types/auto-imports.d.ts",

      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: true,
      },

      // global imports to register
      imports: [
        // @ts-expect-error - Add global imports here
        ...getComponentImports(),
        // @ts-expect-error - Add global imports here
        "react",
      ],

      // Include auto-imported packages in Vite's `optimizeDeps` options
      // Recommend to enable
      viteOptimizeDeps: true,
    }),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), "src/app/assets/icons")],

      // Specify symbolId format
      symbolId: "icon-[dir]-[name]",
    }),
    imagemin({
      // Default mode sharp. support squoosh and sharp
      mode: "squoosh",
      beforeBundle: true,
      // Default configuration options for compressing different pictures
      compress: {
        jpg: {
          quality: 10,
        },
        jpeg: {
          quality: 10,
        },
        png: {
          quality: 10,
        },
        webp: {
          quality: 10,
        },
      },
      conversion: [
        { from: "jpeg", to: "webp" },
        { from: "png", to: "webp" },
        { from: "JPG", to: "jpeg" },
      ],
    }),
    react(),
    removeConsole(),
    viteCompression(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
