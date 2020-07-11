import Typography from "typography"
import irvingTheme from "typography-theme-irving"

const typography = new Typography({
  ...irvingTheme,
  headerFontFamily: [
    "Open Sans",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Montserrat", "serif"],
})

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
