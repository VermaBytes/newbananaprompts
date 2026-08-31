import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });
const config = [
  { ignores: [".next/**", "dist/**", "node_modules/**"] },
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Apostrophes and quotation marks in JSX text are rendered safely by React.
      // Requiring HTML entities makes long-form editorial content harder to maintain.
      "react/no-unescaped-entities": "off"
    }
  }
];

export default config;
