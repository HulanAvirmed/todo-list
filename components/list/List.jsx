"use client";

import React from "react";
import { styled } from "@mui/system";
import { List as MuiList, Stack } from "@mui/material";

export const List = ({ children, ...props }) => {
  return (
    <StyledList {...props}>
      <Stack spacing={2} direction={"column"}>
        {children}
      </Stack>
    </StyledList>
  );
};

export default List;

const StyledList = styled(({ ...props }) => <MuiList {...props} />)(
  ({ theme }) => ({})
);
