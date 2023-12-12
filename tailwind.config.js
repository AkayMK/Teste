/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {

      colors: {
        vermelho: '#B53844',
        cafe: {
          100: '#A48766',
          200: '#655343',
          300: '#9B5C41',
        },
        escuro: {
          100: '#24222e',
          200: '#1F1D27',
        },
        claro: {
          100: '#F5F5F5',
          200: '#EBEBEB',
          300: '#E0DBD2',
          400: '#E8E7E9',
        }
      },

      fontFamily: {
        'kalnia': ['Kalnia', 'serif'],
        'comforta': ['Afacad', 'serif'],
      },
    },

  },
  plugins: [],
}
