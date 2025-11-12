module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      width: {
        'w-80': '80%',
      }
    }    
  },
  variants: {
    width: ['responsive'],
  },
  plugins: [],
};
