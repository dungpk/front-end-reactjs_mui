import { Button, Dialog, DialogContent, DialogTitle, Grid } from '@mui/material';

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  missionId: string;
}
export const TaskDeleteFormDialog = ({ open, onClose, missionId }: SimpleDialogProps) => {
  const handleClose = () => {
    onClose();
  };

  const deleteData = async () => {
    try {
      const response = await fetch(`https://localhost:7162/api/Home/mission/${missionId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Dữ liệu đã được xoá thành công.');
      } else {
        alert('Có lỗi xảy ra khi gửi dữ liệu.');
      }
      handleClose();
    } catch (error) {
      console.log('Có lỗi xảy ra khi gửi dữ liệu:', error);
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Bạn có chắc chắn muốn xoá không?</DialogTitle>
      <DialogContent>
        <Grid item xs={12}>
          <Grid container justifyContent="flex-end" spacing={2}>
            <Grid item>
              <Button
                onClick={() => {
                  handleClose();
                }}
              >
                Hủy
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="success"
                onClick={() => {
                  deleteData();
                }}
              >
                Xoá
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
