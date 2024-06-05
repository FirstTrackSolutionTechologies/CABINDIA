/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'src/**/*.{ts,js,tsx,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        'all': '0 0 15px',
        'cabCard' : '0 0 5px',
        'userCard' : '0 0 3px'
      },
    },
  },
  plugins: [
  ],
}