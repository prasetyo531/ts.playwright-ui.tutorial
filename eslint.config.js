import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import sonarjs from 'eslint-plugin-sonarjs';
import prettier from 'eslint-plugin-prettier';

export default [
  // Ignore common directories
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  // Base config for JS and TS files
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      sonarjs,
      prettier,
    },
    rules: {
      // Recommended rules
      ...tsPlugin.configs.recommended.rules,
      ...sonarjs.configs.recommended.rules,

      // Prettier as an ESLint rule
      'prettier/prettier': 'error',

      // Custom rules
      '@typescript-eslint/no-unused-vars': ['warn'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },

  // Playwright-specific rules for test files (optional)
  {
    files: ['**/tests/**/*.ts', '**/*.spec.ts'],
    rules: {
      // Add playwright rules here if needed
      // 'playwright/no-skipped-test': 'warn',
      // 'playwright/no-focused-test': 'error',
    },
  },
];
