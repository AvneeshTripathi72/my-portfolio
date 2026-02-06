/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f1a",          // dark navy (not pure black)
        card: "#12182a",
        primary: "#22c55e",     // toned-down green
        primarySoft: "#16a34a",
        accent: "#5eead4",      // soft teal (instead of neon)
        textMain: "#e5e7eb",
        textMuted: "#9ca3af",
        dark: {
          100: '#1e293b',
          200: '#12182a',
          300: '#0f1525',
          400: '#0b0f1a',
        },
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundSize: {
        '200%': '200%',
      },
    },
  },
  plugins: [],
}
