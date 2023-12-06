import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  styled,
} from "@mui/material";
import React from "react";

export const TodoContainer = ({
  taskCount,
  createButton,
  children,
  ...props
}) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <StyledCard {...props}>
        <CardHeader
          title="What's up?"
          subheader={`${taskCount || 0} task(s)`}
        ></CardHeader>
        <CardContent>{children}</CardContent>
        <CardActions>{createButton}</CardActions>
      </StyledCard>
    </Box>
  );
};

export default TodoContainer;

const StyledCard = styled(({ ...props }) => (
  <Card variant="outlined" {...props} />
))(({ theme }) => ({
  width: "500px",
  minHeight: "80%",
  background: "#3b509c",
  borderRadius: "20px",
}));
