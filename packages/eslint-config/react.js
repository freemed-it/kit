const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/*
 * This is a custom ESLint configuration for use a library
 * that utilizes React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: ['plugin:tailwindcss/recommended', 'prettier'],
  parserOptions: {
    project,
  },
  plugins: ['only-warn', 'tailwindcss'],
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js', '**/*.css'],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
    tailwindcss: {
      callees: ['cn', 'cva'],
      config: 'tailwind.config.cjs',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
}
