import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        /^node:.*/,
        "@mui/material",
        "@mui/styled-engine",
        "@nextui-org/react",
        "react",
        "react-dom",
        "react-router-dom",
      ],
    },
  },
});
