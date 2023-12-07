import { Button, styled } from "@mui/material";

export const ConfirmButton = styled(({ ...props }) => (
  <Button variant="outlined" size="small" {...props}>
    Confirm
  </Button>
))(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,

  "&:hover": {
    background: theme.palette.primary.main,
  },
}));

export default ConfirmButton;
