module.exports = [
  {
    ignores: ['node_modules/**', 'playwright-report/**', 'test-results/**'], // Ignore node_modules and report folders
  },
  {
    files: ['**/*.ts', '**/*.js', '**/*.cjs'], // Apply the config to TypeScript files
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      'sonarjs': require('eslint-plugin-sonarjs'),
      'no-only-tests': require('eslint-plugin-no-only-tests'),
      '@stylistic/ts': require('@stylistic/eslint-plugin-ts')
    },
    rules: {
      'no-unused-vars': ['error'],
      'no-console': 'off',
      'max-lines-per-function': ['error', 80],
      'max-depth': ['error', 4],
      'sonarjs/cognitive-complexity': ['error', 15],
      'sonarjs/no-duplicate-string': 'warn',
      'eqeqeq': ['error', 'smart'],
      'quotes': ['error', 'single'],
      'no-cond-assign': ['error', 'always'],
      'no-unreachable': 'error',
      'no-useless-assignment': 'error',
      'no-var': 'error',
      'yoda': ['error', 'never'],
      'no-only-tests/no-only-tests': 'error',
      '@stylistic/ts/indent': ['error', 2]
    },
  },
  {
    // Override for test files (e.g., *.spec.ts)
    files: ['suites/**/*.test.ts'],
    rules: {
      'max-lines-per-function': 'off',  // Turn off this rule for test files
    },
  },
];