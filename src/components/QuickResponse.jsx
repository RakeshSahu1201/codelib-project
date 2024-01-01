const QuickResponse = () => {
  return (
    <div className="page-content">
      <div className="card">
        <div className="card-body">
          <div className="d-lg-flex align-items-center mb-4 gap-3">
            {/* <div class="card-title">
								<h5 style="font-weight: bold;">Quick Response</h5>
							</div> */}
            <div className="position-relative">
              <input
                type="text"
                className="form-control ps-5 radius-30"
                placeholder="Search....."
              />{" "}
              <span className="position-absolute top-50 product-show translate-middle-y">
                <i className="bx bx-search" />
              </span>
            </div>
            <div className="ms-auto">
              <a
                href="javascript:;"
                className="btn btn-primary radius-30 mt-2 mt-lg-0"
                data-bs-toggle="modal"
                data-bs-target="#add_quick_responce"
              >
                <i className="bx bxs-plus-square" />
                Add Quick Responce
              </a>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table mb-0">
              <thead className="table-light">
                <tr>
                  <th className="text-center">Shortcut</th>
                  <th className="text-center">Quick Responce</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">Hello</td>
                  <td className="text-center">Hi,Sir how are you</td>
                  <td>
                    <div className="d-flex order-actions">
                      <a
                        href="javascript:;"
                        className=""
                        data-bs-toggle="modal"
                        data-bs-target="#edit_quick_responce"
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
      {/* <div class="row"> */}
      {/* Modal */}
      <div
        className="modal fade"
        id="add_quick_responce"
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
                Add Quick Responce
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
                {/* <h5>Edit Whatsup</h5> */}
                <form className="row g-3">
                  <div className="col-md-12">
                    <label htmlFor="shortcut" className="form-label">
                      {" "}
                      Shortcut
                    </label>
                    <input type="text" className="form-control" id="shortcut" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="quick_responce" className="form-label">
                      Quick Responce
                    </label>
                    <textarea
                      className="form-control"
                      id="quick_responce"
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
      {/* Modal */}
      <div
        className="modal fade"
        id="edit_quick_responce"
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
                Member Edit
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
                <h5>Edit Whatsup</h5>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      {" "}
                      Name
                    </label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="col-md-6">
                    <div className="form-check-danger form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckCheckedDanger"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckCheckedDanger"
                      >
                        Default
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    {/* <label for="message" class="form-label">Message</label> */}
                    <textarea
                      className="form-control"
                      id="message"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12">
                    {/* <label for="message" class="form-label">Message</label> */}
                    <textarea
                      className="form-control"
                      id="message"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="stack" className="form-label">
                      Stack
                    </label>
                    <select id="stack" className="form-select">
                      <option selected="">Rakesh</option>
                      {/* <option>user</option>
												<option>admin</option> */}
                    </select>
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

export default QuickResponse;
