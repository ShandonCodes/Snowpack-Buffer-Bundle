/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  alias: {
  },
  mount: {
    public: '/',
    src: '/dist'
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-postcss',
  ],
  routes: [
  ],
  optimize: {
  },
  packageOptions: {
    polyfillNode: true
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js'
  },
  buildOptions: {
  },
};
