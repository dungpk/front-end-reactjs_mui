'use client';

import { Button, SelectChangeEvent } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import GetAppIcon from '@mui/icons-material/GetApp';
import 'react-datepicker/dist/react-datepicker.css';
import './task-view.css';
import dayjs, { Dayjs } from 'dayjs';
import { ExpenseFormDialog } from '../expense/form-dialog-v2';
import { DateField, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AdapterDateFns from '@date-io/date-fns'; // Adapter cho thư viện ngày tháng date-fns
import { TextField } from '@mui/material'; // Import TextField để sử dụng trong renderInput
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import { alpha } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

import {
  Autocomplete,
  Box,
  Card,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Table,
  TableBody,
  TableContainer,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { TaskAddFormDialog } from './add-task-modal';
import { TaskViewGroupDialog } from './group-task-view-modal';
import { GroupTask, Mission } from './type';
import { TaskEditFormDialog } from './edit-task-modal';
import { TaskViewFormDialog } from './view-task-modal';
import { TaskDeleteFormDialog } from './delete-task-modal';

// function createData(
//   id: string,
//   nameStudent: string,
//   groupTask: string,
//   title: number,
//   implementer: number,
// ): Data {
//   return {
//     id,
//     phoneStudent,
//     nameStudent,
//     creator,
//     title,
//     implementer,
//   };
// }

export interface filerElement {
  toDate?: string;
  fromDate?: string;
  implementer?: string;
  status?: string;
  createdDate?: string;
  phoneStudent?: string;
  groupTaskId?: string;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Mission;
  label: string;
  numeric: boolean;
  groupTaskId?: keyof GroupTask;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'id',
    numeric: false,
    disablePadding: true,
    label: 'STT',
  },
  {
    id: 'nameStudent',
    numeric: false,
    disablePadding: true,
    label: 'Tên Học Viên',
  },
  {
    id: 'groupTaskId',
    numeric: false,
    disablePadding: false,
    label: 'Danh mục',
  },
  {
    id: 'implementer',
    numeric: false,
    disablePadding: false,
    label: 'Người thực hiện',
  },
  {
    id: 'toDate',
    numeric: false,
    disablePadding: false,
    label: 'Hạn hoàn thành',
  },
  {
    id: 'title',
    numeric: false,
    disablePadding: false,
    label: 'Tiêu đề',
  },
  {
    id: 'title',
    numeric: false,
    disablePadding: false,
    label: 'Action: delete ,update ,view',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Mission) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property: keyof Mission) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{ backgroundColor: '#F4F6F8' }}>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

