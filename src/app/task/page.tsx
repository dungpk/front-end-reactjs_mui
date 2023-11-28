import { ExpenseView } from '@/sections/expense/expense-view';
import { Task } from '@/sections/task/task-view';
import { TabScrollButton } from '@mui/material';
import { Metadata } from 'next';
import { TbPentagonNumber1 } from 'react-icons/tb';

export const metadata: Metadata = {
  title: 'Danh sách công việc',
};

const Page1 = () => {
  return <Task />;
};

export default Page1;
