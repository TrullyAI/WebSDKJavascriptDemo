import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  if (mode === "development")
    return defineConfig({
      server: {
        host: "0.0.0.0",
      },
      plugins: [react(), basicSsl()],
      define: {
        // eslint-disable-next-line no-undef
        "process.env": process.env,
        global: "window",
      },
    });
  else
    return defineConfig({
      plugins: [react()],
      define: {
        // eslint-disable-next-line no-undef
        "process.env": process.env,
        global: "window",
      },
    });
};
