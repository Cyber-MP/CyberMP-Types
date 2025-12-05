import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    dir: "tests",
    pool: "threads",
    typecheck: {
      checker: "tsc",
      enabled: true,
      exclude: ["src/**/*"],
      only: true,
    },
  },
});
