import { type Config } from 'tailwindcss';
export default {
  content: ["./app/**/*.{ts,tsx}", "./app/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#4fd1c5',
          DEFAULT: '#319795',
          dark: '#2c7a7b'
        }
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-bg.svg')",
      }
    }
  },
  plugins: [],
} satisfies Config;
