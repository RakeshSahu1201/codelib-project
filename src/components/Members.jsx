const Members = () => {
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
                  <h5 style={{ fontWeight: "bold" }}>Member Data</h5>
                </div>
                <div className="ms-auto">
                  <a
                    href="javascript:;"
                    className="btn btn-primary radius-30 mt-2 mt-lg-0"
                    data-bs-toggle="modal"
                    data-bs-target="#add_member"
                  >
                    <i className="bx bxs-plus-square" />
                    Add Member
                  </a>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead className="table-light">
                    <tr>
                      <th className="text-center">Sr.No.</th>
                      <th className="text-center">Name</th>
                      <th className="text-center">Email</th>
                      <th className="text-center">Profile</th>
                      <th className="text-center">Default Connection</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">1</td>
                      <td className="text-center">Rakesh</td>
                      <td className="text-center">rakesh@gmail.com</td>
                      <td className="text-center">user</td>
                      <td className="text-center">rakesh</td>
                      <td>
                        <div className="d-flex order-actions">
                          <a
                            href="javascript:;"
                            id="show"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#edit_member"
                          >
                            <i className="bx bxs-edit" />
                          </a>
                          <a href="javascript:;" className="ms-3">
                            <i className="bx bxs-trash" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">2</td>
                      <td className="text-center">Nitesh</td>
                      <td className="text-center">nitesh@gmail.com</td>
                      <td className="text-center">admin</td>
                      <td className="text-center">nitesh</td>
                      <td>
                        <div className="d-flex order-actions">
                          <a
                            href="javascript:;"
                            id="show"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#edit_member"
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
      {/* Modal for Add New Member */}
      <div
        className="modal fade"
        id="add_member"
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
                Add New Member
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
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
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="profile" className="form-label">
                      Profile
                    </label>
                    <select id="profile" className="form-select">
                      <option selected="">Choose...</option>
                      <option>user</option>
                      <option>admin</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="profile" className="form-label">
                      Stack
                    </label>
                    <select id="profile" className="form-select">
                      <option selected="">Choose..</option>
                      {/* <option>user</option>
												<option>admin</option> */}
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="profile" className="form-label">
                      Default Connection
                    </label>
                    <select id="profile" className="form-select">
                      <option selected="">Choose..</option>
                      {/* <option>user</option>
												<option>admin</option> */}
                    </select>
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
      {/* Modal for edit member */}
      <div
        className="modal fade"
        id="edit_member"
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
              <div>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      {" "}
                      Name
                    </label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  {/* <div class="col-md-6">
										  <label for="password" class="form-label">Password</label>
										  <input type="password" class="form-control" id="password">
									  </div> */}
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="profile" className="form-label">
                      Profile
                    </label>
                    <select id="profile" className="form-select">
                      <option selected="">Choose...</option>
                      <option>user</option>
                      <option>admin</option>
                    </select>
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
                    <label htmlFor="default" className="form-label">
                      Default Connection
                    </label>
                    <select id="default" className="form-select">
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

export default Members;
