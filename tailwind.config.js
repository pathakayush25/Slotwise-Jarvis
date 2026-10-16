/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#142B4A',
          teal: '#216E78',
          'teal-hover': '#1b5b63',
          'teal-light': '#e8f4f5',
          blue: '#4F7CAC',
          'blue-light': '#edf3f9',
          bg: '#F7F9FC',
          card: '#FFFFFF',
          'surface-blue': '#EAF2F8',
          border: '#DCE5E8',
          'text-primary': '#1E293B',
          'text-secondary': '#64748B',
          success: '#16845B',
          'success-light': '#e8f6f0',
          warning: '#B7791F',
          'warning-light': '#fdf6ea',
          conflict: '#C2413B',
          'conflict-light': '#fbeeee',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(20, 43, 74, 0.05), 0 1px 2px -1px rgba(20, 43, 74, 0.05)',
        card: '0 4px 6px -1px rgba(20, 43, 74, 0.04), 0 2px 4px -2px rgba(20, 43, 74, 0.04)',
        hover: '0 10px 15px -3px rgba(20, 43, 74, 0.08), 0 4px 6px -4px rgba(20, 43, 74, 0.04)',
      }
    },
  },
  plugins: [],
}
