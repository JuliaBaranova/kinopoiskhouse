import { createTheme } from "@mui/material/styles"

const Colors = {
  primary: "#ff8c00",
  secondary: "#ffffff",
  standard: "#333333",
}

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
})
