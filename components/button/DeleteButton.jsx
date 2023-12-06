"use client";

import React, { useState } from "react";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { ConfirmDialog } from "../dialog";

export const DeleteButton = ({ onDelete, dataId, ...props }) => {
  const [showDialog, setShowDialog] = useState(false);

  const onConfirm = () => {
    setShowDialog(false);
    onDelete(dataId);
  };

  return (
    <>
      <StyldeDeleteButton onClick={() => setShowDialog(true)} {...props} />
      <ConfirmDialog
        open={showDialog}
        onConfirm={onConfirm}
        onClose={() => setShowDialog(false)}
      />
    </>
  );
};

export default DeleteButton;

const StyldeDeleteButton = styled(({ ...props }) => (
  <IconButton aria-label="delete" {...props}>
    <ClearIcon sx={{ color: "#d435f7" }} fontSize="small" />
  </IconButton>
))(({ theme }) => ({
  width: 30,
  height: 30,
  margin: "0 10px",
}));
