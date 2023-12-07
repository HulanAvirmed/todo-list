import { Box, Card, CardContent, CardHeader, styled } from "@mui/material";
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
          title="To-do list"
          subheader={`${taskCount || 0} task(s)`}
        />

        <CardContent sx={{ overflow: "scroll", height: "75%" }}>
          {children}
        </CardContent>

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
  height: "80vh",
  background: "#3b509c",
  borderRadius: "20px",
  position: "absolute",
}));
