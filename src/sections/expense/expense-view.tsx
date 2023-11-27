'use client';

import { useState } from 'react';
import { Dialog } from './form-dialog';
import './expense-view.css';
import Switch from 'react-switch';
// import { ExpenseCatalogForm } from './expense-catalog-form';

export interface DataItem {
  createdDate: string;
  name: string;
  phone: string;
  category: string;
  paymentMethod: string;
  money: number;
}

export const ExpenseView = () => {
  const tableHead = [
    {
      label: 'STT',
    },
    {
      label: 'Ngày Tạo Phiếu Chi',
    },
    {
      label: 'Tên Người Nhận',
    },
    {
      label: 'Số Điện Thoại',
    },
    {
      label: 'Hạng Mục Chi',
    },
    {
      label: 'Phương Thức Thanh Toán',
    },
    {
      label: 'Số Tiền Chi',
    },
  ];
  const [data, setData] = useState<DataItem[]>([
    {
      createdDate: '2023-09-15',
      name: 'John Doe',
      phone: '1234567890',
      category: 'Electronics',
      paymentMethod: 'Credit Card',
      money: 100.5,
    },
    {
      createdDate: '2023-08-28',
      name: 'Jane Smith',
      phone: '0987654321',
      category: 'Clothing',
      paymentMethod: 'PayPal',
      money: 50.75,
    },
    {
      createdDate: '2023-10-05',
      name: 'Michael Johnson',
      phone: '9876543210',
      category: 'Home Decor',
      paymentMethod: 'Cash',
      money: 75.2,
    },
    {
      createdDate: '2023-09-02',
      name: 'Emily Davis',
      phone: '5555555555',
      category: 'Furniture',
      paymentMethod: 'Credit Card',
      money: 200.0,
    },
    {
      createdDate: '2023-08-12',
      name: 'Robert Brown',
      phone: '0123456789',
      category: 'Books',
      paymentMethod: 'PayPal',
      money: 35.5,
    },
    {
      createdDate: '2023-10-19',
      name: 'Sophia Wilson',
      phone: '9876543210',
      category: 'Toys',
      paymentMethod: 'Cash',
      money: 15.8,
    },
    {
      createdDate: '2023-08-05',
      name: 'David Taylor',
      phone: '5555555555',
      category: 'Sports',
      paymentMethod: 'Credit Card',
      money: 120.75,
    },
    {
      createdDate: '2023-10-10',
      name: 'Olivia Anderson',
      phone: '0123456789',
      category: 'Beauty',
      paymentMethod: 'PayPal',
      money: 40.25,
    },
    {
      createdDate: '2023-09-25',
      name: 'James Miller',
      phone: '1234567890',
      category: 'Appliances',
      paymentMethod: 'Cash',
      money: 90.0,
    },
    {
      createdDate: '2023-10-15',
      name: 'Ava Thomas',
      phone: '0987654321',
      category: 'Jewelry',
      paymentMethod: 'Credit Card',
      money: 250.5,
    },
  ]);

  const [open, setOpen] = useState<boolean>(false);
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Đặt lại trang về trang đầu tiên khi thay đổi số dòng hiển thị
  };

  const handleAddData = (newDataItem: DataItem) => {
    setData([newDataItem, ...data]);
  };
  const [denseRows, setDenseRows] = useState(false);

  const toggleDenseRows = () => {
    setDenseRows(!denseRows);
  };

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 40 }}>
        <h2 style={{ fontSize: 24 }}>Danh sách phiếu chi</h2>
        <div className="btn-group">
          <button className="btn" onClick={() => setOpenForm(true)}>
            Cài đặt danh mục chi
          </button>
          {/* {openForm && <ExpenseCatalogForm onClose={() => setOpenForm(false)} />} */}
          <button className="btn-green" onClick={() => setOpen(true)} style={{ marginLeft: 8 }}>
            Thêm mới phiếu chi
          </button>
          {open && (
            <Dialog
              onClose={() => {
                setOpen(false);
              }}
              addItem={handleAddData}
            />
          )}
        </div>
      </div>
      <div style={{ paddingBottom: 16 }}>
        <button className="btn-export">Export</button>
        <input className="date-picker" type="date"></input>
        <input className="date-picker" type="date"></input>
        <select className="select-form" name="danh mục" style={{ minWidth: 150 }}>
          <option value="none" disabled>
            Danh mục
          </option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>
      <div>
        <div className={`table-container ${denseRows ? 'dense-rows' : ''}`}>
          <table>
            <thead className="table-head">
              <tr>
                {tableHead.map((x, index) => (
                  <th key={index}>{x.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentRows.map((item, index) => (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>{item.createdDate}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.category}</td>
                  <td>{item.paymentMethod}</td>
                  <td>{item.money}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <span>Số dòng hiển thị trên mỗi trang: </span>
            <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </div>
          <label>
            <Switch onChange={toggleDenseRows} checked={denseRows} />
          </label>
        </div>
      </div>
    </div>
  );
};
