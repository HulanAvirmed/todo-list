import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grow,
  TextField,
} from "@mui/material";
import React, { useRef } from "react";
import { CancelButton, SaveButton } from "../button";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

export const FormDialog = ({ data, onSave, onClose, isEdit, ...props }) => {
  const nameRef = useRef("");

  return (
    <Dialog
      TransitionComponent={Transition}
      fullWidth={true}
      maxWidth="xs"
      {...props}
    >
      <DialogTitle>{isEdit ? "Edit" : "Create new"}</DialogTitle>
      <DialogContent>
        <TextField
          variant="standard"
          inputRef={nameRef}
          // label="Todo"
          defaultValue={data?.name}
          fullWidth
          autoFocus={true}
        />
      </DialogContent>
      <DialogActions>
        <SaveButton
          onClick={() => {
            const value = nameRef.current.valueOf().value;
            if (value) onSave(value, data?.id);
          }}
        >
          {isEdit ? "Update" : "Create"}
        </SaveButton>
        <CancelButton onClick={onClose} />
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
