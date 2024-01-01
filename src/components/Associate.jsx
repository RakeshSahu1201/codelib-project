const Associate = () => {
  return (
    <div className="page-content">
      {/* <!-- <div className="chat-wrapper"> --> */}
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="d-lg-flex align-items-center mb-4 gap-3">
                <div className="card-title">
                  <h5 style={{ "font-weight": "bold" }}>Associate</h5>
                </div>

                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control ps-5 radius-30"
                    placeholder="Search....."
                  />{" "}
                  <span className="position-absolute top-50 product-show translate-middle-y">
                    <i className="bx bx-search"></i>
                  </span>
                </div>
                <div className="ms-auto">
                  <a
                    href="javascript:;"
                    className="btn btn-primary radius-30 mt-2 mt-lg-0"
                    data-bs-toggle="modal"
                    data-bs-target="#import_contact"
                  >
                    <i className="bx bxs-plus-square"></i>Import Contact
                  </a>
                </div>
                <div>
                  <a
                    href="javascript:;"
                    className="btn btn-primary radius-30 mt-2 mt-lg-0"
                    data-bs-toggle="modal"
                    data-bs-target="#add_contact"
                  >
                    <i className="bx bxs-plus-square"></i>Add Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="text-center">Name</th>
                    <th className="text-center">Whatsup</th>
                    <th className="text-center">Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">Rakesh</td>
                    <td className="text-center">7985663251</td>
                    <td className="text-center">rakesh@gmail.com</td>

                    <td>
                      <div className="d-flex order-actions">
                        <a
                          href="javascript:;"
                          id="show"
                          className=""
                          data-bs-toggle="modal"
                          data-bs-target="#associate_edit"
                        >
                          <i className="bx bxs-edit"></i>
                        </a>
                        <a href="javascript:;" className="ms-3">
                          <i className="bx bxs-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center">Nitesh</td>
                    <td className="text-center">8563255562</td>
                    <td className="text-center">nitesh@gmail.com</td>

                    <td>
                      <div className="d-flex order-actions">
                        <a
                          href="javascript:;"
                          id="show"
                          className=""
                          data-bs-toggle="modal"
                          data-bs-target="#associate_edit"
                        >
                          <i className="bx bxs-edit"></i>
                        </a>
                        <a href="javascript:;" className="ms-3">
                          <i className="bx bxs-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- <div className="row"> -->				 */}
      {/* <!-- Modal for Add Contact --> */}
      <div
        className="modal fade"
        id="add_contact"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                {" "}
                Add Contact
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="Name" className="form-label">
                      {" "}
                      Name
                    </label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="Whatsup" className="form-label">
                      Whatsup
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="Whatsup"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="email" className="form-control" id="email" />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-success px-5">
                      Add
                    </button>
                    <button className="btn btn-outline-danger px-5" id="close">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal for Import Contact--> */}
      <div
        className="modal fade"
        id="import_contact"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Import Contact
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="Name" className="form-label">
                      {" "}
                      Name
                    </label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="Whatsup" className="form-label">
                      Whatsup
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="Whatsup"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="email" className="form-control" id="email" />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-success px-5">
                      Import
                    </button>
                    <button className="btn btn-outline-danger px-5" id="close">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal for associate update--> */}
      <div
        className="modal fade"
        id="associate_edit"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Update Contact
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="Name" className="form-label">
                      {" "}
                      Name
                    </label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="Whatsup" className="form-label">
                      Whatsup
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="Whatsup"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="email" className="form-control" id="email" />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-success px-5">
                      Update
                    </button>
                    <button className="btn btn-outline-danger px-5" id="close">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Associate;
