'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AiFillAndroid } from 'react-icons/ai';
import './menu-left.css';
import { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { GrOverview } from 'react-icons/gr';
import { LuCircleDollarSign } from 'react-icons/lu';
import { PiStudent } from 'react-icons/pi';
import { GoNote } from 'react-icons/go';
import { FaDollarSign } from 'react-icons/fa';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { TbChartHistogram } from 'react-icons/tb';
import { GiStabbedNote } from 'react-icons/gi';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { SiPrecommit } from 'react-icons/si';
import { IoSettingsSharp } from 'react-icons/io5';
import { RiQuestionnaireLine } from 'react-icons/ri';

export const MenuLeft = () => {
  const router = useRouter();

  const [dropdownVisibleAdmission, setDropdownVisibleAdmission] = useState(false);
  const [dropdownVisibleFinance, setDrropdownVisibleFinance] = useState(false);
  const [dropdownVisibleStorage, setDrropdownVisibleStorage] = useState(false);
  const [dropdownVisibleRequest, setDrropdownVisibleRequest] = useState(false);
  const [dropdownVisibleTeaching, setDrropdownVisibleTeaching] = useState(false);
  const [dropdownVisiblePromotion, setDrropdownVisiblePromotion] = useState(false);
  const [dropdownVisibleSetting, setDrropdownVisibleSetting] = useState(false);

  const toggleDropdownAdmission = () => {
    setDropdownVisibleAdmission(!dropdownVisibleAdmission);
  };

  const toggleDropdownFinance = () => {
    setDrropdownVisibleFinance(!dropdownVisibleFinance);
  };
  const toggleDropdownStorage = () => {
    setDrropdownVisibleStorage(!dropdownVisibleStorage);
  };
  const toggleDropdownRequest = () => {
    setDrropdownVisibleRequest(!dropdownVisibleRequest);
  };
  const toggleDropdownTeaching = () => {
    setDrropdownVisibleTeaching(!dropdownVisibleTeaching);
  };
  const toggleDropdownPromotion = () => {
    setDrropdownVisiblePromotion(!dropdownVisiblePromotion);
  };
  const toggleDropdownSetting = () => {
    setDrropdownVisibleSetting(!dropdownVisibleSetting);
  };

  return (
    <div
      className="menu-left"
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div id="ant-center">
        <a href="#about">Ant.Center</a>
      </div>
      <div className="center-name">
        <div className="center-name-icon"> T </div>
        <div className="center-name-text">
          <div>Trung Tâm Tiếng Anh</div>
          <div>Chủ trung tâm</div>
        </div>
      </div>

      <div className="nav-bar">
        <div className="element">
          <p>Chung</p>
          <div className="content">
            <GrOverview size={32} color="grey" />
            <p>Tổng Quan</p>
          </div>
          <div className="content">
            <LuCircleDollarSign size={32} color="grey" />
            <p>Báo Cáo Doanh Thu</p>
          </div>
          <div className="content">
            {' '}
            <PiStudent size={32} color="grey" />
            <p>Lớp học của tôi</p>
          </div>
        </div>
        <div className="element">
          <p>Quản Lý</p>
          <div className="content">
            <GoNote size={32} color="grey" />
            <p>Công Việc</p>
          </div>

          <div className="content">
            <AiOutlineAlignLeft size={32} color="grey" />
            <p
              className={`dropdown-btn ${dropdownVisibleAdmission ? 'active' : ''}`}
              onClick={toggleDropdownAdmission}
            >
              Tuyển Sinh
            </p>
            <div className="arrow-container">
              <FaAngleRight className="arrow-icon" />
            </div>
          </div>
          {dropdownVisibleAdmission && (
            <div className="dropdown-container">
              <a href="#">
                <li>Danh Sách Liên Hệ</li>
              </a>
              <a href="#">
                <li>Danh Sách Học Thử</li>
              </a>
            </div>
          )}

          <div className="content">
            <FaDollarSign size={32} color="grey" />
            <p
              className={`dropdown-btn ${dropdownVisibleFinance ? 'active' : ''}`}
              onClick={toggleDropdownFinance}
            >
              Tài chính
            </p>
            <div className="arrow-container">
              <FaAngleRight className="arrow-icon" />
            </div>
          </div>
          {dropdownVisibleFinance && (
            <div className="dropdown-container">
              <a href="#">
                <li>Hoá Đơn Ghi Danh</li>
              </a>
              <a href="#">
                <li>Hoá Đơn Bán Hàng</li>
              </a>
              <a href="#">
                <li>Danh Sách Thu Khác</li>
              </a>
              <Link href="/expense">
                <li>Danh Sách Chi</li>
              </Link>
              {/* <button
                onClick={() => {
                  router.push('/expense');
                }}
              >
                Danh sách phiếu chi
              </button> */}
            </div>
          )}
          <div className="content">
            <TbChartHistogram size={32} color="grey" />
            <p
              className={`dropdown-btn ${dropdownVisibleStorage ? 'active' : ''}`}
              onClick={toggleDropdownStorage}
            >
              Kho Hàng
            </p>
            <div className="arrow-container">
              <FaAngleRight className="arrow-icon" />
            </div>
          </div>
          {dropdownVisibleStorage && (
            <div className="dropdown-container">
              <a href="#">
                <li>Sản phẩm</li>
              </a>
              <a href="#">
                <li>Phiếu Nhập</li>
              </a>
            </div>
          )}
          <div className="content">
            <GiStabbedNote size={32} color="grey" />
            <p
              className={`dropdown-btn ${dropdownVisibleRequest ? 'active' : ''}`}
              onClick={toggleDropdownRequest}
            >
              Đơn Từ
            </p>
            <div className="arrow-container">
              <FaAngleRight className="arrow-icon" />
            </div>
          </div>
          {dropdownVisibleRequest && (
            <ul className="dropdown-container">
              <a href="#">
                <li>Đơn Nghỉ Học</li>
              </a>
              <a href="#">
                <li>Đơn Dừng Học</li>
              </a>
              <a href="#">
                <li>Đơn Nghỉ Học</li>
              </a>
            </ul>
          )}
          <div className="content">
            <LiaChalkboardTeacherSolid size={32} color="grey" />
            <p
              className={`dropdown-btn ${dropdownVisibleTeaching ? 'active' : ''}`}
              onClick={toggleDropdownTeaching}
            >
              Giảng Dạy
            </p>
            <div className="arrow-container">
              <FaAngleRight className="arrow-icon" />
            </div>
          </div>
          {dropdownVisibleTeaching && (
            <div className="dropdown-container">
              <a href="#">
                <li>Quản Lý Lớp Học</li>
              </a>
              <a href="#">
                <li>Quản Lý Học Viên</li>
              </a>
              <a href="#">
                <li> Quản Lý Giáo Viên</li>
              </a>
              <a href="#">
                <li>Bảng Công</li>
              </a>
            </div>
          )}
          <div className="content">
            <SiPrecommit size={32} color="grey" />
            <p
              className={`dropdown-btn ${dropdownVisiblePromotion ? 'active' : ''}`}
              onClick={toggleDropdownPromotion}
            >
              Khuyến Mãi
            </p>
            <div className="arrow-container">
              <FaAngleRight className="arrow-icon" />
            </div>
          </div>
          {dropdownVisiblePromotion && (
            <div className="dropdown-container">
              <a href="#">
                <li>Giảm Giá</li>
              </a>
              <a href="#">
                <li>Gói Học Phí</li>
              </a>
              <a href="#">
                <li>Mã Giảm Giá</li>
              </a>
            </div>
          )}
          <div className="content">
            <IoSettingsSharp size={32} color="grey" />
            <p
              className={`dropdown-btn ${dropdownVisibleSetting ? 'active' : ''}`}
              onClick={toggleDropdownSetting}
            >
              Thiết Lập
            </p>
            <div className="arrow-container">
              <FaAngleRight className="arrow-icon" />
            </div>
          </div>
          {dropdownVisibleSetting && (
            <div className="dropdown-container">
              <a href="#">
                <li>Nhân Viên</li>
              </a>
              <a href="#">
                <li>Gói Học Phí</li>
              </a>
            </div>
          )}
        </div>
        <div className="element">
          <p>Khác</p>
          <div className="content">
            <RiQuestionnaireLine size={32} color="grey" />
            <p>Trung Tâm Trợ Giúp</p>
          </div>
        </div>
      </div>
      <div className="footer-nav">Footer Nav</div>
    </div>
  );
};
