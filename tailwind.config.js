/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        soft: '#F5F5F5',
        silver: '#D9D9D9',
        mid: '#9E9E9E',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      backgroundImage: {
        'logo-gradient': 'linear-gradient(135deg, #000000 0%, #1a1a1a 45%, #9E9E9E 100%)',
        'hero-fade': 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.85) 100%)',
        'silver-shine': 'linear-gradient(120deg, #F5F5F5 0%, #D9D9D9 50%, #9E9E9E 100%)',
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(0,0,0,0.18)',
        ring: '0 0 0 1px rgba(255,255,255,0.06), 0 25px 60px -20px rgba(0,0,0,0.45)',
      },
      animation: {
        'marquee': 'marquee 32s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
