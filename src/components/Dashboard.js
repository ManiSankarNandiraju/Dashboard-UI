import React, { useState } from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faWallet,
  faSignOutAlt,
  faCog,
  faEnvelope,
  faBell,
  faCaretUp,
  faCaretDown,
  faBullseye,
  faUtensils,
  faBellConcierge,
  faCircleChevronRight,
  faBan,
  faSearch,
  faBasketShopping,
  faTruck,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import logo from "../assets/logo.png";
import userImage from "../assets/image.png";

const Dashboard = () => {
  const [timePeriod, setTimePeriod] = useState("Daily");
  const data = {
    Daily: [
      { name: "00:00", revenue: 50 },
      { name: "01:00", revenue: 70 },
      { name: "02:00", revenue: 80 },
      { name: "03:00", revenue: 90 },
      { name: "04:00", revenue: 60 },
      { name: "05:00", revenue: 50 },
      { name: "06:00", revenue: 70 },
      { name: "07:00", revenue: 90 },
      { name: "08:00", revenue: 110 },
      { name: "09:00", revenue: 130 },
      { name: "10:00", revenue: 120 },
      { name: "11:00", revenue: 110 },
      { name: "12:00", revenue: 90 },
      { name: "13:00", revenue: 80 },
      { name: "14:00", revenue: 100 },
      { name: "15:00", revenue: 120 },
      { name: "16:00", revenue: 130 },
      { name: "17:00", revenue: 140 },
      { name: "18:00", revenue: 150 },
      { name: "19:00", revenue: 160 },
      { name: "20:00", revenue: 170 },
      { name: "21:00", revenue: 180 },
      { name: "22:00", revenue: 190 },
      { name: "23:00", revenue: 200 },
    ],
    Weekly: [
      { name: "Mon", revenue: 200 },
      { name: "Tue", revenue: 300 },
      { name: "Wed", revenue: 250 },
      { name: "Thu", revenue: 350 },
      { name: "Fri", revenue: 400 },
      { name: "Sat", revenue: 450 },
      { name: "Sun", revenue: 300 },
    ],
    Monthly: [
      { name: "Jan", revenue: 1200 },
      { name: "Feb", revenue: 1900 },
      { name: "Mar", revenue: 3000 },
      { name: "Apr", revenue: 2500 },
      { name: "May", revenue: 2800 },
      { name: "Jun", revenue: 2900 },
      { name: "Jul", revenue: 3100 },
      { name: "Aug", revenue: 3200 },
      { name: "Sep", revenue: 3300 },
      { name: "Oct", revenue: 3400 },
      { name: "Nov", revenue: 3500 },
      { name: "Dec", revenue: 3600 },
    ],
    Yearly: [
      { name: "2020", revenue: 25000 },
      { name: "2021", revenue: 27000 },
      { name: "2022", revenue: 29000 },
      { name: "2023", revenue: 32000 },
      { name: "2024", revenue: 35000 },
    ],
  };
  return (
    <div className="main-container">
      <div className="top-nav">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <div className="nav-icons">
          <FontAwesomeIcon icon={faCog} className="top-icon" />
          <FontAwesomeIcon icon={faEnvelope} className="top-icon" />
          <FontAwesomeIcon icon={faBell} className="top-icon" />
          <div className="user-pic">
            <img src={userImage} alt="User" />
          </div>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="side-nav">
          <ul>
            <li className="active">
              <FontAwesomeIcon icon={faHome} className="faHome" />
            </li>
            <li>
              <FontAwesomeIcon icon={faWallet} />
            </li>
          </ul>
          <ul className="bottom-nav">
            <li>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </li>
          </ul>
        </div>

        <div className="dashboard-content">
          <div className="dashboard-heading">Dashboard</div>
          <div className="grid-container">
            <div className="totals">
              <div className="total-item">
                <div className="left-section">
                  <div className="icon-container-one">
                    <FontAwesomeIcon icon={faBasketShopping} className="icon" />
                  </div>
                  <div className="name">Total Orders</div>
                  <div className="value-container">
                    <div className="value">1200</div>
                    <div className="right-section rise">
                      <FontAwesomeIcon icon={faCaretUp} className="arrow" /> 15%
                    </div>
                  </div>
                </div>
              </div>
              <div className="total-item">
                <div className="left-section">
                  <div className="icon-container-two">
                    <FontAwesomeIcon icon={faTruck} className="icon" />
                  </div>
                  <div className="name">Total Delivered</div>
                  <div className="value-container">
                    <div className="value">800</div>
                    <div className="right-section fall">
                      <FontAwesomeIcon icon={faCaretDown} className="arrow" />{" "}
                      15%
                    </div>
                  </div>
                </div>
              </div>
              <div className="total-item">
                <div className="left-section">
                  <div className="icon-container-three">
                    <FontAwesomeIcon icon={faBan} className="icon" />
                  </div>
                  <div className="name">Total Cancelled</div>
                  <div className="value-container">
                    <div className="value">150</div>
                    <div className="right-section rise">
                      <FontAwesomeIcon icon={faCaretUp} className="arrow" /> 10%
                    </div>
                  </div>
                </div>
              </div>
              <div className="total-item">
                <div className="left-section">
                  <div className="icon-container-four">
                    <FontAwesomeIcon icon={faDollarSign} className="icon" />
                  </div>
                  <div className="name">Total Revenue</div>
                  <div className="value-container">
                    <div className="value">$45k</div>
                    <div className="right-section fall">
                      <FontAwesomeIcon icon={faCaretDown} className="arrow" />{" "}
                      2%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="net-profit">
              <div className="net-profit-content">
                <div className="net-profit-text">
                  <div className="net-profit-header">
                    <h2>Net Profit</h2>
                  </div>
                  <div className="net-profit-amount">
                    <span>$12,560</span>
                  </div>
                </div>
                <div className="circle-progress-container">
                  <CircularProgress
                    value={70}
                    color="orange"
                    size="95px"
                    thickness="10px"
                  >
                    <CircularProgressLabel className="circular-progress-label">
                      70%
                    </CircularProgressLabel>
                  </CircularProgress>
                </div>
              </div>
              <div className="net-profit-footer">
                <div className="right-section rise">
                  <FontAwesomeIcon icon={faCaretUp} className="arrow" /> 2%
                </div>
                <div className="description">
                  <span>*Goals Completed.</span>
                </div>
              </div>
            </div>

            <div className="activity">
              <div className="activity-heading">
                <h2 className="title">Activity</h2>
                <div className="time-frame-selector">
                  <select
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(e.target.value)}
                    style={{ padding: "5px" }}
                  >
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                  </select>
                </div>
              </div>
              <div className="activity-graph">
                <ResponsiveContainer width="100%" height={100}>
                  {" "}
                  {/* Adjust height here */}
                  <BarChart data={data[timePeriod]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="revenue"
                      fill="#EEB76B"
                      radius={[5, 5, 0, 0]}
                    />{" "}
                    {/* Set color to orange */}
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="easymenu">
              <ul>
                <li>
                  <div className="easy-icon-container-goals">
                    <FontAwesomeIcon icon={faBullseye} className="easy-icon" />
                  </div>
                  Goals
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    className="easymenu-arrow"
                  />
                </li>
                <li>
                  <div className="easy-icon-container-dishes">
                    <FontAwesomeIcon icon={faUtensils} className="easy-icon" />
                  </div>
                  Popular Dishes
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    className="easymenu-arrow"
                  />
                </li>
                <li>
                  <div className="easy-icon-container-menu">
                    <FontAwesomeIcon
                      icon={faBellConcierge}
                      className="easy-icon"
                    />
                  </div>
                  Menu
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    className="easymenu-arrow"
                  />
                </li>
              </ul>
            </div>

            <div className="recent-orders">
              <div className="recent-orders-header">
                <h2>Recent Orders</h2>
              </div>
              <div className="recent-orders-table-container">
                <table className="recent-orders-table">
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Order No.</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="customer-info">
                          <img
                            src={userImage}
                            alt="Customer 1"
                            className="customer-image"
                          />
                          <span>John Doe</span>
                        </div>
                      </td>
                      <td>#1234</td>
                      <td>$50.00</td>
                      <td className="status delivered">Delivered</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="customer-info">
                          <img
                            src={userImage}
                            alt="Customer 2"
                            className="customer-image"
                          />
                          <span>Jane Smith</span>
                        </div>
                      </td>
                      <td>#5678</td>
                      <td>$30.00</td>
                      <td className="status pending">Pending</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="customer-info">
                          <img
                            src={userImage}
                            alt="Customer 3"
                            className="customer-image"
                          />
                          <span>Emily Johnson</span>
                        </div>
                      </td>
                      <td>#9101</td>
                      <td>$20.00</td>
                      <td className="status cancelled">Cancelled</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="customer-info">
                          <img
                            src={userImage}
                            alt="Customer 2"
                            className="customer-image"
                          />
                          <span>Jane Smith</span>
                        </div>
                      </td>
                      <td>#5678</td>
                      <td>$30.00</td>
                      <td className="status pending">Pending</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="customer-info">
                          <img
                            src={userImage}
                            alt="Customer 2"
                            className="customer-image"
                          />
                          <span>Jane Smith</span>
                        </div>
                      </td>
                      <td>#5678</td>
                      <td>$30.00</td>
                      <td className="status pending">Pending</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="customer-info">
                          <img
                            src={userImage}
                            alt="Customer 2"
                            className="customer-image"
                          />
                          <span>Jane Smith</span>
                        </div>
                      </td>
                      <td>#5678</td>
                      <td>$30.00</td>
                      <td className="status pending">Pending</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="customer-info">
                          <img
                            src={userImage}
                            alt="Customer 2"
                            className="customer-image"
                          />
                          <span>Jane Smith</span>
                        </div>
                      </td>
                      <td>#5678</td>
                      <td>$30.00</td>
                      <td className="status pending">Pending</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="customer-feedback">
              <div className="customer-feedback-header">
                <h2>Customer Feedback</h2>
              </div>
              <div className="customer-feedback-container">
                <div className="feedback-list">
                  <div className="feedback-item">
                    <div className="feedback-header">
                      <img
                        src={userImage}
                        alt="John Doe"
                        className="user-image"
                      />
                      <p className="user-name">John Doe</p>
                    </div>
                    <div className="feedback-stars" data-rating="4"></div>
                    <p className="feedback-text">Great service!</p>
                  </div>
                  <div className="feedback-item">
                    <div className="feedback-header">
                      <img
                        src={userImage}
                        alt="Jane Smith"
                        className="user-image"
                      />
                      <p className="user-name">Jane Smith</p>
                    </div>
                    <div className="feedback-stars" data-rating="5"></div>
                    <p className="feedback-text">Excellent food!</p>
                  </div>
                  <div className="feedback-item">
                    <div className="feedback-header">
                      <img
                        src={userImage}
                        alt="John Doe"
                        className="user-image"
                      />
                      <p className="user-name">John Doe</p>
                    </div>
                    <div className="feedback-stars" data-rating="4"></div>
                    <p className="feedback-text">Great service!</p>
                  </div>
                  <div className="feedback-item">
                    <div className="feedback-header">
                      <img
                        src={userImage}
                        alt="John Doe"
                        className="user-image"
                      />
                      <p className="user-name">John Doe</p>
                    </div>
                    <div className="feedback-stars" data-rating="4"></div>
                    <p className="feedback-text">Great service!</p>
                  </div>
                  <div className="feedback-item">
                    <div className="feedback-header">
                      <img
                        src={userImage}
                        alt="John Doe"
                        className="user-image"
                      />
                      <p className="user-name">John Doe</p>
                    </div>
                    <div className="feedback-stars" data-rating="4"></div>
                    <p className="feedback-text">Great service!</p>
                  </div>
                  <div className="feedback-item">
                    <div className="feedback-header">
                      <img
                        src={userImage}
                        alt="John Doe"
                        className="user-image"
                      />
                      <p className="user-name">John Doe</p>
                    </div>
                    <div className="feedback-stars" data-rating="4"></div>
                    <p className="feedback-text">Great service!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
