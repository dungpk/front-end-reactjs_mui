import { DialogContent, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { blue } from '@mui/material/colors';

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}
export const ExpenseFormDialog = ({ open, onClose }: SimpleDialogProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <DialogContent>
        <h1>Đây là nội dung thẻ Dialog</h1>
        <TextField
          label="Nhajap noi dung"
          helperText="Nhajap ddur 8 ky tu"
          error
          onChange={(e) => console.log(e.target.value)}
        />
        <TextField label="Nhajap noi dung" />
        <TextField label="Nhajap noi dung" />
      </DialogContent>
    </Dialog>
  );
};
