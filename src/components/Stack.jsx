const Stack = () => {
  return (
    <div className="page-content">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="d-lg-flex align-items-center mb-4 gap-3">
                <div className="card-title">
                  <h5 style={{ fontWeight: "bold" }}>Stack</h5>
                </div>
                <div className="ms-auto">
                  <a
                    href="javascript:;"
                    className="btn btn-primary radius-30 mt-2 mt-lg-0"
                    data-bs-toggle="modal"
                    data-bs-target="#add_stack"
                  >
                    <i className="bx bxs-plus-square" />
                    Add New Stack
                  </a>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead className="table-light">
                    <tr>
                      <th className="text-center">Sr.No.</th>
                      <th className="text-center">Name</th>
                      <th className="text-center">Message</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">1</td>
                      <td className="text-center">Rakesh</td>
                      <td className="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod quia .
                      </td>
                      <td>
                        <div className="d-flex order-actions">
                          <a
                            href="javascript:;"
                            id="show"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#edit_stack"
                          >
                            <i className="bx bxs-edit" />
                          </a>
                          <a href="javascript:;" className="ms-3">
                            <i className="bx bxs-trash" />
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
      </div>
      {/*end row*/}
      {/* <div class="row"> */}
      {/* Modal for add stack*/}
      <div
        className="modal fade"
        id="add_stack"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                {" "}
                Add Stack
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {/* <div class="center hideform"> */}
              <div>
                <form className="row g-3">
                  <div className="col-12">
                    <label htmlFor="name" className="form-label">
                      {" "}
                      Name
                    </label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows={3}
                      defaultValue={""}
                    />
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
      {/* </div> */}
      {/* <div class="row"> */}
      {/* Modal for edit stack */}
      <div
        className="modal fade"
        id="edit_stack"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Stack Edit
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {/* <div class="center hideform"> */}
              <div>
                <form className="row g-3">
                  <div className="col-12">
                    <label htmlFor="name" className="form-label">
                      {" "}
                      Name
                    </label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows={3}
                      defaultValue={""}
                    />
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
      {/* </div> */}
    </div>
  );
};

export default Stack;
