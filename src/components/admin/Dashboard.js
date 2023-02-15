import './dashboard.css'

let Dashboard = () => {
    return    <main id="main" className="main">
  
    <section className="section">
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">This Week </h5>
              {/* Default List group */}
              <ul className="list-group">
                <li className="list-group-item"><big>15</big> -  No event</li>
                <li className="list-group-item"><big>16</big> -  No event</li>
                <li className="list-group-item"><big>17</big> -  No event</li>
                <li className="list-group-item"><big>18</big> -  No event</li>
                <li className="list-group-item"><big>19</big> -  No event</li>
                <li className="list-group-item"><big>20</big> -  No event</li>
                <li className="list-group-item"><big>21</big> -  No event</li>
              </ul>{/* End Default List group */}
            </div>
          </div>
        </div></div></section></main>
}

export default Dashboard;