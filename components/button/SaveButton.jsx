import { Button, styled } from "@mui/material";

export const SaveButton = styled(({ ...props }) => (
  <Button variant="outlined" size="small" {...props} />
))(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,

  "&:hover": {
    background: theme.palette.primary.main,
  },
}));

export default SaveButton;
