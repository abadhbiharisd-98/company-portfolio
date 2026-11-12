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
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#1769FF', // Primary professional accent
          700: '#0d52d6',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        navy: {
          950: '#0a0f1d',
          900: '#111827', // Headings dark navy
          850: '#151f32',
          800: '#1f2937',
          700: '#374151',
          600: '#4b5563',
        },
        surface: {
          base: '#ffffff',
          alt: '#F5F7FA',   // Alternate sections light grey
          subtle: '#f8fafc',
          border: '#e2e8f0',
          hover: '#f1f5f9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -1px rgba(17, 24, 39, 0.04), 0 1px 3px -1px rgba(17, 24, 39, 0.02)',
        'soft-md': '0 6px 20px -2px rgba(17, 24, 39, 0.06), 0 2px 6px -1px rgba(17, 24, 39, 0.03)',
        'soft-lg': '0 12px 32px -4px rgba(17, 24, 39, 0.08), 0 4px 12px -2px rgba(17, 24, 39, 0.04)',
        'soft-hover': '0 16px 36px -4px rgba(23, 105, 255, 0.12), 0 6px 16px -2px rgba(17, 24, 39, 0.04)',
        'blue-glow': '0 0 25px rgba(23, 105, 255, 0.25)',
      }
    },
  },
  plugins: [],
}
