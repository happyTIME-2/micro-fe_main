module.exports = {
  parse: {
    sourceType: 'module'

  },
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  rules: {
    semi: [0],
  },
  extends: ['@tencent/eslint-config-tencent', '@tencent/eslint-config-tencent/ts'],
}