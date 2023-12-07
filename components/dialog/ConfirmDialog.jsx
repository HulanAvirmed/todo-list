import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grow,
} from "@mui/material";
import { CancelButton, ConfirmButton } from "../button";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

export const ConfirmDialog = ({ onConfirm, onClose, isEdit, ...props }) => {
  return (
    <Dialog
      TransitionComponent={Transition}
      fullWidth={true}
      maxWidth="xs"
      {...props}
    >
      <DialogTitle>Delete confirm</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure want to delete?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <ConfirmButton onClick={onConfirm} />
        <CancelButton onClick={onClose} />
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
