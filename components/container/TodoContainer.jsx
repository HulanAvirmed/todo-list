import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  styled,
} from "@mui/material";
import React from "react";
import { CreateButton } from "../button";

export const TodoContainer = ({ taskCount, onCreate, children, ...props }) => {
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
        <CreateButton onCreate={onCreate} />
      </StyledCard>
    </Box>
  );
};

export default TodoContainer;

const StyledCard = styled(({ ...props }) => (
  <Card variant="outlined" {...props} />
))(({ theme }) => ({
  width: "400px",
  minHeight: "80vh",
  background: "#3b509c",
  borderRadius: "20px",
}));
