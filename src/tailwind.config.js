// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html',
    ],
    safelist: [
      'fade-in-section',
      'is-visible',
      'lazy-zoom',
      'zoom-in-visible',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  