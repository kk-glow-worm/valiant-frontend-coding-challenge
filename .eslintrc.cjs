module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    "parser": "@typescript-eslint/parser",
  },
  plugins: [
    "@typescript-eslint",
    "cypress"
  ],
  extends: [
    'standard',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  overrides: [
    {
      files: [
        './index.html',
        './src/**/*.{js,vue}',
      ],
      plugins: ['tailwindcss'],
      extends: ['plugin:tailwindcss/recommended'],
    },
    {
      files: [
        'tests/unit/**',
      ],
      plugins: [
        'vitest',
      ],
      extends: [
        'plugin:vitest/recommended',
      ],
      globals: {
        ...require('eslint-plugin-vitest').environments.env.globals,
      },
    },
  ],
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'object-curly-spacing': ['error', 'always'],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      functions: 'never',
    }],
    'vue/object-curly-spacing': ['error', 'always'],
  },
  env: {
    "cypress/globals": true
  }
}
