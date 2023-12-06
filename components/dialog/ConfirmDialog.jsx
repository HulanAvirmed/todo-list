import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export const ConfirmDialog = ({ onConfirm, onClose, isEdit, ...props }) => {
  return (
    <Dialog {...props}>
      <DialogTitle>Delete confirm</DialogTitle>
      <DialogContent>
        <DialogContentText>Are u sutre deletete</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onConfirm}>Confirm</Button>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
