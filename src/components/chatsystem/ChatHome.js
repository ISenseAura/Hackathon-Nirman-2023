let ChatHome = () => {
    return  (<main id="main" className="main" style={{marginTop:"0px"}}>
     
      <section className="section">
        <div className="row">
          <div className="col-lg-3">
          <div className="card">
        <div className="card-body">
          <h5 className="card-title">Chats <span style={{float:"right",borderRadius:"3px",padding:"3px",background:"lightgreen",marginLeft:"0px"}}> New Chat</span></h5>
          {/* List group with custom content */}
          <ol className="list-group list-group-numbered">
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
          </ol>{/* End with custom content */}
        </div>
      </div>
          </div>




          <div className="col-lg-8" style={{marginRight:"0px"}}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title "><b> Example Card</b></h5>
                <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>)
}

export default ChatHome;