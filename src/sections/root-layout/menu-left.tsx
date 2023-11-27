'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
import { Box, Typography } from '@mui/material';

import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { FiberManualRecord } from '@mui/icons-material';

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

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div
      className="menu-left"
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        id="ant-center"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '10vh',
        }}
      >
        <a href="#about" style={{ fontSize: '45px' }}>
          ANT<span style={{ color: 'red' }}>.</span>Center
        </a>
      </div>
      <div className="center-name">
        <div className="center-name-icon"> T </div>
        <div className="center-name-text">
          <div className="title">Trung tâm tiếng anh</div>
          <div className="subtitle">Chủ trung tâm</div>
        </div>
      </div>

      <div className="nav-bar">
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Chung
            </ListSubheader>
          }
        >
          <Link href="/">
            <ListItemButton
              sx={{
                borderRadius: '10px',
              }}
              className={
                selectedItem === 'overview' ? 'selected-list-item-button' : 'list-item-button'
              }
              onClick={() => handleItemClick('overview')}
            >
              <ListItemIcon className="custom-icon">
                <GrOverview
                  style={{ color: selectedItem === 'overview' ? 'rgb(61, 209, 85)' : 'grey' }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Tổng Quan"
                primaryTypographyProps={{
                  color: selectedItem === 'overview' ? 'rgb(61, 209, 85)' : 'text.secondary',
                  fontWeight: 450,
                }}
              />
            </ListItemButton>
          </Link>

          <Link href="/">
            <ListItemButton
              sx={{
                borderRadius: '10px',
              }}
              className={
                selectedItem === 'sales_report' ? 'selected-list-item-button' : 'list-item-button'
              }
              onClick={() => handleItemClick('sales_report')}
            >
              <ListItemIcon className="custom-icon">
                <LuCircleDollarSign
                  style={{ color: selectedItem === 'sales_report' ? 'rgb(61, 209, 85)' : 'grey' }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Báo Cáo Doanh Thu"
                primaryTypographyProps={{
                  color: selectedItem === 'sales_report' ? 'rgb(61, 209, 85)' : 'text.secondary',
                  fontWeight: 450,
                }}
              />
            </ListItemButton>
          </Link>

          <Link href="/">
            <ListItemButton
              sx={{
                borderRadius: '10px',
              }}
              className={
                selectedItem === 'my_class' ? 'selected-list-item-button' : 'list-item-button'
              }
              onClick={() => handleItemClick('my_class')}
            >
              <ListItemIcon className="custom-icon">
                <PiStudent
                  style={{ color: selectedItem === 'my_class' ? 'rgb(61, 209, 85)' : 'grey' }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Lớp Học Của Tôi"
                primaryTypographyProps={{
                  color: selectedItem === 'my_class' ? 'rgb(61, 209, 85)' : 'text.secondary',
                  fontWeight: 450,
                }}
              />
            </ListItemButton>
          </Link>
        </List>
      </div>
      <div className="nav-bar">
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Quản Lý
            </ListSubheader>
          }
        >
          <Link href="/task">
            <ListItemButton
              sx={{
                borderRadius: '10px',
              }}
              className={selectedItem === 'task' ? 'selected-list-item-button' : 'list-item-button'}
              onClick={() => handleItemClick('task')}
            >
              <ListItemIcon className="custom-icon">
                <GoNote style={{ color: selectedItem === 'task' ? 'rgb(61, 209, 85)' : 'grey' }} />
              </ListItemIcon>
              <ListItemText
                primary="Công Việc"
                primaryTypographyProps={{
                  color: selectedItem === 'task' ? 'rgb(61, 209, 85)' : 'text.secondary',
                  fontWeight: 450,
                }}
              />
            </ListItemButton>
          </Link>

          <ListItemButton
            onClick={toggleDropdownAdmission}
            sx={{
              borderRadius: '10px',
            }}
          >
            <ListItemIcon className="custom-icon">
              <AiOutlineAlignLeft />
            </ListItemIcon>
            <ListItemText
              primary="Tuyển Sinh"
              primaryTypographyProps={{
                color: 'text.secondary',
                fontWeight: 450,
              }}
            />
            {dropdownVisibleAdmission ? (
              <ExpandLess sx={{ color: 'grey' }} />
            ) : (
              <ExpandMore sx={{ color: 'grey' }} />
            )}
          </ListItemButton>
          <Collapse in={dropdownVisibleAdmission} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link href="/">
                <ListItemButton
                  className={
                    selectedItem === 'contacts' ? 'selected-list-item-button' : 'list-item-button'
                  }
                  onClick={() => handleItemClick('contacts')}
                >
                  <ListItemIcon className="custom-icon">
                    <FiberManualRecord
                      sx={{
                        color: selectedItem === 'contacts' ? 'rgb(61, 209, 85)' : 'grey',
                        fontSize: '8px',
                        marginLeft: '14px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: selectedItem === 'contacts' ? '15px' : '14px',

                      color: selectedItem === 'contacts' ? 'rgb(61, 209, 85)' : 'text.secondary',
                    }}
                    primary="Danh Sách Liên Hệ"
                  />
                </ListItemButton>
              </Link>
              <Link href="/">
                <ListItemButton
                  className={
                    selectedItem === 'trial' ? 'selected-list-item-button' : 'list-item-button'
                  }
                  onClick={() => handleItemClick('trial')}
                >
                  <ListItemIcon className="custom-icon">
                    <FiberManualRecord
                      sx={{
                        color: selectedItem === 'trial' ? 'rgb(61, 209, 85)' : 'grey',
                        fontSize: '8px',
                        marginLeft: '14px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: selectedItem === 'trial' ? '15px' : '14px',
                      color: selectedItem === 'trial' ? 'rgb(61, 209, 85)' : 'text.secondary',
                    }}
                    primary="Danh Sách Học Thử"
                  />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>

          <ListItemButton
            onClick={toggleDropdownFinance}
            sx={{
              borderRadius: '10px',
            }}
          >
            <ListItemIcon className="custom-icon">
              <FaDollarSign />
            </ListItemIcon>
            <ListItemText
              primary="Tài Chính"
              primaryTypographyProps={{
                color: 'text.secondary',
                fontWeight: 450,
              }}
            />
            {dropdownVisibleFinance ? (
              <ExpandLess sx={{ color: 'grey' }} />
            ) : (
              <ExpandMore sx={{ color: 'grey' }} />
            )}
          </ListItemButton>
          <Collapse in={dropdownVisibleFinance} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link href="/">
                <ListItemButton
                  className={
                    selectedItem === 'register' ? 'selected-list-item-button' : 'list-item-button'
                  }
                  onClick={() => handleItemClick('register')}
                >
                  <ListItemIcon className="custom-icon">
                    <FiberManualRecord
                      sx={{
                        color: selectedItem === 'register' ? 'rgb(61, 209, 85)' : 'grey',
                        fontSize: '8px',
                        marginLeft: '14px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: selectedItem === 'register' ? '15px' : '14px',

                      color: selectedItem === 'register' ? 'rgb(61, 209, 85)' : 'text.secondary',
                    }}
                    primary="Hoá Đơn Ghi Danh"
                  />
                </ListItemButton>
              </Link>
              <Link href="/">
                <ListItemButton
                  className={
                    selectedItem === 'sell' ? 'selected-list-item-button' : 'list-item-button'
                  }
                  onClick={() => handleItemClick('sell')}
                >
                  <ListItemIcon className="custom-icon">
                    <FiberManualRecord
                      sx={{
                        color: selectedItem === 'sell' ? 'rgb(61, 209, 85)' : 'grey',
                        fontSize: '8px',
                        marginLeft: '14px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: selectedItem === 'sell' ? '15px' : '14px',
                      color: selectedItem === 'sell' ? 'rgb(61, 209, 85)' : 'text.secondary',
                    }}
                    primary="Hoá Đơn Bán Hàng"
                  />
                </ListItemButton>
              </Link>
              <Link href="/">
                <ListItemButton
                  className={
                    selectedItem === 'collection list'
                      ? 'selected-list-item-button'
                      : 'list-item-button'
                  }
                  onClick={() => handleItemClick('collection list')}
                >
                  <ListItemIcon className="custom-icon">
                    <FiberManualRecord
                      sx={{
                        color: selectedItem === 'collection list' ? 'rgb(61, 209, 85)' : 'grey',
                        fontSize: '8px',
                        marginLeft: '14px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: selectedItem === 'collection list' ? '15px' : '14px',
                      color:
                        selectedItem === 'collection list' ? 'rgb(61, 209, 85)' : 'text.secondary',
                    }}
                    primary="Danh Sách Thu Khác"
                  />
                </ListItemButton>
              </Link>

              <Link href="/">
                <ListItemButton
                  className={
                    selectedItem === 'genus list' ? 'selected-list-item-button' : 'list-item-button'
                  }
                  onClick={() => handleItemClick('genus list')}
                >
                  <ListItemIcon className="custom-icon">
                    <FiberManualRecord
                      sx={{
                        color: selectedItem === 'genus list' ? 'rgb(61, 209, 85)' : 'grey',
                        fontSize: '8px',
                        marginLeft: '14px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: selectedItem === 'genus list' ? '15px' : '14px',
                      color: selectedItem === 'genus list' ? 'rgb(61, 209, 85)' : 'text.secondary',
                    }}
                    primary="Danh Sách Chi"
                  />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>

          <ListItemButton
            onClick={toggleDropdownStorage}
            sx={{
              borderRadius: '10px',
            }}
          >
            <ListItemIcon className="custom-icon">
              <TbChartHistogram />
            </ListItemIcon>
            <ListItemText
              primary="Kho Hàng"
              primaryTypographyProps={{
                color: 'text.secondary',
                fontWeight: 450,
              }}
            />
            {dropdownVisibleStorage ? (
              <ExpandLess sx={{ color: 'grey' }} />
            ) : (
              <ExpandMore sx={{ color: 'grey' }} />
            )}
          </ListItemButton>
          <Collapse in={dropdownVisibleStorage} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link href="/">
                <ListItemButton
                  className={
                    selectedItem === 'product' ? 'selected-list-item-button' : 'list-item-button'
                  }
                  onClick={() => handleItemClick('product')}
                >
                  <ListItemIcon className="custom-icon">
                    <FiberManualRecord
                      sx={{
                        color: selectedItem === 'product' ? 'rgb(61, 209, 85)' : 'grey',
                        fontSize: '8px',
                        marginLeft: '14px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: selectedItem === 'product' ? '15px' : '14px',

                      color: selectedItem === 'product' ? 'rgb(61, 209, 85)' : 'text.secondary',
                    }}
                    primary="Sản Phẩm"
                  />
                </ListItemButton>
              </Link>
              <Link href="/">
                <ListItemButton
                  className={
                    selectedItem === 'coupon' ? 'selected-list-item-button' : 'list-item-button'
                  }
                  onClick={() => handleItemClick('coupon')}
                >
                  <ListItemIcon className="custom-icon">
                    <FiberManualRecord
                      sx={{
                        color: selectedItem === 'coupon' ? 'rgb(61, 209, 85)' : 'grey',
                        fontSize: '8px',
                        marginLeft: '14px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: selectedItem === 'coupon' ? '15px' : '14px',
                      color: selectedItem === 'coupon' ? 'rgb(61, 209, 85)' : 'text.secondary',
                    }}
                    primary="Phiếu Nhập"
                  />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>

          <ListItemButton
            onClick={toggleDropdownRequest}
            sx={{
              borderRadius: '10px',
            }}
          >
            <ListItemIcon className="custom-icon">
              <GiStabbedNote />
            </ListItemIcon>
            <ListItemText
              primary="Đơn Từ"
              primaryTypographyProps={{
                color: 'text.secondary',
                fontWeight: 450,
              }}
            />
            {dropdownVisibleRequest ? (
              <ExpandLess sx={{ color: 'grey' }} />
            ) : (
              <ExpandMore sx={{ color: 'grey' }} />
            )}
          </ListItemButton>
          <Collapse in={dropdownVisibleRequest} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link href="/">
                <ListItemButton
                  className={
                    selectedItem === 'leave school'
                      ? 'selected-list-item-button'
                      : 'list-item-button'
                  }
                  onClick={() => handleItemClick('leave school')}
                >
                  <ListItemIcon className="custom-icon">
                    <FiberManualRecord
                      sx={{
                        color: selectedItem === 'leave school' ? 'rgb(61, 209, 85)' : 'grey',
                        fontSize: '8px',
                        marginLeft: '14px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: selectedItem === 'leave school' ? '15px' : '14px',

                      color:
                        selectedItem === 'leave school' ? 'rgb(61, 209, 85)' : 'text.secondary',
                    }}
                    primary="Đơn Xin Nghỉ Học"
                  />
                </ListItemButton>
              </Link>
              <Link href="/">
                <ListItemButton
                  className={
                    selectedItem === 'stop school'
                      ? 'selected-list-item-button'
                      : 'list-item-button'
                  }
                  onClick={() => handleItemClick('stop school')}
                >
                  <ListItemIcon className="custom-icon">
                    <FiberManualRecord
                      sx={{
                        color: selectedItem === 'stop school' ? 'rgb(61, 209, 85)' : 'grey',
                        fontSize: '8px',
                        marginLeft: '14px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: selectedItem === 'stop school' ? '15px' : '14px',
                      color: selectedItem === 'stop school' ? 'rgb(61, 209, 85)' : 'text.secondary',
                    }}
                    primary="Đơn Xin Dừng Học"
                  />
                </ListItemButton>
              </Link>

              <Link href="/">
                <ListItemButton
                  className={
                    selectedItem === 'retired' ? 'selected-list-item-button' : 'list-item-button'
                  }
                  onClick={() => handleItemClick('retired')}
                >
                  <ListItemIcon className="custom-icon">
                    <FiberManualRecord
                      sx={{
                        color: selectedItem === 'retired' ? 'rgb(61, 209, 85)' : 'grey',
                        fontSize: '8px',
                        marginLeft: '14px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: selectedItem === 'retired' ? '15px' : '14px',
                      color: selectedItem === 'retired' ? 'rgb(61, 209, 85)' : 'text.secondary',
                    }}
                    primary="Đơn Xin Dừng Học"
                  />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>

          <ListItemButton
            onClick={toggleDropdownTeaching}
            sx={{
              borderRadius: '10px',
            }}
          >
            <ListItemIcon className="custom-icon">
              <LiaChalkboardTeacherSolid />
            </ListItemIcon>
            <ListItemText
              primary="Giảng Dạy"
              primaryTypographyProps={{
                color: 'text.secondary',
                fontWeight: 450,
              }}
            />
            {dropdownVisibleTeaching ? (
              <ExpandLess sx={{ color: 'grey' }} />
            ) : (
              <ExpandMore sx={{ color: 'grey' }} />
            )}
          </ListItemButton>
          <Collapse in={dropdownVisibleTeaching} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link href="/">
                <ListItemButton
                  className={
                    selectedItem === 'class' ? 'selected-list-item-button' : 'list-item-button'
                  }
                  onClick={() => handleItemClick('class')}
                >
                  <ListItemIcon className="custom-icon">
                    <FiberManualRecord
                      sx={{
                        color: selectedItem === 'class' ? 'rgb(61, 209, 85)' : 'grey',
                        fontSize: '8px',
                        marginLeft: '14px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: selectedItem === 'class' ? '15px' : '14px',

                      color: selectedItem === 'class' ? 'rgb(61, 209, 85)' : 'text.secondary',
                    }}
                    primary="Quản Lý Lớp Học"
                  />
                </ListItemButton>
              </Link>
              <Link href="/">
                <ListItemButton
                  className={
                    selectedItem === 'student' ? 'selected-list-item-button' : 'list-item-button'
                  }
                  onClick={() => handleItemClick('student')}
                >
                  <ListItemIcon className="custom-icon">
                    <FiberManualRecord
                      sx={{
                        color: selectedItem === 'student' ? 'rgb(61, 209, 85)' : 'grey',
                        fontSize: '8px',
                        marginLeft: '14px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: selectedItem === 'student' ? '15px' : '14px',
                      color: selectedItem === 'student' ? 'rgb(61, 209, 85)' : 'text.secondary',
                    }}
                    primary="Quản Lý Học Viên"
                  />
                </ListItemButton>
              </Link>
              <Link href="/">
                <ListItemButton
                  className={
                    selectedItem === 'teacher' ? 'selected-list-item-button' : 'list-item-button'
                  }
                  onClick={() => handleItemClick('teacher')}
                >
                  <ListItemIcon className="custom-icon">
                    <FiberManualRecord
                      sx={{
                        color: selectedItem === 'teacher' ? 'rgb(61, 209, 85)' : 'grey',
                        fontSize: '8px',
                        marginLeft: '14px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: selectedItem === 'teacher' ? '15px' : '14px',
                      color: selectedItem === 'teacher' ? 'rgb(61, 209, 85)' : 'text.secondary',
                    }}
                    primary="Danh Sách Thu Khác"
                  />
                </ListItemButton>
              </Link>

              <Link href="/">
                <ListItemButton
                  className={
                    selectedItem === 'worksheet' ? 'selected-list-item-button' : 'list-item-button'
                  }
                  onClick={() => handleItemClick('worksheet')}
                >
                  <ListItemIcon className="custom-icon">
                    <FiberManualRecord
                      sx={{
                        color: selectedItem === 'worksheet' ? 'rgb(61, 209, 85)' : 'grey',
                        fontSize: '8px',
                        marginLeft: '14px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: selectedItem === 'worksheet' ? '15px' : '14px',
                      color: selectedItem === 'worksheet' ? 'rgb(61, 209, 85)' : 'text.secondary',
                    }}
                    primary="Bảng Công"
                  />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>

          <ListItemButton
            onClick={toggleDropdownPromotion}
            sx={{
              borderRadius: '10px',
            }}
          >
            <ListItemIcon className="custom-icon">
              <SiPrecommit />
            </ListItemIcon>
            <ListItemText
              primary="Khuyến Mãi"
              primaryTypographyProps={{
                color: 'text.secondary',
                fontWeight: 450,
              }}
            />
            {dropdownVisiblePromotion ? (
              <ExpandLess sx={{ color: 'grey' }} />
            ) : (
              <ExpandMore sx={{ color: 'grey' }} />
            )}
          </ListItemButton>
          <Collapse in={dropdownVisiblePromotion} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link href="/">
                <ListItemButton
                  className={
                    selectedItem === 'discount' ? 'selected-list-item-button' : 'list-item-button'
                  }
                  onClick={() => handleItemClick('discount')}
                >
                  <ListItemIcon className="custom-icon">
                    <FiberManualRecord
                      sx={{
                        color: selectedItem === 'discount' ? 'rgb(61, 209, 85)' : 'grey',
                        fontSize: '8px',
                        marginLeft: '14px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: selectedItem === 'discount' ? '15px' : '14px',

                      color: selectedItem === 'discount' ? 'rgb(61, 209, 85)' : 'text.secondary',
                    }}
                    primary="Giảm Giá"
                  />
                </ListItemButton>
              </Link>
              <Link href="/">
                <ListItemButton
                  className={
                    selectedItem === 'tuition_package'
                      ? 'selected-list-item-button'
                      : 'list-item-button'
                  }
                  onClick={() => handleItemClick('tuition_package')}
                >
                  <ListItemIcon className="custom-icon">
                    <FiberManualRecord
                      sx={{
                        color: selectedItem === 'tuition_package' ? 'rgb(61, 209, 85)' : 'grey',
                        fontSize: '8px',
                        marginLeft: '14px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: selectedItem === 'tuition_package' ? '15px' : '14px',
                      color:
                        selectedItem === 'tuition_package' ? 'rgb(61, 209, 85)' : 'text.secondary',
                    }}
                    primary="Gói Học Phí"
                  />
                </ListItemButton>
              </Link>

              <Link href="/">
                <ListItemButton
                  className={
                    selectedItem === 'discount_code'
                      ? 'selected-list-item-button'
                      : 'list-item-button'
                  }
                  onClick={() => handleItemClick('discount_code')}
                >
                  <ListItemIcon className="custom-icon">
                    <FiberManualRecord
                      sx={{
                        color: selectedItem === 'discount_code' ? 'rgb(61, 209, 85)' : 'grey',
                        fontSize: '8px',
                        marginLeft: '14px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: selectedItem === 'discount_code' ? '15px' : '14px',
                      color:
                        selectedItem === 'discount_code' ? 'rgb(61, 209, 85)' : 'text.secondary',
                    }}
                    primary="Mã Giảm Giá"
                  />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>

          <ListItemButton
            sx={{
              borderRadius: '10px',
            }}
            onClick={toggleDropdownSetting}
          >
            <ListItemIcon className="custom-icon">
              <IoSettingsSharp />
            </ListItemIcon>
            <ListItemText
              primary="Thiết Lập"
              primaryTypographyProps={{
                color: 'text.secondary',
                fontWeight: 450,
              }}
            />
            {dropdownVisibleSetting ? (
              <ExpandLess sx={{ color: 'grey' }} />
            ) : (
              <ExpandMore sx={{ color: 'grey' }} />
            )}
          </ListItemButton>
          <Collapse in={dropdownVisibleSetting} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link href="/">
                <ListItemButton
                  className={
                    selectedItem === 'empolyee' ? 'selected-list-item-button' : 'list-item-button'
                  }
                  onClick={() => handleItemClick('empolyee')}
                >
                  <ListItemIcon className="custom-icon">
                    <FiberManualRecord
                      sx={{
                        color: selectedItem === 'empolyee' ? 'rgb(61, 209, 85)' : 'grey',
                        fontSize: '8px',
                        marginLeft: '14px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: selectedItem === 'empolyee' ? '15px' : '14px',
                      color: selectedItem === 'empolyee' ? 'rgb(61, 209, 85)' : 'text.secondary',
                    }}
                    primary="Nhân Viên"
                  />
                </ListItemButton>
              </Link>
              <Link href="/">
                <ListItemButton
                  className={
                    selectedItem === 'tuition' ? 'selected-list-item-button' : 'list-item-button'
                  }
                  onClick={() => handleItemClick('tuition')}
                >
                  <ListItemIcon className="custom-icon">
                    <FiberManualRecord
                      sx={{
                        color: selectedItem === 'tuition' ? 'rgb(61, 209, 85)' : 'grey',
                        fontSize: '8px',
                        marginLeft: '14px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: selectedItem === 'tuition' ? '15px' : '14px',
                      color: selectedItem === 'tuition' ? 'rgb(61, 209, 85)' : 'text.secondary',
                    }}
                    primary="Gói Học Phí"
                  />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
        </List>
      </div>
      <div className="nav-bar">
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Khác
            </ListSubheader>
          }
        >
          <Link href="/">
            <ListItemButton
              sx={{
                borderRadius: '10px',
              }}
              className={
                selectedItem === 'support_center' ? 'selected-list-item-button' : 'list-item-button'
              }
              onClick={() => handleItemClick('support_center')}
            >
              <ListItemIcon className="custom-icon">
                <RiQuestionnaireLine
                  style={{ color: selectedItem === 'support_center' ? 'rgb(61, 209, 85)' : 'grey' }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Trung Tâm Trợ Giúp"
                primaryTypographyProps={{
                  color: selectedItem === 'support_center' ? 'rgb(61, 209, 85)' : 'text.secondary',
                  fontWeight: 450,
                }}
              />
            </ListItemButton>
          </Link>
        </List>
      </div>
      <div className="footer-nav">
        <div className="image-container">footer</div>
      </div>
    </div>
  );
};
