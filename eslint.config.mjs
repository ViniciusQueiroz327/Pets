import globals from "globals";
import pluginJs from "@eslint/js";
import pluginTs from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,  // Use o parser do TypeScript
      parserOptions: {
        ecmaVersion: "latest",  // Suporta ES6+ sintaxe
        sourceType: "module",   // Permite o uso de módulos
        ecmaFeatures: {
          jsx: true,  // Habilita JSX para React
        },
      },
    },
    plugins: {
      react: pluginReact,  // Ativa o plugin React
      "@typescript-eslint": pluginTs,  // Ativa o plugin TypeScript
    },
    rules: {
      "react/react-in-jsx-scope": "off",  // Para React 17+, não é necessário importar React
      "react/jsx-uses-react": "off",      // Desativa regra obsoleta para React 17+
      "@typescript-eslint/explicit-module-boundary-types": "off", // Desativa a necessidade de definir tipos de retorno
    },
  },
  pluginJs.configs.recommended,
  pluginTs.configs.recommended,
  pluginReact.configs.recommended,
];