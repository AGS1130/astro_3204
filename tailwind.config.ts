import themeConfig from './theme'

const { theme } = themeConfig

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{astro,html,js,svelte,ts}",],
  theme,
  safelist: [
    'block',
    'hidden'
  ]
}