export const Task = () => {
  const [rows, setRow] = useState<Mission[]>([]);

  const options = ['Phùng Khắc Dũng', 'Nguyễn Trung Hiếu', 'Phạm Việt Trung'];

  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Mission>('toDate');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [openAddTask, setOpenAddTask] = React.useState<boolean>(false);
  const [openGroupTask, setOpenGroupTask] = React.useState<boolean>(false);
  const [openEditTask, setOpenEditTask] = React.useState<boolean>(false);
  const [openDeleteTask, setOpenDeleteTask] = React.useState<boolean>(false);
  const [openViewTask, setOpenViewTask] = React.useState<boolean>(false);

  const [selectedRowId, setSelectedRowId] = useState<string>();
  const [groupList, setGroupList] = useState<GroupTask[]>([]);

  const [toDate, setToDate] = React.useState<Dayjs | null>(dayjs('1998-04-01'));
  const [fromDate, setFromDate] = React.useState<Dayjs | null>(dayjs('2024-04-01'));
  const [groupTaskId, setGroupTaskId] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [implementer, setImplementer] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    console.log(value);
    setGroupTaskId(value);
    handleFilter();
  };

  const handleSlectedStatus = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    console.log(event.target.value);
    setStatus(value);
    handleFilter();
  };

  const handleSelectedImplementerChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const value = event.target.value;
    console.log(value);
    setImplementer(value);
    handleFilter();
  };

  const handleSearchChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (
    event,
  ) => {
    const value = event.target.value;
    console.log(value);
    setSearch(value);
    handleFilter();
  };

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Mission) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');

    setOrderBy(property);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const handleFilter = async () => {
    console.log(toDate?.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]') || '');
    console.log(fromDate?.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]') || '');
    console.log(status);

    const missionObject: filerElement = {
      phoneStudent: search,
      implementer: implementer,
      status: status,
      groupTaskId: groupTaskId,
      toDate: toDate?.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]') || '',
      fromDate: fromDate?.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]') || '',
    };

    try {
      const response = await fetch('https://localhost:7162/api/Home/filerMission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(missionObject),
      });

      if (response.ok) {
        const data = await response.json();
        setRow(data);
      } else {
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7162/api/Home/missions');
        const data = await response.json();
        setRow(data);

        const responseGroupTask = await fetch('https://localhost:7162/api/Home/listgroupTask');
        const dataGroupTask = await responseGroupTask.json();
        setGroupList(dataGroupTask);
      } catch (error) {
        console.log('khong lay duoc du lieu');
      }
    };

    fetchData();
  }, [openAddTask, openGroupTask, openDeleteTask, openDeleteTask, openEditTask]);

  return (
    <>
      <div className="task-component">
        <div className="task-header">
          <h2 style={{ fontSize: 24, marginRight: 'auto' }}>Danh sách công việc</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button
              variant="outlined"
              color="success"
              style={{ color: 'rgb(6, 180, 58)', borderColor: 'rgb(6, 180, 58)' }}
              onClick={() => setOpenGroupTask(true)}
            >
              <SettingsIcon /> Cài Đặt Nhóm
            </Button>
            {openGroupTask && (
              <TaskViewGroupDialog open={true} onClose={() => setOpenGroupTask(false)} />
            )}
            <Button
              variant="contained"
              color="success"
              style={{ borderColor: 'rgb(6, 180, 58)', backgroundColor: 'rgb(6, 180, 58)' }}
              onClick={() => setOpenAddTask(true)}
            >
              <AddIcon /> Thêm Công Việc
            </Button>
            {openAddTask && <TaskAddFormDialog open={true} onClose={() => setOpenAddTask(false)} />}
          </div>
        </div>
        <div className="toolbar-task"></div>

        <div style={{ paddingBottom: 16 }}>
          <Button
            variant="outlined"
            color="success"
            style={{
              color: 'rgb(6, 180, 58)',
              borderColor: 'rgb(6, 180, 58)',
              marginRight: '15px',
              marginLeft: '10px',
            }}
          >
            <GetAppIcon /> Export
          </Button>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker']}>
              <DatePicker
                value={fromDate}
                onChange={(newValue) => {
                  setFromDate(newValue);
                  handleFilter();
                  console.log(newValue);
                }}
                label="Từ ngày"
              />
              <DatePicker
                value={fromDate}
                onChange={(newValue) => {
                  setToDate(newValue);
                  handleFilter();
                  console.log(newValue);
                }}
                label="Tới ngày"
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <Box mb={2} mx={-1} display="flex" sx={{ flexWrap: 'nowrap', overflowX: 'auto' }}>
          <FormControl sx={{ m: 1, minWidth: 190 }}>
            <InputLabel id="category">Danh Mục</InputLabel>
            <Select onChange={handleSelectChange} labelId="category" label="Danh Mục">
              <MenuItem> Tất cả </MenuItem>
              {groupList.map((task) => (
                <MenuItem key={task.id} value={task.id}>
                  {task.nameGroup}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 150, m: 1 }}>
            <InputLabel id="status">Trạng Thái</InputLabel>
            <Select onChange={handleSlectedStatus} labelId="status" label="Trạng Thái">
              <MenuItem>Tất cả</MenuItem>
              <MenuItem value="Chưa bắt đầu">Chưa bắt đầu</MenuItem>
              <MenuItem value="Đang xử lý">Đang xử lý</MenuItem>
              <MenuItem value="Huỷ">Huỷ</MenuItem>
              <MenuItem value="Hoàn Thành">Hoàn Thành</MenuItem>
            </Select>
          </FormControl>
          <Stack minWidth={260} m={1}>
            <Autocomplete
              fullWidth
              options={options}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Nguời Thực Hiện"
                  onChange={handleSelectedImplementerChange}
                />
              )}
            />
          </Stack>
          <TextField
            onChange={handleSearchChange}
            label="Tìm Kiếm"
            fullWidth
            placeholder="Tìm Kiếm"
            sx={{
              m: 1,
              minWidth: 500,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton size="small">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <div className="table-task">
          <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2, borderRadius: 8, overflow: 'hidden' }} elevation={4}>
              <TableContainer>
                <Table
                  sx={{ minWidth: 730 }}
                  aria-labelledby="tableTitle"
                  size={dense ? 'small' : 'medium'}
                >
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={() => {}}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                  />
                  <TableBody>
                    {rows.map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          onClick={(event) => () => {}}
                          role="checkbox"
                          tabIndex={-1}
                          key={row.id}
                          sx={{ cursor: 'pointer' }}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              inputProps={{
                                'aria-labelledby': labelId,
                              }}
                            />
                          </TableCell>
                          <TableCell>{++index + page * rowsPerPage}</TableCell>
                          <TableCell component="th" id={labelId} scope="row" padding="none">
                            {row.nameStudent}
                          </TableCell>
                          <TableCell align="left">
                            {row.groupTask?.nameGroup ?? 'Undefined'}
                          </TableCell>
                          <TableCell align="left">{row.implementer}</TableCell>
                          <TableCell align="left">{row.toDate}</TableCell>
                          <TableCell align="left">{row.title}</TableCell>
                          <TableCell align="left">
                            <div style={{ display: 'flex', gap: '1px' }}>
                              <Button
                                color="success"
                                onClick={() => {
                                  setOpenDeleteTask(true);
                                  setSelectedRowId(row.id);
                                }}
                              >
                                <DeleteIcon />
                              </Button>

                              <IconButton>
                                <Button
                                  color="success"
                                  onClick={() => {
                                    setSelectedRowId(row.id);
                                    setOpenEditTask(true);
                                  }}
                                >
                                  <EditIcon />
                                </Button>
                              </IconButton>
                              <Button
                                color="success"
                                onClick={() => {
                                  setSelectedRowId(row.id);
                                  setOpenViewTask(true);
                                }}
                              >
                                <RemoveRedEyeIcon />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: (dense ? 33 : 53) * emptyRows,
                        }}
                      >
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
            <FormControlLabel
              control={<Switch checked={dense} onChange={handleChangeDense} />}
              label="Dense "
            />
          </Box>
        </div>
        <div className="dense-slice"></div>
      </div>
      {openEditTask && !!selectedRowId && (
        <TaskEditFormDialog
          missionId={selectedRowId}
          open={true}
          onClose={() => setOpenEditTask(false)}
        />
      )}
      {openViewTask && !!selectedRowId && (
        <TaskViewFormDialog
          missionId={selectedRowId}
          open={true}
          onClose={() => setOpenViewTask(false)}
        />
      )}

      {openDeleteTask && !!selectedRowId && (
        <TaskDeleteFormDialog
          missionId={selectedRowId}
          open={true}
          onClose={() => setOpenDeleteTask(false)}
        />
      )}
    </>
  );
};
