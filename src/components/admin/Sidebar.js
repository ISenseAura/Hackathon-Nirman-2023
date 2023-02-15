import "./dashboard.css";
import { Outlet, Link } from "react-router-dom";

let Sidebar = () => {
    return  <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link " href="/admin">
            <i className="bi bi-grid" />
            <span>Dashboard</span>
          </a>
        </li>{/* End Dashboard Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-layout-text-window-reverse" /><span>Tables</span><i className="bi bi-chevron-down ms-auto" />
          </a>
          <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <a href="tables-general.js">
                <i className="bi bi-circle" /><span>General Tables</span>
              </a>
            </li>
            <li>
              <a href="tables-data.html">
                <i className="bi bi-circle" /><span>Data Tables</span>
              </a>
            </li>
          </ul>
        </li>{/* End Tables Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-bar-chart" /><span>Charts</span><i className="bi bi-chevron-down ms-auto" />
          </a>
          <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <a href="charts-chartjs.html">
                <i className="bi bi-circle" /><span>Chart.js</span>
              </a>
            </li>
            <li>
              <a href="charts-apexcharts.html">
                <i className="bi bi-circle" /><span>ApexCharts</span>
              </a>
            </li>
            <li>
              <a href="charts-echarts.html">
                <i className="bi bi-circle" /><span>ECharts</span>
              </a>
            </li>
          </ul>
        </li>{/* End Charts Nav */}
        <li className="nav-heading">Pages</li>
        <li className="nav-item">
        <Link className="nav-link collapsed" to="/AdminProfile">
            <i className="bi bi-person" />
            <span>Profile</span>
          </Link>
        </li>{/* End Profile Page Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-faq.html">
            <i className="bi bi-question-circle" />
            <span>F.A.Q</span>
          </a>
        </li>{/* End F.A.Q Page Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-contact.html">
            <i className="bi bi-envelope" />
            <span>Contact</span>
          </a>
        </li>{/* End Contact Page Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-register.html">
            <i className="bi bi-card-list" />
            <span>Register</span>
          </a>
        </li>{/* End Register Page Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-login.html">
            <i className="bi bi-box-arrow-in-right" />
            <span>Login</span>
          </a>
        </li>{/* End Login Page Nav */}
      </ul>
    </aside>
}

export default Sidebar;