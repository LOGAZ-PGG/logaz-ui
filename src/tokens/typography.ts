/**
 * LOGAZ Typography Tokens
 */

export const fonts = {
  sans: ['Montserrat', 'sans-serif'],
  syncopate: ['Syncopate', 'sans-serif'],
  montserrat: ['Montserrat', 'sans-serif'],
  roboto: ['Roboto', 'sans-serif'],
} as const

export type FontFamily = keyof typeof fonts
