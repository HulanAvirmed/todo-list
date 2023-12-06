import { createTheme } from "@mui/material";

export const MainTheme = createTheme({
  palette: {
    text: {
      primary: "#ffffff",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "#9eb4fa",
          height: "100vh",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
        subheader: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
  },
});
