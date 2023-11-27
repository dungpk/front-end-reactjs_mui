import React, { useState } from 'react';
import './form-dialog.css';
import { DataItem } from './expense-view';

type DialogProps = {
  onClose: VoidFunction;
  addItem: (item: DataItem) => void;
};

interface FormValues {
  name: string;
  phone: string;
  category: string;
  createdDate: string;
  payDate: string;
  paymentMethod: string;
  money: string;
  note: string;
}

export const Dialog = ({ onClose, addItem }: DialogProps) => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    phone: '',
    category: '',
    createdDate: getCurrentDate(),
    payDate: getCurrentDate(),
    paymentMethod: '',
    money: '',
    note: '',
  });

  const [formErrors, setFormErrors] = useState<FormValues>({
    name: '',
    phone: '',
    category: '',
    createdDate: '',
    payDate: '',
    paymentMethod: '',
    money: '',
    note: '',
  });

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const validateForm = () => {
    const errors: FormValues = {
      name: '',
      phone: '',
      category: '',
      createdDate: '',
      payDate: '',
      paymentMethod: '',
      money: '',
      note: '',
    };

    let isValid = true;

    // Kiểm tra các trường và cập nhật thông báo lỗi tương ứng
    if (formValues.name.trim() === '') {
      errors.name = 'Vui lòng nhập tên người nhận';
      isValid = false;
    }

    if (formValues.phone.trim() === '') {
      errors.phone = 'Vui lòng nhập số điện thoại người nhận';
      isValid = false;
    }

    if (formValues.category.trim() === '') {
      errors.category = 'Vui lòng chọn danh mục chi';
      isValid = false;
    }

    if (formValues.createdDate.trim() === '') {
      errors.createdDate = 'Vui lòng chọn ngày tạo phiếu chi';
      isValid = false;
    }

    if (formValues.payDate.trim() === '') {
      errors.payDate = 'Vui lòng chọn ngày thanh toán';
      isValid = false;
    }

    if (formValues.paymentMethod.trim() === '') {
      errors.paymentMethod = 'Vui lòng chọn phương thức thanh toán';
      isValid = false;
    }

    if (formValues.money.trim() === '') {
      errors.money = 'Vui lòng nhập tổng tiền chi';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleAddData = () => {
    if (validateForm()) {
      const newData: DataItem = {
        createdDate: formValues.createdDate,
        name: formValues.name,
        phone: formValues.phone,
        category: formValues.category,
        paymentMethod: formValues.paymentMethod,
        money: parseInt(formValues.money),
      };

      addItem(newData);
      onClose();
    }
  };

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleAddData();
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
                  className={formErrors.name ? 'error' : ''}
                />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              </div>
              <div className="form-input">
                <input
                  type="text"
                  name="phone"
                  value={formValues.phone}
                  placeholder="Số điện thoại người nhận"
                  onChange={handleChange}
                  className={formErrors.phone ? 'error' : ''}
                />
                {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
              </div>
            </div>

            <div className="row">
              <div className="form-input">
                <label htmlFor="category">Danh mục chi</label>
                <select
                  name="category"
                  onChange={handleChange}
                  value={formValues.category}
                  className={formErrors.category ? 'error' : ''}
                >
                  <option value="" disabled selected style={{ color: 'grey' }}>
                    Chọn danh mục chi
                  </option>
                  <option value="Tất cả">Tất cả</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Tiền Mua Sách">Tiền Mua Sách</option>
                </select>
                {formErrors.category && (
                  <span className="error-message">{formErrors.category}</span>
                )}
              </div>
              <div className="form-input">
                <label htmlFor="createdDate">Ngày tạo phiếu chi*</label>
                <input
                  type="date"
                  name="createdDate"
                  value={formValues.createdDate}
                  defaultValue={getCurrentDate()}
                  onChange={handleChange}
                  className={formErrors.createdDate ? 'error' : ''}
                />
                {formErrors.createdDate && (
                  <span className="error-message">{formErrors.createdDate}</span>
                )}
              </div>
            </div>

            <div className="row">
              <div className="form-input">
                <label htmlFor="payDate">Ngày thanh toán*</label>
                <input
                  type="date"
                  name="payDate"
                  value={formValues.payDate}
                  defaultValue={getCurrentDate()}
                  onChange={handleChange}
                  className={formErrors.payDate ? 'error' : ''}
                />
                {formErrors.payDate && <span className="error-message">{formErrors.payDate}</span>}
              </div>
              <div className="form-input">
                <label htmlFor="paymentMethod">Phương thức thanh toán*</label>
                <select
                  name="paymentMethod"
                  onChange={handleChange}
                  value={formValues.paymentMethod}
                  className={formErrors.paymentMethod ? 'error' : ''}
                >
                  <option value="" disabled selected style={{ color: 'grey' }}>
                    Phương Thức Thanh Toán
                  </option>
                  <option value="Tiền Mặt">Tiền Mặt</option>
                  <option value="Chuyển Khoản">Chuyển Khoản</option>
                </select>
                {formErrors.paymentMethod && (
                  <span className="error-message">{formErrors.paymentMethod}</span>
                )}
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
                  className={formErrors.money ? 'error' : ''}
                />
                <span className="currency">đ</span>
                {formErrors.money && <span className="error-message">{formErrors.money}</span>}
              </div>
            </div>

            <div className="row">
              <div className="form-input">
                <textarea
                  name="note"
                  value={formValues.note}
                  placeholder="Ghi chú"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-buttons">
              <button className="button-cancel" type="button" onClick={onClose}>
                Hủy
              </button>
              <button className="button-save" type="submit">
                Lưu
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
