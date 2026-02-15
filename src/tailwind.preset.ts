/**
 * LOGAZ Tailwind CSS Preset
 * =========================
 *
 * Single source of truth for Tailwind configuration across all LOGAZ projects.
 *
 * Usage in tailwind.config.ts:
 * ```ts
 * import logazPreset from '@logaz/ui/tailwind'
 *
 * export default {
 *   presets: [logazPreset],
 *   content: ['./src/**\/*.{ts,tsx}'],
 * }
 * ```
 */

import type { Config } from 'tailwindcss'

const logazPreset: Partial<Config> = {
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // CSS Variable-based colors for theming
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        // Primary & Secondary (CSS vars for theme switching)
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },

        // Semantic colors (CSS variables)
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        // Sidebar colors
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },

        // LOGAZ Brand Colors (fixed hex) — extended palette
        'primary-50': '#E8EFFC',
        'primary-100': '#C5D7F7',
        'primary-200': '#9EBEF2',
        'primary-300': '#77A5ED',
        'primary-400': '#5892E9',
        'primary-500': '#3B55A2',
        'primary-600': '#35609C',
        'primary-700': '#2E5389',
        'primary-800': '#274776',
        'primary-900': '#1B3154',

        'secondary-50': '#FFF4E6',
        'secondary-100': '#FFE4C1',
        'secondary-200': '#FFD397',
        'secondary-300': '#FFC26D',
        'secondary-400': '#FFB54E',
        'secondary-500': '#FB8607',
        'secondary-600': '#F47806',
        'secondary-700': '#EC6705',
        'secondary-800': '#E45704',
        'secondary-900': '#D73A02',

        'gray-50': '#FAFAFA',
        'gray-100': '#F5F5F5',
        'gray-200': '#EEEEEE',
        'gray-300': '#E0E0E0',
        'gray-400': '#BDBDBD',
        'gray-500': '#9E9E9E',
        'gray-600': '#757575',
        'gray-700': '#616161',
        'gray-800': '#424242',
        'gray-900': '#212121',

        success: '#4CAF50',
        warning: '#FFC107',
        error: '#F44336',
        info: '#2196F3',

        // Backward compatibility
        logaz: {
          blue: '#3B55A2',
          orange: '#FB8607',
          white: '#FFFFFF',
          'light-gray': '#F5F5F5',
          gray: '#CCCCCC',
          'dark-gray': '#333333',
          green: '#4CAF50',
          red: '#F44336',
          background: '#F5F5F5',
          text: '#333333',
          success: '#4CAF50',
          error: '#F44336',
        },
      },

      // Border Radius
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      // Font Families
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        syncopate: ['Syncopate', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },

      // Animations
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
        'pulse-slow': 'pulse-slow 3s infinite',
        'slide-in-left': 'slide-in-left 0.3s ease-out',
      },
    },
  },
}

export default logazPreset
