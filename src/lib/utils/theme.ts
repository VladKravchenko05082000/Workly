import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7c6af7",
      light: "#a78bfa",
    },
    background: {
      default: "#0c0c0f",
      paper: "#13131a",
    },
    text: {
      primary: "#f0f0f5",
      secondary: "#9090a8",
      disabled: "#6b6b80",
    },
    success: { main: "#34d399" },
    error: { main: "#f87171" },
    warning: { main: "#fbbf24" },
    divider: "rgba(255, 255, 255, 0.07)",
  },
  typography: {
    fontFamily: "inherit",
  },
});

export default theme;
