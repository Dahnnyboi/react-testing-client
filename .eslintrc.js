// .eslintrc.cjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended', // Prettier integration
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['api', './src/api'],
          ['components', './src/components'],
          ['configs', './src/configs'],
          ['contexts', './src/contexts'],
          ['routes', './src/routes'],
          ['stylesheets', './src/stylesheets'],
          ['utils', './src/utils'],
          ['views', './src/views'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Customize rules here
    'react/react-in-jsx-scope': 'off', // Not needed for React 17+
  },
};
