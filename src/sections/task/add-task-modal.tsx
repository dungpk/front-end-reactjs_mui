import { Box, Button, DialogContent, Grid, IconButton, InputAdornment, MenuItem, Select, Stack, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import * as Yup from 'yup';
import { ErrorMessage, Form, Formik, useFormik  } from 'formik';

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}
export const TaskAddFormDialog = ({ open, onClose }: SimpleDialogProps) => {
  const handleClose = () => {
    onClose();
  };

  const validationSchema = Yup.object().shape({
    phone: Yup.string().required('Vui lòng nhập số điện thoại học viên'),
    // groupTask: Yup.string().required('Vui lòng lựa chọn nhóm công việc'),
    // studentName: Yup.string().required('Vui lòng nhập tên học viên'),
    // implementer: Yup.string().required('Vui lòng nhập người thực hiện'),
    // createrName: Yup.string().required('Vui lòng nhập người khởi tạo'),
    // status: Yup.string().required('Vui lòng lựa chọn trạng thái'),
    // createdDate: Yup.string().required('Vui lòng lựa chọn ngày khởi tạo'),
    // enddDate: Yup.string().required('Vui lòng lựa chọn ngày kết thúc'),
    // title: Yup.string().required('Vui lòng nhập tiêu đề'),
  });

  const formik = useFormik({
    initialValues: {
        phone: '',
        groupTask: '',
        studentName: '',
        implementer: '',
        createrName: '',
        status: '',
        createdDate: '',
        phoenddDatene: '',
        title: '',

    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
    
      alert(values.createdDate)
    },
  });

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="md" fullWidth>
  <DialogTitle style={{ fontWeight: 'bold' }}>Thêm mới công việc</DialogTitle>
  <DialogContent style={{ margin: '10px' }}>

    
  <form onSubmit={formik.handleSubmit}>
    <Grid container spacing={2}>
      <Grid item xs={6}>
      <TextField
            name="phone"
            label="Số điện thoại học viên*"
            fullWidth
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Nhóm công việc*</InputLabel>
          <Select>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField label="Họ và tên học viên*" fullWidth />
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Người thực hiện*</InputLabel>
          <Select>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField label="Người tạo*" fullWidth  />
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Trạng thái*</InputLabel>
          <Select>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField label="Thời gian tạo" fullWidth disabled />
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Ngày bắt đầu*</InputLabel>
          <Select>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField label="Tiêu đề*" fullWidth />
      </Grid>
      <Grid item xs={6}>
      <FormControl fullWidth>
          <InputLabel>Ngày kết thúc*</InputLabel>
          <Select>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField label="Nội dung*" fullWidth multiline rows={4} />
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="flex-end" spacing={2}>
          <Grid item>
            <Button variant="outlined" color="primary">Hủy</Button>
          </Grid>
          <Grid item>
            <Button  type="submit" variant="contained" color="primary">Lưu</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </form>
  </DialogContent>
</Dialog>
  );
};
