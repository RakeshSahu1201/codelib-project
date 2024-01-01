const Relationships = () => {
  return (
    <div className="page-content">
      {/*breadcrumb*/}
      {/* <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
					<div class="breadcrumb-title pe-3">Tables</div>
					<div class="ps-3">
						<nav aria-label="breadcrumb">
							<ol class="breadcrumb mb-0 p-0">
								<li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
								</li>
								<li class="breadcrumb-item active" aria-current="page">Basic Table</li>
							</ol>
						</nav>
					</div>
					<div class="ms-auto">
						<div class="btn-group">
							<button type="button" class="btn btn-primary">Settings</button>
							<button type="button" class="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span class="visually-hidden">Toggle Dropdown</span>
							</button>
							<div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">	<a class="dropdown-item" href="javascript:;">Action</a>
								<a class="dropdown-item" href="javascript:;">Another action</a>
								<a class="dropdown-item" href="javascript:;">Something else here</a>
								<div class="dropdown-divider"></div>	<a class="dropdown-item" href="javascript:;">Separated link</a>
							</div>
						</div>
					</div>
				</div> */}
      {/*end breadcrumb*/}
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="d-lg-flex align-items-center mb-4 gap-3">
                <div className="card-title">
                  <h5 style={{ fontWeight: "bold" }}>Relationship</h5>
                </div>
                <div className="ms-auto">
                  <a
                    href="javascript:;"
                    className="btn btn-primary radius-30 mt-2 mt-lg-0"
                    data-bs-toggle="modal"
                    data-bs-target="#add_relationship"
                  >
                    <i className="bx bxs-plus-square" />
                    Add Whatsup
                  </a>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead className="table-light">
                    <tr>
                      <th className="text-center">Name</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Session</th>
                      <th className="text-center">Last Update</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">Rakesh</td>
                      <td className="text-center">ok</td>
                      <td className="text-center">
                        <div className="btn btn-outline-danger" disabled="">
                          Disconnect
                        </div>
                      </td>
                      <td className="text-center">ok</td>
                      <td>
                        <div className="d-flex order-actions">
                          <a
                            href="javascript:;"
                            id="show"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#edit_relationship"
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
      {/* Modal */}
      <div
        className="modal fade"
        id="add_relationship"
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
                Add Whatsup
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
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      {" "}
                      Name
                    </label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="status" className="form-label">
                      Status
                    </label>
                    <input type="text" className="form-control" id="status" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="session" className="form-label">
                      Session
                    </label>
                    <input type="text" className="form-control" id="session" />
                  </div>
                  {/* <div class="col-md-6">
											<label for="profile" class="form-label">Profile</label>
											<select id="profile" class="form-select">
												<option selected>Choose...</option>
												<option>user</option>
												<option>admin</option>
											</select>
										</div>
					
										<div class="col-12">
											<label for="profile" class="form-label">Stack</label>
											<select id="profile" class="form-select">
												<option selected>Choose..</option>												
											</select>
										</div>
					
										<div class="col-12">
											<label for="profile" class="form-label">Default Connection</label>
											<select id="profile" class="form-select">
												<option selected>Choose..</option>
											</select>
										</div> */}
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
        id="edit_relationship"
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
                Edit Whatsup
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
    </div>
  );
};

export default Relationships;
