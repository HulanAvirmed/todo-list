import { createTheme } from "@mui/material";

export const MainTheme = createTheme({
  palette: {
    primary: { main: "#3b509c" },
    secondary: { main: "#d435f7" },
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
    MuiDialog: {
      styleOverrides: {
        container: {
          "> .MuiPaper-root": {},

          ".MuiDialogTitle-root": {
            color: "#3b509c",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: "#3b509c",

          ":before": {
            borderBottom: "2px solid #3b509c !important",
          },

          "&:hover:before": {
            borderBottom: "2px solid #3b509c !important",
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
});
