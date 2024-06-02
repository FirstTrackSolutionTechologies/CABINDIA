/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'src/**/*.{ts,js,tsx,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        'all': '0 0 15px',
      },
    },
  },
  plugins: [
  ],
}

