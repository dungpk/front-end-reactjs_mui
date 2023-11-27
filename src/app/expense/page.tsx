import { ExpenseView } from '@/sections/expense/expense-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Danh sách phiếu chi',
};

const Page = () => {
  return <ExpenseView />;
};

export default Page;
