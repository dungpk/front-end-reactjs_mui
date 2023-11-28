'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { Dialog } from './form-dialog';
import './expense-view.css';
import Switch from 'react-switch';
import _ from 'lodash';
import { Button } from '@mui/material';
import { ExpenseFormDialog } from './form-dialog-v2';
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
      category: 'Marketing',
      paymentMethod: 'Credit Card',
      money: 100.5,
    },
    {
      createdDate: '2023-08-28',
      name: 'Jane Smith',
      phone: '0987654321',
      category: 'Marketing',
      paymentMethod: 'PayPal',
      money: 50.75,
    },
    {
      createdDate: '2023-10-05',
      name: 'Michael Johnson',
      phone: '9876543210',
      category: 'Marketing',
      paymentMethod: 'Cash',
      money: 75.2,
    },
    {
      createdDate: '2023-09-02',
      name: 'Emily Davis',
      phone: '5555555555',
      category: 'Marketing',
      paymentMethod: 'Credit Card',
      money: 200.0,
    },
    {
      createdDate: '2023-08-12',
      name: 'Robert Brown',
      phone: '0123456789',
      category: 'Marketing',
      paymentMethod: 'PayPal',
      money: 35.5,
    },
    {
      createdDate: '2023-10-19',
      name: 'Sophia Wilson',
      phone: '9876543210',
      category: 'Tiền Mua Sách',
      paymentMethod: 'Cash',
      money: 15.8,
    },
    {
      createdDate: '2023-08-05',
      name: 'David Taylor',
      phone: '5555555555',
      category: 'Tiền Mua Sách',
      paymentMethod: 'Credit Card',
      money: 120.75,
    },
    {
      createdDate: '2023-10-10',
      name: 'Olivia Anderson',
      phone: '0123456789',
      category: 'Tiền Mua Sách',
      paymentMethod: 'PayPal',
      money: 40.25,
    },
    {
      createdDate: '2023-09-25',
      name: 'James Miller',
      phone: '1234567890',
      category: 'Tiền Mua Sách',
      paymentMethod: 'Cash',
      money: 90.0,
    },
    {
      createdDate: '2023-10-15',
      name: 'Ava Thomas',
      phone: '0987654321',
      category: 'Tiền Mua Sách',
      paymentMethod: 'Credit Card',
      money: 250.5,
    },
    {
      createdDate: '2023-09-01',
      name: 'John Doe',
      phone: '9876543210',
      category: 'Tiền Mua Sách',
      paymentMethod: 'Credit Card',
      money: 99.99,
    },
    {
      createdDate: '2023-10-15',
      name: 'Alice Johnson',
      phone: '5551234567',
      category: 'Tiền Mua Sách',
      paymentMethod: 'Cash',
      money: 45.75,
    },
    {
      createdDate: '2023-07-28',
      name: 'Emily Smith',
      phone: '4567890123',
      category: 'Tiền Mua Sách',
      paymentMethod: 'PayPal',
      money: 25.0,
    },
    {
      createdDate: '2023-11-05',
      name: 'Michael Davis',
      phone: '3216549870',
      category: 'Tiền Mua Sách',
      paymentMethod: 'Credit Card',
      money: 15.99,
    },
    {
      createdDate: '2023-09-18',
      name: 'Sophia Wilson',
      phone: '7894561230',
      category: 'Tiền Mua Sách',
      paymentMethod: 'PayPal',
      money: 12.5,
    },
    {
      createdDate: '2023-10-02',
      name: 'Daniel Thompson',
      phone: '3335557779',
      category: 'Marketing',
      paymentMethod: 'Cash',
      money: 27.8,
    },
    {
      createdDate: '2023-08-26',
      name: 'Olivia Martinez',
      phone: '6669990001',
      category: 'Marketing',
      paymentMethod: 'Credit Card',
      money: 199.0,
    },
    {
      createdDate: '2023-11-10',
      name: 'William Anderson',
      phone: '4447772225',
      category: 'Marketing',
      paymentMethod: 'Cash',
      money: 62.35,
    },
    {
      createdDate: '2023-09-23',
      name: 'Emma Taylor',
      phone: '1233211234',
      category: 'Marketing',
      paymentMethod: 'Credit Card',
      money: 49.99,
    },
    {
      createdDate: '2023-10-07',
      name: 'James Brown',
      phone: '8901234567',
      category: 'Tiền Mua Sách',
      paymentMethod: 'PayPal',
      money: 18.75,
    },
    {
      createdDate: '2023-08-19',
      name: 'Mia Davis',
      phone: '1112223334',
      category: 'Tiền Mua Sách',
      paymentMethod: 'Cash',
      money: 9.99,
    },
    {
      createdDate: '2023-11-15',
      name: 'Alexander Johnson',
      phone: '5558889990',
      category: 'Books',
      paymentMethod: 'Tiền Mua Sách',
      money: 33.0,
    },
    {
      createdDate: '2023-09-05',
      name: 'Ella Wilson',
      phone: '4447772225',
      category: 'Tiền Mua Sách',
      paymentMethod: 'PayPal',
      money: 149.0,
    },
    {
      createdDate: '2023-10-20',
      name: 'Benjamin Anderson',
      phone: '2223334445',
      category: 'Tiền Mua Sách',
      paymentMethod: 'Cash',
      money: 78.95,
    },
    {
      createdDate: '2023-08-14',
      name: 'Ava Smith',
      phone: '1114447772',
      category: 'Tiền Mua Sách',
      paymentMethod: 'Credit Card',
      money: 38.5,
    },
    {
      createdDate: '2023-11-01',
      name: 'Liam Taylor',
      phone: '6663338885',
      category: 'Tiền Mua Sách',
      paymentMethod: 'Cash',
      money: 21.25,
    },
    {
      createdDate: '2023-09-14',
      name: 'Isabella Thompson',
      phone: '3335557779',
      category: 'Tiền Mua Sách',
      paymentMethod: 'PayPal',
      money: 17.8,
    },
    {
      createdDate: '2023-10-29',
      name: 'Noah Martinez',
      phone: '8885552228',
      category: 'Marketing',
      paymentMethod: 'CreditCard',
      money: 29.99,
    },
    {
      createdDate: '2023-08-22',
      name: 'Charlotte Johnson',
      phone: '7774441116',
      category: 'Marketing',
      paymentMethod: 'PayPal',
      money: 249.0,
    },
    {
      createdDate: '2023-11-05',
      name: 'Liam Wilson',
      phone: '2223334445',
      category: 'Marketing',
      paymentMethod: 'Cash',
      money: 54.75,
    },
    {
      createdDate: '2023-09-18',
      name: 'Amelia Davis',
      phone: '5558889990',
      category: 'Marketing',
      paymentMethod: 'Credit Card',
      money: 42.0,
    },
    {
      createdDate: '2023-10-02',
      name: 'Mason Smith',
      phone: '7774441116',
      category: 'Marketing',
      paymentMethod: 'PayPal',
      money: 16.75,
    },
  ]);

  let dataFilter = data;

  const [open, setOpen] = useState<boolean>(false);
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  const [currentRows, setCurrentRows] = useState(dataFilter.slice(indexOfFirstRow, indexOfLastRow));

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

  useEffect(() => {
    // Hành động được thực hiện khi component được render hoặc dữ liệu thay đổi
    console.log('Component rendered or data changed');
  }, [data]); // Depen

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  function getLastDate() {
    const today = new Date();
    const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    const year = oneMonthAgo.getFullYear();
    const month = String(oneMonthAgo.getMonth() + 1).padStart(2, '0');
    const day = String(oneMonthAgo.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const [inputFromDate, setInputFromDate] = useState(getLastDate);
  const [inputToDate, setInpuToDate] = useState(getCurrentDate);
  const [inputCategory, setInputCategory] = useState('Tất Cả');

  const handleInputFromDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputFromDate(value);
    filterData();
  };

  const handleInputToDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInpuToDate(value);
    filterData();
  };

  const handleInputCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setInputCategory(value);
    filterData();
  };

  const filterData = () => {
    dataFilter = data?.filter((x) => {
      const validDate = x.createdDate >= inputFromDate && x.createdDate <= inputToDate;
      // const validCategory = x.category === inputCategory;

      return validDate;
    });

    setCurrentRows(dataFilter.slice(indexOfFirstRow, indexOfLastRow));
  };

  const dataFilterV2 = data?.filter(
    (x) =>
      (inputCategory == 'Tất Cả' || x.category == inputCategory) &&
      x.createdDate >= inputFromDate &&
      x.createdDate <= inputToDate,
  );

  var categories = _.uniq(data?.map((x) => x.category));

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 40 }}>
        <h2 style={{ fontSize: 24 }}>Danh sách phiếu chi</h2>
        <div className="btn-group">
          <button className="btn" onClick={() => setOpenForm(true)}>
            Cài đặt danh mục chi
          </button>
          {/* {openForm && <ExpenseCatalogForm onClose={() => setOpenForm(false)} />} */}
          <Button variant="contained" color="success" onClick={() => setOpen(true)}>
            Text
          </Button>
          <button className="btn-green" onClick={() => setOpen(true)} style={{ marginLeft: 8 }}>
            Thêm mới phiếu chi
          </button>
          {/* {open && <ExpenseFormDialog open={true} onClose={() => setOpen(false)} />} */}
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
        <input
          className="date-picker"
          type="date"
          value={getLastDate()}
          onChange={handleInputFromDateChange}
        ></input>
        <input
          className="date-picker"
          type="date"
          value={getCurrentDate()}
          onChange={handleInputToDateChange}
        ></input>
        <select
          className="select-form"
          name="danh mục"
          style={{ minWidth: 150 }}
          onChange={handleInputCategoryChange}
          value={inputCategory}
        >
          <option value="Tất Cả" selected style={{ color: 'grey' }}>
            Tất cả
          </option>
          {categories?.map((x) => (
            <option value={x} key={x}>
              {x}
            </option>
          ))}
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
              {dataFilterV2.map((item, index) => (
                <tr key={index}>
                  <td>{++index + (currentPage - 1) * rowsPerPage}</td>
                  <td>{item.createdDate}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td
                    style={{
                      display: 'flex',
                      // justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#00CC00',
                        color: 'green',
                        borderRadius: '5px',
                        height: 30,
                        width: 120,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      {item.category}
                    </div>
                  </td>

                  <td>{item.paymentMethod}</td>
                  <td>
                    {item.money}
                    <span className="currency">đ</span>
                  </td>
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

          <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <span>Trang hiện tại: {currentPage}</span>
              <span> / </span>
              <span>Tổng số bản ghi: {dataFilter.length}</span>
            </div>
            <div>
              <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                &lt;
              </button>
              <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                &gt;
              </button>
            </div>
          </div>
          <label>
            <Switch onChange={toggleDenseRows} checked={denseRows} />
          </label>
        </div>
      </div>
    </div>
  );
};
