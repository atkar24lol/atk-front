const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: { min: '320px', max: '600px' },
      md: { min: '600px', max: '900px' },
      lg: { min: '900px', max: '1200px' },
      xl: { min: '1200px', max: '1500px' },
      xxl: { min: '1500px', max: '1920px' },
    },
    extend: {

      theme: {
        extend: {
          fontFamily: {
            montserratBlack: ['Montserrat', 'sans-serif'],
            montserratSemibold: ['Montserrat', 'sans-serif'],
            montserratTitle: ['Montserrat', 'Open Sans', 'sans-serif'],
          },

          fontWeight: {
            'black': 800,
            'semibold': 600,
            'title': 900
          },
        },
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

    },
    colors: { white: '#ffffff' },
  },
  plugins: [],
};

export default config;

