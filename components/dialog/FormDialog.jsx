import styled from "@emotion/styled";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grow,
  Slide,
  TextField,
  Zoom,
} from "@mui/material";
import React, { useRef } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

export const FormDialog = ({ data, onSave, onClose, isEdit, ...props }) => {
  const nameRef = useRef("");

  return (
    <Dialog
      TransitionComponent={Transition}
      fullWidth={true}
      maxWidth="sm"
      {...props}
    >
      <DialogTitle>{isEdit ? "Edit" : "Create new todo"}</DialogTitle>
      <DialogContent>
        <TextField
          variant="outlined"
          inputRef={nameRef}
          label="Todo"
          defaultValue={data?.name}
          fullWidth
          autoFocus={true}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => onSave(nameRef.current.valueOf().value, data?.id)}
          variant="outlined"
        >
          {isEdit ? "Update" : "Create"}
        </Button>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;

const StyledDialog = styled(({ ...props }) => <Dialog {...props}></Dialog>)(
  ({ theme }) => ({})
);
