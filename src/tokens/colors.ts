/**
 * LOGAZ Brand Color Tokens
 */

export const colors = {
  primary: {
    DEFAULT: '#3B55A2',
    50: '#E8EFFC',
    100: '#C5D7F7',
    200: '#9EBEF2',
    300: '#77A5ED',
    400: '#5892E9',
    500: '#3B55A2',
    600: '#35609C',
    700: '#2E5389',
    800: '#274776',
    900: '#1B3154',
  },
  secondary: {
    DEFAULT: '#FB8607',
    50: '#FFF4E6',
    100: '#FFE4C1',
    200: '#FFD397',
    300: '#FFC26D',
    400: '#FFB54E',
    500: '#FB8607',
    600: '#F47806',
    700: '#EC6705',
    800: '#E45704',
    900: '#D73A02',
  },
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  success: '#4CAF50',
  warning: '#FFC107',
  error: '#F44336',
  info: '#2196F3',
} as const

export type ColorToken = typeof colors
export type BrandColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
