import config from '@antfu/eslint-config'

export default config({
  formatters: true,
  unocss: true,
  ignores: [
    'public/*',
    'dist/*',
  ],
})
