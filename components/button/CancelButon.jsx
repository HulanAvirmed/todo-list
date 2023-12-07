import { Button, styled } from "@mui/material";

export const CancelButton = styled(({ ...props }) => (
  <Button variant="outlined" size="small" {...props}>
    Cancel
  </Button>
))(({ theme }) => ({
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
}));

export default CancelButton;
