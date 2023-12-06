"use client";

import React, { useState } from "react";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import FormDialog from "../dialog/FormDialog";

export const EditButton = ({ onUpdate, data, ...props }) => {
  const [showDialog, setShowDialog] = useState(false);

  const onSave = (name, id) => {
    setShowDialog(false);
    onUpdate(name, id);
  };

  return (
    <>
      <StyledEditButton onClick={() => setShowDialog(true)} {...props} />
      <FormDialog
        onSave={onSave}
        data={data}
        isEdit={true}
        open={showDialog}
        onClose={() => setShowDialog(false)}
      />
    </>
  );
};

export default EditButton;

const StyledEditButton = styled(({ ...props }) => (
  <IconButton aria-label="delete" {...props}>
    <EditIcon fontSize="small" />
  </IconButton>
))(({ theme }) => ({}));
