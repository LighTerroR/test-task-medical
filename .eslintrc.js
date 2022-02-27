module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'max-len': ['error', { code: 120 }],
    'vue/max-len': ['error', {
      code: 100,
      template: 120,
    }],
    'import/extensions': [
      'off',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        vue: 'never',
      },
    ],
    'global-require': 0,
    'vue/no-v-html': 0,
    'nuxt/no-globals-in-created': 0,
    'no-bitwise': ['error', { allow: ['~'] }],
    'vue/require-prop-types': 0,
    'import/no-unresolved': 0,
    'vue/no-deprecated-slot-attribute': 0,
  },
};
