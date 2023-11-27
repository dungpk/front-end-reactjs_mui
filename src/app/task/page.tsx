import { ExpenseView } from '@/sections/expense/expense-view';
import { Task } from '@/sections/task/task-view';
import { TabScrollButton } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Danh sách công việc',
};

const Page = () => {
  return <Task />;
};

export default Page;
