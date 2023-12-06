"use client";

import React, { useState } from "react";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import FormDialog from "../dialog/FormDialog";
import { Fab, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const CreateButton = ({ onCreate, ...props }) => {
  const [showDialog, setShowDialog] = useState(false);

  const onSave = (name) => {
    setShowDialog(false);
    onCreate(name);
  };

  return (
    <Stack alignItems={"center"}>
      <StyledCreateButton onClick={() => setShowDialog(true)} {...props} />
      <FormDialog
        onSave={onSave}
        open={showDialog}
        onClose={() => setShowDialog(false)}
      />
    </Stack>
  );
};

export default CreateButton;

const StyledCreateButton = styled(({ ...props }) => (
  <Fab disableRipple={true} {...props}>
    <AddIcon sx={{ color: "white" }} />
  </Fab>
))(({ theme }) => ({
  background: "#d435f7",
  // boxShadow: "none",

  "&:hover": {
    background: "#9503b5",
  },
}));
