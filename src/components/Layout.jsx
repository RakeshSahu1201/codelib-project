import { Link, useNavigate } from "react-router-dom";

const Layout = ({ Component }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        {/* <!--sidebar wrapper --> */}
        <div className="sidebar-wrapper" data-simplebar="true">
          <div className="sidebar-header">
            <div>
              <img
                src="assets/images/logo-icon.png"
                className="logo-icon"
                alt="logo icon"
              />
            </div>
            <div>
              <h4 className="logo-text">M-Chat</h4>
            </div>
            <div className="toggle-icon ms-auto">
              <i className="bx bx-first-page"></i>
            </div>
          </div>
          {/* <!--navigation--> */}
          <ul className="metismenu" id="menu">
            <li>
              <Link to="/metrics-view" className="has-arrow">
                <div className="parent-icon">
                  <i className="bx bx-home"></i>
                </div>
                <div
                  className="menu-title"
                  onClick={() => navigate("metricks_new")}
                >
                  Metrics View
                </div>
              </Link>
            </li>

            <li>
              <Link to="/relationship" className="has-arrow">
                <div className="parent-icon">
                  <i className="bx bx-broadcast"></i>
                </div>
                <div
                  className="menu-title"
                  onClick={() => navigate("relationship")}
                >
                  Relationships
                </div>
              </Link>
            </li>

            <li>
              <Link to="/chat" className="has-arrow">
                <div className="parent-icon">
                  <i className="bx bx-book"></i>
                </div>
                <div className="menu-title" onClick={() => navigate("chat")}>
                  Chat
                </div>
              </Link>
            </li>

            <li>
              <Link to="/associate" className="has-arrow">
                <div className="parent-icon">
                  <i className="bx bx-chart"></i>
                </div>
                <div
                  className="menu-title"
                  onClick={() => navigate("associate")}
                >
                  Associates
                </div>
              </Link>
            </li>

            <li>
              <Link to="/quick-response" className="has-arrow">
                <div className="parent-icon">
                  <i className="bx bx-comment"></i>
                </div>
                <div
                  className="menu-title"
                  onClick={() => navigate("quick-response")}
                >
                  Quick Responses
                </div>
              </Link>
            </li>

            <li className="menu-label">Admin</li>

            <li>
              <Link to="/member" className="has-arrow">
                <div className="parent-icon">
                  <i className="bx bx-user"></i>
                </div>
                <div className="menu-title" onClick={() => navigate("member")}>
                  Members
                </div>
              </Link>
            </li>

            <li>
              <Link to="/stack" className="has-arrow">
                <div className="parent-icon">
                  <i className="bx bx-cart-alt"></i>
                </div>
                <div className="menu-title" onClick={() => navigate("stack")}>
                  Stacks
                </div>
              </Link>
            </li>

            <li>
              <a className="has-arrow" href="#">
                <div className="parent-icon">
                  <i className="bx bx-gift"></i>
                </div>
                <div className="menu-title">Configurations</div>
              </a>
            </li>
            <li className="menu-label">Other</li>
            <li>
              <a href="#">
                <div className="parent-icon">
                  <i className="bx bx-headphone"></i>
                </div>
                <div className="menu-title">Support</div>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <div className="parent-icon">
                  <i className="bx bx-code"></i>
                </div>
                <div className="menu-title">version</div>
              </a>
            </li>
          </ul>
          {/* <!--end navigation--> */}
        </div>
        {/* <!--end sidebar wrapper --> */}
        {/* <!--start header --> */}
        <header>
          <div className="topbar d-flex align-items-center">
            <nav className="navbar navbar-expand gap-3">
              <div className="mobile-toggle-menu">
                <i className="bx bx-menu"></i>
              </div>
              <div className="top-menu-left d-none d-lg-block">
                <ul className="nav">
                  <h5>ChatCode...</h5>
                </ul>
              </div>
              <div className="search-bar flex-grow-1">
                <div className="position-relative search-bar-box">
                  <form>
                    <input
                      type="text"
                      className="form-control search-control"
                      autoFocus
                      placeholder="Type to search..."
                    />{" "}
                    <span className="position-absolute top-50 search-show translate-middle-y">
                      <i className="bx bx-search"></i>
                    </span>
                    <span className="position-absolute top-50 search-close translate-middle-y">
                      <i className="bx bx-x"></i>
                    </span>
                  </form>
                </div>
              </div>
              <div className="top-menu ms-auto">
                <ul className="navbar-nav align-items-center gap-1">
                  <li className="nav-item dropdown dropdown-large">
                    <a
                      className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {" "}
                      <span className="alert-count">7</span>
                      <i className="bx bx-bell"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="javascript:;">
                        <div className="msg-header">
                          <p className="msg-header-title">Notifications</p>
                          <p className="msg-header-clear ms-auto">
                            Marks all as read
                          </p>
                        </div>
                      </a>
                      <div className="header-notifications-list">
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-primary text-primary">
                              <i className="bx bx-group"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                New Customers
                                <span className="msg-time float-end">
                                  14 Sec ago
                                </span>
                              </h6>
                              <p className="msg-info">5 new user registered</p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-danger text-danger">
                              <i className="bx bx-cart-alt"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                New Orders{" "}
                                <span className="msg-time float-end">
                                  2 min ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                You have recived new orders
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-success text-success">
                              <i className="bx bx-file"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                24 PDF File
                                <span className="msg-time float-end">
                                  19 min ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                The pdf files generated
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-warning text-warning">
                              <i className="bx bx-send"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Time Response{" "}
                                <span className="msg-time float-end">
                                  28 min ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                5.1 min avarage time response
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-info text-info">
                              <i className="bx bx-home-circle"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                New Product Approved{" "}
                                <span className="msg-time float-end">
                                  2 hrs ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                Your new product has approved
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-danger text-danger">
                              <i className="bx bx-message-detail"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                New Comments{" "}
                                <span className="msg-time float-end">
                                  4 hrs ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                New customer comments recived
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-success text-success">
                              <i className="bx bx-check-square"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Your item is shipped{" "}
                                <span className="msg-time float-end">
                                  5 hrs ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                Successfully shipped your item
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-primary text-primary">
                              <i className="bx bx-user-pin"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                New 24 authors
                                <span className="msg-time float-end">
                                  1 day ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                24 new authors joined last week
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-warning text-warning">
                              <i className="bx bx-door-open"></i>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Defense Alerts{" "}
                                <span className="msg-time float-end">
                                  2 weeks ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                45% less alerts last 4 weeks
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <a href="javascript:;">
                        <div className="text-center msg-footer">
                          View All Notifications
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown dropdown-large">
                    <a
                      className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {" "}
                      <span className="alert-count">8</span>
                      <i className="bx bx-comment"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="javascript:;">
                        <div className="msg-header">
                          <p className="msg-header-title">Messages</p>
                          <p className="msg-header-clear ms-auto">
                            Marks all as read
                          </p>
                        </div>
                      </a>
                      <div className="header-message-list">
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-1.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Daisy Anderson{" "}
                                <span className="msg-time float-end">
                                  5 sec ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                The standard chunk of lorem
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-2.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Althea Cabardo{" "}
                                <span className="msg-time float-end">
                                  14 sec ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                Many desktop publishing packages
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-3.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Oscar Garner{" "}
                                <span className="msg-time float-end">
                                  8 min ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                Various versions have evolved over
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-4.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Katherine Pechon{" "}
                                <span className="msg-time float-end">
                                  15 min ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                Making this the first true generator
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-5.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Amelia Doe{" "}
                                <span className="msg-time float-end">
                                  22 min ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                Duis aute irure dolor in reprehenderit
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-6.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Cristina Jhons{" "}
                                <span className="msg-time float-end">
                                  2 hrs ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                The passage is attributed to an unknown
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-7.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                James Caviness{" "}
                                <span className="msg-time float-end">
                                  4 hrs ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                The point of using Lorem
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-8.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Peter Costanzo{" "}
                                <span className="msg-time float-end">
                                  6 hrs ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                It was popularised in the 1960s
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-9.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                David Buckley{" "}
                                <span className="msg-time float-end">
                                  2 hrs ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                Various versions have evolved over
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-10.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Thomas Wheeler{" "}
                                <span className="msg-time float-end">
                                  2 days ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                If you are going to use a passage
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-11.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Johnny Seitz{" "}
                                <span className="msg-time float-end">
                                  5 days ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                All the Lorem Ipsum generators
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <a href="javascript:;">
                        <div className="text-center msg-footer">
                          View All Messages
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="user-box dropdown px-3">
                <a
                  className="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="data:image/png;base64,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"
                    className="user-img"
                    alt="user avatar"
                  />
                  <div className="user-info ps-3">
                    <p className="user-name mb-0">Shri Ganesh</p>
                    <p className="designattion mb-0">Web Designer</p>
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="javascript:;">
                      <i className="bx bx-user"></i>
                      <span>Profile</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:;">
                      <i className="bx bx-cog"></i>
                      <span>Settings</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:;">
                      <i className="bx bx-home-circle"></i>
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:;">
                      <i className="bx bx-dollar-circle"></i>
                      <span>Earnings</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:;">
                      <i className="bx bx-download"></i>
                      <span>Downloads</span>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider mb-0"></div>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:;">
                      <i className="bx bx-log-out-circle"></i>
                      <span>Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        {/* <!--end header --> */}
        {/* <!--start page wrapper --> */}
        <div className="page-wrapper" style={{ width: "100%" }}>
          <Component />
          {/* <!-- </div> --> */}
        </div>
        {/* <!-- start chat overlay --> */}
        <div className="overlay chat-toggle-btn-mobile"></div>
        {/* <!--end chat overlay--> */}
        {/* <!--end page wrapper --> */}
        {/* <!--start overlay--> */}
        <div className="overlay toggle-icon"></div>
        {/* <!--end overlay--> */}
        {/* <!--Start Back To Top Button--> <a href="javaScript:;" className="back-to-top"><i
                    className='bx bxs-up-arrow-alt'></i></a>
            <!--End Back To Top Button--> */}
        <footer className="page-footer">
          <p className="mb-0">Copyright © 2021. All right reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
