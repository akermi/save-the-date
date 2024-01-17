// /** @type {import('tailwindcss').Config} */
// // tailwind.config.js
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./public/index.html"
//   ],
//   theme: {
//     extend: {
//       colors: {
//         pastelBlue: "#aed9e0",
//         pastelPink: "#f8bac9",
//         pastelGreen: "#b6f8c4",
//         pastelYellow: "#ffe699",
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/aspect-ratio'),
//     require('@tailwindcss/line-clamp'),
//     require('@tailwindcss/forms'),
//   ],
// }
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        pastel1: "#aed9e0",
        pastel2: "#f8bac9",
        pastel3: "#b6f8c4",
        pastel4: "#ffe699",
        pastel5: "#ffc3a0",
        pastel6: "#f6d6d6",
        pastel7: "#d9d9f3",
      },
      linearGradientColors: theme => theme('colors'),
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
};
