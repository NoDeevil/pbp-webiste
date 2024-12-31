/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9333ea',    // Purple
        secondary: '#fbbf24',  // Yellow
        accent: '#22c55e',     // Green
        highlight: '#3b82f6',  // Blue
      },
    },
  },
  plugins: [],
};
