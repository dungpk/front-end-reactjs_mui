import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import { GroupTask } from './type';
import { set } from 'lodash';

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

export const TaskViewGroupDialog = ({ open, onClose }: SimpleDialogProps) => {
  const handleClose = () => {
    onClose();
  };

  const [groupList, setGroupList] = useState<GroupTask[]>([]);

  const handleDelete = (index: number) => {
    setGroupList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const handleGroupNameChange = (index: number, value: string) => {
    setGroupList((prevList) => {
      const updatedList = [...prevList];
      updatedList[index].nameGroup = value;
      return updatedList;
    });
  };

  const saveData = async () => {
    try {
      console.log(groupList);
      const response = await fetch('https://localhost:7162/api/Home/saveGroupTask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(groupList),
      });

      if (response.ok) {
        console.log('Dữ liệu đã được gửi thành công.');
      } else {
        console.log('Có lỗi xảy ra khi gửi dữ liệu.');
      }
      handleClose();
    } catch (error) {
      console.log('Có lỗi xảy ra khi gửi dữ liệu:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7162/api/Home/listGroupTask');
        const data = await response.json();
        setGroupList(data);
      } catch (error) {
        alert('khong lay duoc du lieu');
      }
    };

    fetchData();
  }, []);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle style={{ fontWeight: 'bold', padding: '20px' }}>
        Danh sách nhóm công việc
      </DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" overflow={'hidden'}>
          {groupList.map((group, index) => (
            <Box key={index} display="flex" alignItems="center" marginBottom="10px">
              <TextField
                label="Nhóm công việc"
                style={{ flexGrow: 1, margin: '10px' }}
                value={group.nameGroup ?? ''}
                onChange={(e) => handleGroupNameChange(index, e.target.value)}
              />
              <Button onClick={() => handleDelete(index)}>
                <DeleteIcon sx={{ color: 'grey' }} />
              </Button>
            </Box>
          ))}
        </Box>

        <Stack direction={'row'} justifyContent={'space-between'} paddingTop={'20px'}>
          <Button
            variant="outlined"
            color="success"
            onClick={() => {
              setGroupList([...groupList, { id: undefined, nameGroup: '' }]);
            }}
          >
            Thêm
          </Button>
          <Stack direction={'row'} spacing={1}>
            <Button
              variant="outlined"
              color="success"
              onClick={() => {
                handleClose();
              }}
            >
              Hủy
            </Button>
            <Button type="submit" variant="contained" color="success" onClick={saveData}>
              Lưu
            </Button>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
