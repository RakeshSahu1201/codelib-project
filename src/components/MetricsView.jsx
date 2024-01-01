const MetricsView = () => {
  return (
    <div className="page-content">
      {/* <div class="chat-wrapper"> */}
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div>
                <h5 className="card-title">Active Chats</h5>
              </div>
              <p className="card-text" style={{ fontSize: 20 }}>
                3
              </p>
              {/* <a href="javascript:;" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div>
                <h5 className="card-title">New Chats</h5>
              </div>
              <p className="card-text" style={{ fontSize: 20 }}>
                100
              </p>
              {/* <a href="javascript:;" class="btn btn-danger">Go somewhere</a> */}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div>
                <h5 className="card-title">Closed Chats</h5>
              </div>
              <p className="card-text" style={{ fontSize: 20 }}>
                52
              </p>
              {/* <a href="javascript:;" class="btn btn-success">Go somewhere</a> */}
            </div>
          </div>
        </div>
      </div>
      {/*start chat overlay*/}
      <div className="overlay chat-toggle-btn-mobile" />
      {/*end chat overlay*/}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default MetricsView;
