/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Manrope', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        // Dark theme background colors
        dark: {
          primary: '#1a1f2e',    // Main dark navy background
          secondary: '#242b3d',   // Slightly lighter dark background
          accent: '#2d3548',      // Card/component backgrounds
        },
        // Orange/coral accent colors from reference design
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',    // Main orange accent
          600: '#ea580c',    // Darker orange for hover states
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        // Updated primary colors (keeping some blue for compatibility)
        primary: {
          50: '#f0f9ff',
          500: '#0b80ee',
          600: '#0969da',
          700: '#0550ae',
        },
        // Gray scale for dark theme
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        // Text colors for dark theme
        text: {
          primary: '#ffffff',      // White text for dark backgrounds
          secondary: '#e2e8f0',    // Light gray for secondary text
          muted: '#94a3b8',        // Muted text color
          dark: '#111518',         // Keep original for light backgrounds if needed
        }
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
}
