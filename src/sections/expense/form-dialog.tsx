import { useState } from 'react';
import './form-dialog.css';
import { DataItem } from './expense-view';

type DialogProps = {
  onClose: VoidFunction;
  addItem: (item: DataItem) => void;
};

export const Dialog = ({ onClose, addItem }: DialogProps) => {
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    category: '',
    createdDate: new Date().toLocaleString(),
    payDate: new Date().toLocaleString(),
    paymentMethod: '',
    money: '',
    note: '',
  });

  const handleAddData = () => {
    // Tạo dữ liệu mới từ các giá trị trong dialog
    const newData: DataItem = {
      createdDate: '123',
      name: '123',
      phone: '123',
      category: '123',
      paymentMethod: '123',
      money: 123,
    };

    addItem(newData);
    onClose();
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle logic when Save button is clicked
    console.log('Form values:', formValues);
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-header">
          <p>Phiếu chi</p>
          <button onClick={() => onClose()}>X</button>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-input">
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  placeholder="Tên người nhận"
                  onChange={handleChange}
                />
              </div>
              <div className="form-input">
                <input
                  type="text"
                  name="phone"
                  value={formValues.phone}
                  placeholder="Số điện thoại người nhận"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row"> 
              <div className="form-input">
                <label htmlFor="">Danh mục chi</label>
                <select name="category" onChange={handleChange}>
                  <option disabled selected value="">Danh Mục Chi</option>
                  <option value="Shopee">Tất cả</option>
                  <option value="Shopee">Marketing</option>
                  <option value="Lazada">Tiền Mua Sách</option>
                </select>
              </div>
              <div className="form-input">
                <label>Ngày tạo phiếu chi*</label>
                <input
                  type="date"
                  name="createdDate"
                  value={formValues.createdDate}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-input">
                <label>Ngày thanh toán*</label>
                <input
                  type="date"
                  name="payDate"
                  value={formValues.payDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-input">
                <label>Phương thức thanh toán*</label>
                <select name="paymentMethod" onChange={handleChange}>
                  <option value="Shopee">Tiền Mặt</option>
                  <option value="Lazada">Chuyển Khoản</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="form-input">
                <input
                  type="text"
                  name="money"
                  value={formValues.money}
                  placeholder="Tổng tiền chi*"
                  onChange={handleChange}
                />
                <span className="currency">đ</span>
              </div>
            </div>
            <div className="row">
              <div className="form-input">
                <textarea
                  name="note"
                  value={formValues.note}
                  placeholder="Write something awesome..."
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-buttons">
              <button className="button-cancel" type="button" onClick={onClose}>
                Hủy
              </button>
              <button className="button-submit" type="submit" onClick={handleAddData}>
                Lưu
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
