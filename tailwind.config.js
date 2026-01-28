/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './docs/**/*.{md,mdx}',
    './docusaurus.config.js',
  ],
  theme: {
    extend: {
      maxWidth: {
        '1400': '1400px',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // 禁用 Tailwind 的預設樣式重置，避免與 Docusaurus 衝突
  },
};

