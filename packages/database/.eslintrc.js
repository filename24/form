/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@form/eslint-config/base'],
  parserOptions: {
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
};
