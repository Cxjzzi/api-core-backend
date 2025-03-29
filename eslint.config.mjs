import globals from "globals";
<<<<<<< HEAD

export default [
  {
    ignores: ["**/node_modules/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node, // 
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        process: "readonly",
        __dirname: "readonly",
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      "no-unused-vars": "off",
    },
  },
];
=======
import js from "@eslint/js";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.node } },
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
]);
>>>>>>> 5f536d8 (fix: disable no-unused-vars in ESLint config)
