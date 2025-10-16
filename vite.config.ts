import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

const serverIp = process.env.VITE_SERVER_IP;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Прокси сервер используется только при дев моде
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: serverIp,
  //       changeOrigin: true,
  //     },
  //   },
  // },
});
