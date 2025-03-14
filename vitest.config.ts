import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  test: {
    globals: true,
    setupFiles: [path.resolve(__dirname, "./tests/setup.ts")],
    name: "vitest-react",
    environment: "jsdom",
    env: {
      IS_REACT_ACT_ENVIRONMENT: "true",
    },
    include: ["**/*.test.ts", "**/*.test.tsx", "**/*.spec.ts", "**/*.spec.tsx"],
    exclude: ["**/node_modules/**"],
  },
});
