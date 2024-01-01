const Chat = () => {
  return (
    <div className="page-content">
      {/* <!-- <div className="chat-wrapper"> --> */}
      <div className="chat-wrapper">
        <div className="chat-sidebar">
          <div className="chat-sidebar-header">
            <div className="mb-3"></div>
            <div className="input-group input-group-sm">
              {" "}
              <span className="input-group-text bg-transparent">
                <i className="bx bx-search"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="People, groups, & messages"
              />{" "}
              <span className="input-group-text bg-transparent">
                <i className="bx bx-dialpad"></i>
              </span>
            </div>
            <div className="chat-tab-menu mt-3">
              <ul
                className="nav nav-pills  mb-3 d-flex justify-content-around"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    data-bs-toggle="pill"
                    href="#warning-pills-inbox"
                    role="tab"
                    aria-selected="true"
                  >
                    <div className="d-flex align-items-center">
                      <div className="tab-title">
                        <button
                          type="button"
                          className="btn btn-primary position-relative"
                        >
                          Inbox
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            99+
                          </span>
                        </button>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    data-bs-toggle="pill"
                    href="#warning-pills-closed"
                    role="tab"
                    aria-selected="true"
                  >
                    <div className="d-flex align-items-center">
                      <div className="tab-title">
                        <button
                          type="button"
                          className="btn btn-primary position-relative"
                        >
                          Closed
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            55+
                          </span>
                        </button>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <hr />
              <ul
                className="nav nav-pills  mb-3 d-flex justify-content-around"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    data-bs-toggle="pill"
                    href="#warning-pills-new"
                    role="tab"
                    aria-selected="false"
                  >
                    <div className="d-flex align-items-center">
                      <button
                        type="button"
                        className="btn btn-outline-danger position-relative"
                      >
                        New
                        {/* <!-- <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-black">
                                                          88+
                                                         
                                                        </span> --> */}
                      </button>
                      {/* <!-- <div className="position-relative">
                                                        <div className="tab-title">
                                                            New
                                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-black">
                                                              88+
                                                            </span>
                                                        </div>
                                                       
                                                      </div> --> */}
                    </div>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    data-bs-toggle="pill"
                    href="#warning-pills-all"
                    role="tab"
                    aria-selected="false"
                  >
                    <div className="d-flex align-items-center">
                      {/* <!-- <div className="tab-icon"><i className='bx bxs-comment font-18 me-1'></i>
                                                </div> --> */}

                      <button
                        type="button"
                        className="btn btn-outline-danger position-relative"
                      >
                        {/* <!-- <div className="form-check-danger form-check form-switch">
                                                        <input className="form-check-input" type="checkbox"
                                                            id="flexSwitchCheckCheckedDanger" checked>
                                                        <label className="form-check-label" for="flexSwitchCheckCheckedDanger">
                                                            All
                                                        </label>
                                                    </div> --> */}
                        All
                      </button>
                    </div>
                  </a>
                </li>

                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    data-bs-toggle="pill"
                    href="#warning-pills-stack"
                    role="tab"
                    aria-selected="false"
                  >
                    <div className="d-flex align-items-center">
                      {/* <!-- <div className="tab-icon"><i className='bx bxs-comment font-18 me-1'></i>
                                                </div> --> */}
                      <button
                        type="button"
                        className="btn btn-outline-danger position-relative"
                      >
                        Stack
                        {/* <!-- <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-black">
                                                      88+
                                                     
                                                    </span> --> */}
                      </button>
                    </div>
                  </a>
                </li>
              </ul>
              <hr />
            </div>

            <div className="chat-sidebar-content">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="warning-pills-inbox"
                  role="tabpanel"
                >
                  <ul
                    className="nav nav-pills nav-pills-success mb-3 d-flex justify-content-around"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        data-bs-toggle="pill"
                        href="#pills-active-chat"
                        role="tab"
                        aria-selected="false"
                      >
                        <div className="d-flex align-items-center">
                          <div className="tab-icon">
                            <i className="bx bxs-inbox font-18 me-1"></i>
                          </div>
                          <div className="tab-title">Active Chat</div>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        data-bs-toggle="pill"
                        href="#pills-new-chat"
                        role="tab"
                        aria-selected="false"
                      >
                        <div className="d-flex align-items-center">
                          <div className="tab-icon">
                            <i className="bx bxs-comment font-18 me-1"></i>
                          </div>
                          <div className="tab-title">New Chat</div>
                        </div>
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="pills-active-chat"
                      role="tabpanel"
                    >
                      <div id="messages">
                        <div className="chat-list message">
                          <div
                            className="list-group list-group-flush nav-item"
                            id=""
                          >
                            <a href="#" className="list-group-item nav-link">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-2.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Anup</h6>
                                  <p className="mb-0 chat-msg">
                                    You just got LITT up, Mike.
                                  </p>
                                </div>
                                <div className="chat-time">9:51 AM</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-3.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Kamlesh</h6>
                                  <p className="mb-0 chat-msg">
                                    Wrong. You take the gun....
                                  </p>
                                </div>
                                <div className="chat-time">4:32 PM</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-4.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Ghanshyam</h6>
                                  <p className="mb-0 chat-msg">
                                    I was thinking that we could...
                                  </p>
                                </div>
                                <div className="chat-time">Wed</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-5.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Ashutosh</h6>
                                  <p className="mb-0 chat-msg">
                                    Mike, I know everything!
                                  </p>
                                </div>
                                <div className="chat-time">Tue</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-6.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Sonia mem</h6>
                                  <p className="mb-0 chat-msg">
                                    Have you finished the draft...
                                  </p>
                                </div>
                                <div className="chat-time">9/3/2020</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-7.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Radhe</h6>
                                  <p className="mb-0 chat-msg">
                                    Thanks Mike! :
                                  </p>
                                </div>
                                <div className="chat-time">12/3/2020</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-7.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Radhe</h6>
                                  <p className="mb-0 chat-msg">
                                    Thanks Mike! :
                                  </p>
                                </div>
                                <div className="chat-time">12/3/2020</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-7.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Radhe</h6>
                                  <p className="mb-0 chat-msg">
                                    Thanks Mike! :
                                  </p>
                                </div>
                                <div className="chat-time">12/3/2020</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-7.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Radhe</h6>
                                  <p className="mb-0 chat-msg">
                                    Thanks Mike! :
                                  </p>
                                </div>
                                <div className="chat-time">12/3/2020</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-7.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Billo</h6>
                                  <p className="mb-0 chat-msg">
                                    Thanks Mike! :
                                  </p>
                                </div>
                                <div className="chat-time">12/3/2020</div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="pills-new-chat"
                      role="tabpanel"
                    >
                      <div id="messages">
                        <div className="chat-list">
                          <div
                            className="list-group list-group-flush nav-item"
                            id=""
                          >
                            <a href="#" className="list-group-item nav-link">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-2.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Anup</h6>
                                  <p className="mb-0 chat-msg">
                                    You just got LITT up, Mike.
                                  </p>
                                </div>
                                <div className="chat-time">9:51 AM</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-3.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Kamlesh</h6>
                                  <p className="mb-0 chat-msg">
                                    Wrong. You take the gun....
                                  </p>
                                </div>
                                <div className="chat-time">4:32 PM</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-4.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Ghanshyam</h6>
                                  <p className="mb-0 chat-msg">
                                    I was thinking that we could...
                                  </p>
                                </div>
                                <div className="chat-time">Wed</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-5.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Ashutosh</h6>
                                  <p className="mb-0 chat-msg">
                                    Mike, I know everything!
                                  </p>
                                </div>
                                <div className="chat-time">Tue</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-6.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Sonia mem</h6>
                                  <p className="mb-0 chat-msg">
                                    Have you finished the draft...
                                  </p>
                                </div>
                                <div className="chat-time">9/3/2020</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-7.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Radhe</h6>
                                  <p className="mb-0 chat-msg">
                                    Thanks Mike! :
                                  </p>
                                </div>
                                <div className="chat-time">12/3/2020</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-7.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Radhe</h6>
                                  <p className="mb-0 chat-msg">
                                    Thanks Mike! :
                                  </p>
                                </div>
                                <div className="chat-time">12/3/2020</div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade show active"
                  id="warning-pills-closed"
                  role="tabpanel"
                >
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="pills-closed-chat"
                      role="tabpanel"
                    >
                      <h6 className="mb-0 text-uppercase">Closed Chat</h6>
                      <hr />
                      <div id="messages">
                        <div className="chat-list">
                          <div
                            className="list-group list-group-flush nav-item"
                            id=""
                          >
                            <a href="#" className="list-group-item nav-link">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-2.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Anup</h6>
                                  <p className="mb-0 chat-msg">
                                    You just got LITT up, Mike.
                                  </p>
                                </div>
                                <div className="chat-time">9:51 AM</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-3.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Kamlesh</h6>
                                  <p className="mb-0 chat-msg">
                                    Wrong. You take the gun....
                                  </p>
                                </div>
                                <div className="chat-time">4:32 PM</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-4.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Ghanshyam</h6>
                                  <p className="mb-0 chat-msg">
                                    I was thinking that we could...
                                  </p>
                                </div>
                                <div className="chat-time">Wed</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-5.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Ashutosh</h6>
                                  <p className="mb-0 chat-msg">
                                    Mike, I know everything!
                                  </p>
                                </div>
                                <div className="chat-time">Tue</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-6.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Sonia mem</h6>
                                  <p className="mb-0 chat-msg">
                                    Have you finished the draft...
                                  </p>
                                </div>
                                <div className="chat-time">9/3/2020</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-7.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Radhe</h6>
                                  <p className="mb-0 chat-msg">
                                    Thanks Mike! :
                                  </p>
                                </div>
                                <div className="chat-time">12/3/2020</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-7.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Radhe</h6>
                                  <p className="mb-0 chat-msg">
                                    Thanks Mike! :
                                  </p>
                                </div>
                                <div className="chat-time">12/3/2020</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-7.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Radhe</h6>
                                  <p className="mb-0 chat-msg">
                                    Thanks Mike! :
                                  </p>
                                </div>
                                <div className="chat-time">12/3/2020</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-7.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Radhe</h6>
                                  <p className="mb-0 chat-msg">
                                    Thanks Mike! :
                                  </p>
                                </div>
                                <div className="chat-time">12/3/2020</div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item">
                              <div className="d-flex">
                                <div className="chat-user-online">
                                  <img
                                    src="assets/images/avatars/avatar-7.png"
                                    width="42"
                                    height="42"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0 chat-title">Manoj</h6>
                                  <p className="mb-0 chat-msg">
                                    Thanks Mike! :
                                  </p>
                                </div>
                                <div className="chat-time">12/3/2020</div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="chat-header d-flex align-items-center">
          <div className="chat-toggle-btn">
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <div>
            <h4 className="mb-1 font-weight-bold">Anup</h4>
            <div className="list-inline d-sm-flex mb-0 d-none">
              {" "}
              <a
                href="javascript:;"
                className="list-inline-item d-flex align-items-center text-secondary"
              >
                <small className="bx bxs-circle me-1 chart-online"></small>
                Active Now
              </a>
              <a
                href="javascript:;"
                className="list-inline-item d-flex align-items-center text-secondary"
              >
                |
              </a>
              <a
                href="javascript:;"
                className="list-inline-item d-flex align-items-center text-secondary"
              >
                <i className="bx bx-images me-1"></i>Gallery
              </a>
              <a
                href="javascript:;"
                className="list-inline-item d-flex align-items-center text-secondary"
              >
                |
              </a>
              <a
                href="javascript:;"
                className="list-inline-item d-flex align-items-center text-secondary"
              >
                <i className="bx bx-search me-1"></i>Find
              </a>
            </div>
          </div>
          <div className="chat-top-header-menu ms-auto">
            <a href="javascript:;">
              <i className="bx bx-video"></i>
            </a>
            <a href="javascript:;">
              <i className="bx bx-phone"></i>
            </a>
            <a href="javascript:;">
              <i className="bx bx-user-plus"></i>
            </a>
          </div>
          <div className="dropdown">
            <div
              className="cursor-pointer font-24 dropdown-toggle dropdown-toggle-nocaret"
              data-bs-toggle="dropdown"
            >
              <i className="bx bx-dots-horizontal-rounded"></i>
            </div>
            <div className="dropdown-menu dropdown-menu-end">
              {" "}
              <a className="dropdown-item" href="javascript:;">
                Settings
              </a>
              <div className="dropdown-divider"></div>{" "}
              <a className="dropdown-item" href="javascript:;">
                Help & Feedback
              </a>
              <a className="dropdown-item" href="javascript:;">
                Enable Split View Mode
              </a>
              <a className="dropdown-item" href="javascript:;">
                Keyboard Shortcuts
              </a>
              <div className="dropdown-divider"></div>{" "}
              <a className="dropdown-item" href="javascript:;">
                Sign Out
              </a>
            </div>
          </div>
        </div>
        <div
          className="chat-content"
          style={{ overflowY: "auto", maxHeight: "500px" }}
        >
          <div className="chat-content-leftside">
            <div className="d-flex">
              <img
                src="assets/images/avatars/avatar-3.png"
                width="48"
                height="48"
                className="rounded-circle"
                alt=""
              />
              <div className="flex-grow-1 ms-2">
                <p className="mb-0 chat-time">Harvey, 2:35 PM</p>
                <p className="chat-left-msg">
                  Hi, harvey where are you now a days?
                </p>
              </div>
            </div>
          </div>
          <div className="chat-content-rightside">
            <div className="d-flex ms-auto">
              <div className="flex-grow-1 me-2">
                <p className="mb-0 chat-time text-end">you, 2:37 PM</p>
                <p className="chat-right-msg">I am in USA</p>
              </div>
            </div>
          </div>
          <div className="chat-content-leftside">
            <div className="d-flex">
              <img
                src="assets/images/avatars/avatar-3.png"
                width="48"
                height="48"
                className="rounded-circle"
                alt=""
              />
              <div className="flex-grow-1 ms-2">
                <p className="mb-0 chat-time">Harvey, 2:48 PM</p>
                <p className="chat-left-msg">okk, what about admin template?</p>
              </div>
            </div>
          </div>
          <div className="chat-content-rightside">
            <div className="d-flex">
              <div className="flex-grow-1 me-2">
                <p className="mb-0 chat-time text-end">you, 2:49 PM</p>
                <p className="chat-right-msg">
                  i have already purchased the admin template
                </p>
              </div>
            </div>
          </div>
          <div className="chat-content-leftside">
            <div className="d-flex">
              <img
                src="assets/images/avatars/avatar-3.png"
                width="48"
                height="48"
                className="rounded-circle"
                alt=""
              />
              <div className="flex-grow-1 ms-2">
                <p className="mb-0 chat-time">Harvey, 3:12 PM</p>
                <p className="chat-left-msg">
                  ohhk, great, which admin template you have purchased?
                </p>
              </div>
            </div>
          </div>
          <div className="chat-content-rightside">
            <div className="d-flex">
              <div className="flex-grow-1 me-2">
                <p className="mb-0 chat-time text-end">you, 3:14 PM</p>
                <p className="chat-right-msg">
                  i purchased dashtreme admin template from themeforest. it is
                  very good product for web application
                </p>
              </div>
            </div>
          </div>
          <div className="chat-content-leftside">
            <div className="d-flex">
              <img
                src="assets/images/avatars/avatar-3.png"
                width="48"
                height="48"
                className="rounded-circle"
                alt=""
              />
              <div className="flex-grow-1 ms-2">
                <p className="mb-0 chat-time">Harvey, 3:16 PM</p>
                <p className="chat-left-msg">
                  who is the author of this template?
                </p>
              </div>
            </div>
          </div>
          <div className="chat-content-rightside">
            <div className="d-flex">
              <div className="flex-grow-1 me-2">
                <p className="mb-0 chat-time text-end">you, 3:22 PM</p>
                <p className="chat-right-msg">
                  codervent is the author of this admin template
                </p>
              </div>
            </div>
          </div>
          <div className="chat-content-leftside">
            <div className="d-flex">
              <img
                src="assets/images/avatars/avatar-3.png"
                width="48"
                height="48"
                className="rounded-circle"
                alt=""
              />
              <div className="flex-grow-1 ms-2">
                <p className="mb-0 chat-time">Harvey, 3:16 PM</p>
                <p className="chat-left-msg">
                  ohh i know about this author. he has good admin products in
                  his portfolio.
                </p>
              </div>
            </div>
          </div>
          <div className="chat-content-rightside">
            <div className="d-flex">
              <div className="flex-grow-1 me-2">
                <p className="mb-0 chat-time text-end">you, 3:30 PM</p>
                <p className="chat-right-msg">
                  yes, codervent has multiple admin templates. also he is very
                  supportive.
                </p>
              </div>
            </div>
          </div>
          <div className="chat-content-leftside">
            <div className="d-flex">
              <img
                src="assets/images/avatars/avatar-3.png"
                width="48"
                height="48"
                className="rounded-circle"
                alt=""
              />
              <div className="flex-grow-1 ms-2">
                <p className="mb-0 chat-time">Harvey, 3:33 PM</p>
                <p className="chat-left-msg">
                  All the best for your target. thanks for giving your time.
                </p>
              </div>
            </div>
          </div>
          <div className="chat-content-rightside">
            <div className="d-flex">
              <div className="flex-grow-1 me-2">
                <p className="mb-0 chat-time text-end">you, 3:35 PM</p>
                <p className="chat-right-msg">thanks Harvey</p>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-footer d-flex align-items-center">
          <div className="flex-grow-1 pe-2">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bx bx-smile"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Type a message"
              />
            </div>
          </div>
          <div className="chat-footer-menu">
            <a href="javascript:;">
              <i className="bx bxs-chevron-right"></i>
            </a>

            {/* <!-- <a href="javascript:;"><i className='bx bx-file'></i></a>
                    <a href="javascript:;"><i className='bx bxs-contact'></i></a>
                    <a href="javascript:;"><i className='bx bx-microphone'></i></a>
                    <a href="javascript:;"><i className='bx bx-dots-horizontal-rounded'></i></a> --> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat;
