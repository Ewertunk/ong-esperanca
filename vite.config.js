import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    base: "/ong-esperanca/",
    
  build: {
    rollupOptions: {
      input: {
        principal: resolve(__dirname, "index.html"),
        cadastro: resolve(__dirname, "html/cadastro.html")
      }
    }
  }
});