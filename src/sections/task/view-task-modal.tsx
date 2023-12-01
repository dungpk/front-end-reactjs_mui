import {
    Box,
    Button,
    DialogContent,
    Grid,
    IconButton,
    InputAdornment,
    MenuItem,
    Select,
    Stack,
    TextField,
  } from '@mui/material';
  import Avatar from '@mui/material/Avatar';
  import Dialog from '@mui/material/Dialog';
  import DialogTitle from '@mui/material/DialogTitle';
  import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
  import * as Yup from 'yup';
  import { ErrorMessage, Form, Formik, useFormik } from 'formik';
  import { useEffect, useState } from 'react';
  import { GroupTask, Mission, MissionQuery } from './type';
  import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
  import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
  import dayjs, { Dayjs } from 'dayjs';
  import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
  import { v4 as uuidv4 } from 'uuid';
  import React from 'react';
import { Group } from '@mui/icons-material';
import { setgroups } from 'process';
  
  export interface SimpleDialogProps {
    missionId:string;
    open: boolean;
    onClose: () => void;
  }
  export const TaskViewFormDialog = ({missionId, open, onClose }: SimpleDialogProps) => {
  
  
    const [fromDate, setFromDate] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
    const [createDate, setCreateDate] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
    const [toDate, setToDate] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

    const [group, setGroup] =  React.useState<GroupTask>()

    
  
    const handleClose = () => {
      onClose();
    };
  
    const [groupList, setGroupList] = useState<GroupTask[]>([]);
    const[mision,SetMission] = useState<Mission>();
  
    const validationSchema = Yup.object().shape({
      phoneStudent: Yup.string().required('Vui lòng nhập số điện thoại học viên'),
      groupTaskId: Yup.string().required('Vui lòng lựa chọn nhóm công việc'),
      nameStudent: Yup.string().required('Vui lòng nhập tên học viên'),
      implementer: Yup.string().required('Vui lòng nhập người thực hiện'),
      creator: Yup.string().required('Vui lòng nhập người khởi tạo'),
      status: Yup.string().required('Vui lòng lựa chọn trạng thái'),
      // fromDate: Yup.string().required('Vui lòng lựa chọn ngày khởi tạo'),
      // endDate: Yup.string().required('Vui lòng lựa chọn ngày kết thúc'),
  
      title: Yup.string().required('Vui lòng nhập tiêu đề'),
    });
  
  
    
    useEffect(() => {
      const fetchData = async () => {
        try {
       
            const response = await fetch(`https://localhost:7162/api/Home/mision/${missionId}`);
            const data = await response.json();
            SetMission(data);
        } catch (error) {
          alert('khong lay duoc du lieu');
        }
      };
  
      fetchData();
    }, [mision]);
  
    const formik = useFormik({
      initialValues: {
        phoneStudent: mision?.phoneStudent || '',
        groupTaskId: mision?.groupTask?.nameGroup || '',
        nameStudent: mision?.nameStudent || 'Phùng Khắc Dũng',
        implementer: mision?.implementer || 'Nguyễn Văn A',
        creator: mision?.creator || 'Nguyễn Trung Hiếu',
        status: mision?.status || 'Đang thực hiện',
        createdDate: mision?.createdDate || '2023-04-17',
        fromDate: mision?.fromDate || '2022-04-17',
        toDate: mision?.toDate || dayjs('2022-04-17'),
        title: mision?.title || 'tiêu đề',
        content: mision?.content || 'no content',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
  
        const missionObject: MissionQuery = {
          id: missionId,
          phoneStudent: values.phoneStudent,
          nameStudent: values.nameStudent,
          creator: values.creator,
          title: values.title,
          implementer: values.implementer,
          status: values.status,
          groupTaskId: values.groupTaskId,
          createdDate: createDate?.format("YYYY-MM-DDTHH:mm:ss.SSS[Z]") || '',
          toDate: toDate?.format("YYYY-MM-DDTHH:mm:ss.SSS[Z]") || '',
          fromDate: fromDate?.format("YYYY-MM-DDTHH:mm:ss.SSS[Z]") || '',
          content:values.content,
        };
  
        
  
        fetch('https://localhost:7162/api/Home/mision', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(missionObject),
        })
          .then((response) => {
            if (response.ok) {
              // Xử lý phản hồi thành công từ phía máy chủ
              return response.json();
            } else {
              throw new Error('Đã xảy ra lỗi khi gửi dữ liệu biểu mẫu.');
            }
          })
          .then((data) => {
            console.log(data);
            alert('Dữ liệu biểu mẫu đã được gửi thành công!');
            handleClose();
          })
          .catch((error) => {
            // Xử lý lỗi
            console.error(error);
            alert(error.message);
            handleClose();
          });
      },
    });
  
    const handleToDateChange = (date:Date) => {
      formik.setFieldValue('toDate', date);
    };
  
  
  
    return (
      <Dialog onClose={handleClose} open={open} maxWidth="md" fullWidth>
        <DialogTitle style={{ fontWeight: 'bold',padding:'20px' }}>Thêm mới công việc</DialogTitle>
        <DialogContent style={{ margin: '10px' }}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} style={{ padding:'20px' }}>
              <Grid item xs={6}>
                <TextField disabled
                  name="phoneStudent"
                  label="Số điện thoại học viên*"
                  fullWidth
                  value={formik.values.phoneStudent}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phoneStudent && Boolean(formik.errors.phoneStudent)}
                  helperText={formik.touched.phoneStudent && formik.errors.phoneStudent}
                />
              </Grid>
              <Grid item xs={6}>
              <FormControl fullWidth error={formik.touched.groupTaskId && Boolean(formik.errors.groupTaskId)}>
                <InputLabel>Nhóm công việc*</InputLabel>
                <Select disabled
                  name="groupTaskId"
                  value={mision?.groupTaskId}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  {groupList.map((task) => (
                    <MenuItem key={task.id} value={task.id}>
                      {task.nameGroup}
                    </MenuItem>
                  ))}
                </Select>
                {formik.touched.groupTaskId && formik.errors.groupTaskId && (
                  <FormHelperText error>{formik.errors.groupTaskId}</FormHelperText>
                )}
              </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField   disabled
                name="nameStudent"
                  label="Họ và tên học viên*"
                  fullWidth
                  value={formik.values.nameStudent}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.nameStudent && Boolean(formik.errors.nameStudent)}
                  helperText={formik.touched.nameStudent && formik.errors.nameStudent} />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                <TextField disabled
                  name="implementer"
                  label="Người thực hiện*"
                  fullWidth
                  value={formik.values.implementer}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.implementer && Boolean(formik.errors.implementer)}
                  helperText={formik.touched.implementer && formik.errors.implementer} /> 
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField disabled
                 name="creator"
                  label="Người tạo*"
                  fullWidth
                  value={formik.values.creator}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.creator && Boolean(formik.errors.creator)}
                  helperText={formik.touched.creator && formik.errors.creator} />
              </Grid>
              <Grid item xs={6}>
              <FormControl fullWidth error={formik.touched.status && Boolean(formik.errors.status)}>
                  <InputLabel>Trạng thái*</InputLabel>
                  <Select  disabled
                  name="status"
                           value={formik.values.status}
                           onChange={formik.handleChange}
                            onBlur={formik.handleBlur}>
                    <MenuItem value="Chưa bắt đầu">Chưa bắt đầu</MenuItem>
                    <MenuItem value="Đang xử lý">Đang xử lý</MenuItem>
                    <MenuItem value="Hủy">Hủy</MenuItem>
                    <MenuItem value="Hoàn Thành">Hoàn Thành</MenuItem>
                  </Select>
                  {formik.touched.status && formik.errors.status && (
                  <FormHelperText error>{formik.errors.status}</FormHelperText>
                )}
                </FormControl>
              </Grid>
              <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker disabled label="Ngày khởi tạo" value={createDate}
            onChange={(newValue) => setCreateDate(newValue)}  sx={{ width: '100%' }}/>
              </DemoContainer>
              </LocalizationProvider>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker disabled label="Ngày bắt đầu" value={fromDate}
            onChange={(newValue) => setFromDate(newValue)}    sx={{ width: '100%' }}/>
              </DemoContainer>
            </LocalizationProvider>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField  disabled
                name = "title"
                label="Tiêu đề*"
                  fullWidth
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.title && Boolean(formik.errors.title)}
                  helperText={formik.touched.title && formik.errors.title} />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker  disabled value={toDate}
            onChange={(newValue) => setToDate(newValue)}  label="Ngày kết thúc"  sx={{ width: '100%' }}/>
              </DemoContainer>
            </LocalizationProvider>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField disabled
                 name = "content"
                 label="Nội dung*"
                  fullWidth
                  value={formik.values.content}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.content && Boolean(formik.errors.content)}
                  helperText={formik.touched.content && formik.errors.content} multiline rows={4} />
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="flex-end" spacing={2}>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        handleClose();
                      }}
                    >
                      Dóng
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    );
  };
  