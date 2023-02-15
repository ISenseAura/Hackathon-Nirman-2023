var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>Tables / General - NiceAdmin Bootstrap Template</title>
          <meta content name="description" />
          <meta content name="keywords" />
          {/* Favicons */}
          <link href="assets/img/favicon.png" rel="icon" />
          <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
          {/* Google Fonts */}
          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
          {/* Vendor CSS Files */}
          <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
          <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
          <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
          <link href="assets/vendor/quill/quill.snow.css" rel="stylesheet" />
          <link href="assets/vendor/quill/quill.bubble.css" rel="stylesheet" />
          <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
          <link href="assets/vendor/simple-datatables/style.css" rel="stylesheet" />
          {/* Template Main CSS File */}
          <link href="dashboard.css" rel="stylesheet" />
          {/* =======================================================
    * Template Name: NiceAdmin - v2.5.0
    * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
    * Author: BootstrapMade.com
    * License: https://bootstrapmade.com/license/
    ======================================================== */}
          {/* ======= Header ======= */}
          <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
              <a href="index.html" className="logo d-flex align-items-center">
                <img src="assets/img/logo.png" alt="" />
                <span className="d-none d-lg-block">NiceAdmin</span>
              </a>
              <i className="bi bi-list toggle-sidebar-btn" />
            </div>{/* End Logo */}
            <div className="search-bar">
              <form className="search-form d-flex align-items-center" method="POST" action="#">
                <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                <button type="submit" title="Search"><i className="bi bi-search" /></button>
              </form>
            </div>{/* End Search Bar */}
            <nav className="header-nav ms-auto">
              <ul className="d-flex align-items-center">
                <li className="nav-item d-block d-lg-none">
                  <a className="nav-link nav-icon search-bar-toggle " href="#">
                    <i className="bi bi-search" />
                  </a>
                </li>{/* End Search Icon*/}
                <li className="nav-item dropdown">
                  <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-bell" />
                    <span className="badge bg-primary badge-number">4</span>
                  </a>{/* End Notification Icon */}
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                    <li className="dropdown-header">
                      You have 4 new notifications
                      <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="notification-item">
                      <i className="bi bi-exclamation-circle text-warning" />
                      <div>
                        <h4>Lorem Ipsum</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>30 min. ago</p>
                      </div>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="notification-item">
                      <i className="bi bi-x-circle text-danger" />
                      <div>
                        <h4>Atque rerum nesciunt</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>1 hr. ago</p>
                      </div>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="notification-item">
                      <i className="bi bi-check-circle text-success" />
                      <div>
                        <h4>Sit rerum fuga</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>2 hrs. ago</p>
                      </div>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="notification-item">
                      <i className="bi bi-info-circle text-primary" />
                      <div>
                        <h4>Dicta reprehenderit</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>4 hrs. ago</p>
                      </div>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="dropdown-footer">
                      <a href="#">Show all notifications</a>
                    </li>
                  </ul>{/* End Notification Dropdown Items */}
                </li>{/* End Notification Nav */}
                <li className="nav-item dropdown">
                  <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-chat-left-text" />
                    <span className="badge bg-success badge-number">3</span>
                  </a>{/* End Messages Icon */}
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                    <li className="dropdown-header">
                      You have 3 new messages
                      <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="message-item">
                      <a href="#">
                        <img src="assets/img/messages-1.jpg" alt="" className="rounded-circle" />
                        <div>
                          <h4>Maria Hudson</h4>
                          <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                          <p>4 hrs. ago</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="message-item">
                      <a href="#">
                        <img src="assets/img/messages-2.jpg" alt="" className="rounded-circle" />
                        <div>
                          <h4>Anna Nelson</h4>
                          <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                          <p>6 hrs. ago</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="message-item">
                      <a href="#">
                        <img src="assets/img/messages-3.jpg" alt="" className="rounded-circle" />
                        <div>
                          <h4>David Muldon</h4>
                          <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                          <p>8 hrs. ago</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="dropdown-footer">
                      <a href="#">Show all messages</a>
                    </li>
                  </ul>{/* End Messages Dropdown Items */}
                </li>{/* End Messages Nav */}
                <li className="nav-item dropdown pe-3">
                  <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                    <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                    <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                  </a>{/* End Profile Iamge Icon */}
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li className="dropdown-header">
                      <h6>Kevin Anderson</h6>
                      <span>Web Designer</span>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                        <i className="bi bi-person" />
                        <span>My Profile</span>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                        <i className="bi bi-gear" />
                        <span>Account Settings</span>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                        <i className="bi bi-question-circle" />
                        <span>Need Help?</span>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item d-flex align-items-center" href="#">
                        <i className="bi bi-box-arrow-right" />
                        <span>Sign Out</span>
                      </a>
                    </li>
                  </ul>{/* End Profile Dropdown Items */}
                </li>{/* End Profile Nav */}
              </ul>
            </nav>{/* End Icons Navigation */}
          </header>{/* End Header */}
          {/* ======= Sidebar ======= */}
          <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
              <li className="nav-item">
                <a className="nav-link collapsed" href="index.html">
                  <i className="bi bi-grid" />
                  <span>Dashboard</span>
                </a>
              </li>{/* End Dashboard Nav */}
              <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                  <i className="bi bi-menu-button-wide" /><span>Components</span><i className="bi bi-chevron-down ms-auto" />
                </a>
                <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li>
                    <a href="components-alerts.html">
                      <i className="bi bi-circle" /><span>Alerts</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-accordion.html">
                      <i className="bi bi-circle" /><span>Accordion</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-badges.html">
                      <i className="bi bi-circle" /><span>Badges</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-breadcrumbs.html">
                      <i className="bi bi-circle" /><span>Breadcrumbs</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-buttons.html">
                      <i className="bi bi-circle" /><span>Buttons</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-cards.html">
                      <i className="bi bi-circle" /><span>Cards</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-carousel.html">
                      <i className="bi bi-circle" /><span>Carousel</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-list-group.html">
                      <i className="bi bi-circle" /><span>List group</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-modal.html">
                      <i className="bi bi-circle" /><span>Modal</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-tabs.html">
                      <i className="bi bi-circle" /><span>Tabs</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-pagination.html">
                      <i className="bi bi-circle" /><span>Pagination</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-progress.html">
                      <i className="bi bi-circle" /><span>Progress</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-spinners.html">
                      <i className="bi bi-circle" /><span>Spinners</span>
                    </a>
                  </li>
                  <li>
                    <a href="components-tooltips.html">
                      <i className="bi bi-circle" /><span>Tooltips</span>
                    </a>
                  </li>
                </ul>
              </li>{/* End Components Nav */}
              <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                  <i className="bi bi-journal-text" /><span>Forms</span><i className="bi bi-chevron-down ms-auto" />
                </a>
                <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li>
                    <a href="forms-elements.html">
                      <i className="bi bi-circle" /><span>Form Elements</span>
                    </a>
                  </li>
                  <li>
                    <a href="forms-layouts.html">
                      <i className="bi bi-circle" /><span>Form Layouts</span>
                    </a>
                  </li>
                  <li>
                    <a href="forms-editors.html">
                      <i className="bi bi-circle" /><span>Form Editors</span>
                    </a>
                  </li>
                  <li>
                    <a href="forms-validation.html">
                      <i className="bi bi-circle" /><span>Form Validation</span>
                    </a>
                  </li>
                </ul>
              </li>{/* End Forms Nav */}
              <li className="nav-item">
                <a className="nav-link " data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                  <i className="bi bi-layout-text-window-reverse" /><span>Tables</span><i className="bi bi-chevron-down ms-auto" />
                </a>
                <ul id="tables-nav" className="nav-content collapse show" data-bs-parent="#sidebar-nav">
                  <li>
                    <a href="tables-general.html" className="active">
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
              <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                  <i className="bi bi-gem" /><span>Icons</span><i className="bi bi-chevron-down ms-auto" />
                </a>
                <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li>
                    <a href="icons-bootstrap.html">
                      <i className="bi bi-circle" /><span>Bootstrap Icons</span>
                    </a>
                  </li>
                  <li>
                    <a href="icons-remix.html">
                      <i className="bi bi-circle" /><span>Remix Icons</span>
                    </a>
                  </li>
                  <li>
                    <a href="icons-boxicons.html">
                      <i className="bi bi-circle" /><span>Boxicons</span>
                    </a>
                  </li>
                </ul>
              </li>{/* End Icons Nav */}
              <li className="nav-heading">Pages</li>
              <li className="nav-item">
                <a className="nav-link collapsed" href="users-profile.html">
                  <i className="bi bi-person" />
                  <span>Profile</span>
                </a>
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
              <li className="nav-item">
                <a className="nav-link collapsed" href="pages-error-404.html">
                  <i className="bi bi-dash-circle" />
                  <span>Error 404</span>
                </a>
              </li>{/* End Error 404 Page Nav */}
              <li className="nav-item">
                <a className="nav-link collapsed" href="pages-blank.html">
                  <i className="bi bi-file-earmark" />
                  <span>Blank</span>
                </a>
              </li>{/* End Blank Page Nav */}
            </ul>
          </aside>{/* End Sidebar*/}
          <main id="main" className="main">
            <div className="pagetitle">
              <h1>General Tables</h1>
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item">Tables</li>
                  <li className="breadcrumb-item active">General</li>
                </ol>
              </nav>
            </div>{/* End Page Title */}
            <section className="section">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Default Table</h5>
                      {/* Default Table */}
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Age</th>
                            <th scope="col">Start Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Brandon Jacob</td>
                            <td>Designer</td>
                            <td>28</td>
                            <td>2016-05-25</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Bridie Kessler</td>
                            <td>Developer</td>
                            <td>35</td>
                            <td>2014-12-05</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Ashleigh Langosh</td>
                            <td>Finance</td>
                            <td>45</td>
                            <td>2011-08-12</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Angus Grady</td>
                            <td>HR</td>
                            <td>34</td>
                            <td>2012-06-11</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Raheem Lehner</td>
                            <td>Dynamic Division Officer</td>
                            <td>47</td>
                            <td>2011-04-19</td>
                          </tr>
                        </tbody>
                      </table>
                      {/* End Default Table Example */}
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Dark Table</h5>
                      {/* Dark Table */}
                      <table className="table table-dark">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Age</th>
                            <th scope="col">Start Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Brandon Jacob</td>
                            <td>Designer</td>
                            <td>28</td>
                            <td>2016-05-25</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Bridie Kessler</td>
                            <td>Developer</td>
                            <td>35</td>
                            <td>2014-12-05</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Ashleigh Langosh</td>
                            <td>Finance</td>
                            <td>45</td>
                            <td>2011-08-12</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Angus Grady</td>
                            <td>HR</td>
                            <td>34</td>
                            <td>2012-06-11</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Raheem Lehner</td>
                            <td>Dynamic Division Officer</td>
                            <td>47</td>
                            <td>2011-04-19</td>
                          </tr>
                        </tbody>
                      </table>
                      {/* End Dark Table */}
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Active Table</h5>
                      <p>Highlight a table row or cell by adding a <code>.table-active</code> class.</p>
                      {/* Active Table */}
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Age</th>
                            <th scope="col">Start Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Brandon Jacob</td>
                            <td>Designer</td>
                            <td>28</td>
                            <td>2016-05-25</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Bridie Kessler</td>
                            <td className="table-active">Developer</td>
                            <td>35</td>
                            <td>2014-12-05</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Ashleigh Langosh</td>
                            <td>Finance</td>
                            <td>45</td>
                            <td>2011-08-12</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Angus Grady</td>
                            <td>HR</td>
                            <td>34</td>
                            <td className="table-active">2012-06-11</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td className="table-active">Raheem Lehner</td>
                            <td>Dynamic Division Officer</td>
                            <td>47</td>
                            <td>2011-04-19</td>
                          </tr>
                        </tbody>
                      </table>
                      {/* End Active Table */}
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Tables without borders</h5>
                      <p>Add <code>.table-borderless</code> for a table without borders.</p>
                      {/* Active Table */}
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Age</th>
                            <th scope="col">Start Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Brandon Jacob</td>
                            <td>Designer</td>
                            <td>28</td>
                            <td>2016-05-25</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Bridie Kessler</td>
                            <td>Developer</td>
                            <td>35</td>
                            <td>2014-12-05</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Ashleigh Langosh</td>
                            <td>Finance</td>
                            <td>45</td>
                            <td>2011-08-12</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Angus Grady</td>
                            <td>HR</td>
                            <td>34</td>
                            <td>2012-06-11</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Raheem Lehner</td>
                            <td>Dynamic Division Officer</td>
                            <td>47</td>
                            <td>2011-04-19</td>
                          </tr>
                        </tbody>
                      </table>
                      {/* End Tables without borders */}
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Table Variants</h5>
                      <p>Use contextual classes <code>.table-primary .table-secondary .table-success .table-danger .table-warning .table-info .table-light .table-dark</code> to color tables, table rows or individual cells.</p>
                      {/* Table Variants */}
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Class</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Default</th>
                            <td>Cell</td>
                            <td>Cell</td>
                          </tr>
                          <tr className="table-primary">
                            <th scope="row">Primary</th>
                            <td>Cell</td>
                            <td>Cell</td>
                          </tr>
                          <tr className="table-secondary">
                            <th scope="row">Secondary</th>
                            <td>Cell</td>
                            <td>Cell</td>
                          </tr>
                          <tr className="table-success">
                            <th scope="row">Success</th>
                            <td>Cell</td>
                            <td>Cell</td>
                          </tr>
                          <tr className="table-danger">
                            <th scope="row">Danger</th>
                            <td>Cell</td>
                            <td>Cell</td>
                          </tr>
                          <tr className="table-warning">
                            <th scope="row">Warning</th>
                            <td>Cell</td>
                            <td>Cell</td>
                          </tr>
                          <tr className="table-info">
                            <th scope="row">Info</th>
                            <td>Cell</td>
                            <td>Cell</td>
                          </tr>
                          <tr className="table-light">
                            <th scope="row">Light</th>
                            <td>Cell</td>
                            <td>Cell</td>
                          </tr>
                          <tr className="table-dark">
                            <th scope="row">Dark</th>
                            <td>Cell</td>
                            <td>Cell</td>
                          </tr>
                        </tbody>
                      </table>
                      {/* End Table Variants */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Table with stripped rows</h5>
                      {/* Table with stripped rows */}
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Age</th>
                            <th scope="col">Start Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Brandon Jacob</td>
                            <td>Designer</td>
                            <td>28</td>
                            <td>2016-05-25</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Bridie Kessler</td>
                            <td>Developer</td>
                            <td>35</td>
                            <td>2014-12-05</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Ashleigh Langosh</td>
                            <td>Finance</td>
                            <td>45</td>
                            <td>2011-08-12</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Angus Grady</td>
                            <td>HR</td>
                            <td>34</td>
                            <td>2012-06-11</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Raheem Lehner</td>
                            <td>Dynamic Division Officer</td>
                            <td>47</td>
                            <td>2011-04-19</td>
                          </tr>
                        </tbody>
                      </table>
                      {/* End Table with stripped rows */}
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Table with hoverable rows</h5>
                      {/* Table with hoverable rows */}
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Age</th>
                            <th scope="col">Start Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Brandon Jacob</td>
                            <td>Designer</td>
                            <td>28</td>
                            <td>2016-05-25</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Bridie Kessler</td>
                            <td>Developer</td>
                            <td>35</td>
                            <td>2014-12-05</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Ashleigh Langosh</td>
                            <td>Finance</td>
                            <td>45</td>
                            <td>2011-08-12</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Angus Grady</td>
                            <td>HR</td>
                            <td>34</td>
                            <td>2012-06-11</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Raheem Lehner</td>
                            <td>Dynamic Division Officer</td>
                            <td>47</td>
                            <td>2011-04-19</td>
                          </tr>
                        </tbody>
                      </table>
                      {/* End Table with hoverable rows */}
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Bordered Table</h5>
                      <p>Add <code>.table-bordered</code> for borders on all sides of the table and cells.</p>
                      {/* Bordered Table */}
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Age</th>
                            <th scope="col">Start Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Brandon Jacob</td>
                            <td>Designer</td>
                            <td>28</td>
                            <td>2016-05-25</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Bridie Kessler</td>
                            <td>Developer</td>
                            <td>35</td>
                            <td>2014-12-05</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Ashleigh Langosh</td>
                            <td>Finance</td>
                            <td>45</td>
                            <td>2011-08-12</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Angus Grady</td>
                            <td>HR</td>
                            <td>34</td>
                            <td>2012-06-11</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Raheem Lehner</td>
                            <td>Dynamic Division Officer</td>
                            <td>47</td>
                            <td>2011-04-19</td>
                          </tr>
                        </tbody>
                      </table>
                      {/* End Bordered Table */}
                      <p><a href="https://getbootstrap.com/docs/5.0/utilities/borders/#border-color" target="_blank">Border color utilities</a> can be added to change colors:</p>
                      {/* Primary Color Bordered Table */}
                      <table className="table table-bordered border-primary">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Age</th>
                            <th scope="col">Start Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Brandon Jacob</td>
                            <td>Designer</td>
                            <td>28</td>
                            <td>2016-05-25</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Bridie Kessler</td>
                            <td>Developer</td>
                            <td>35</td>
                            <td>2014-12-05</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Ashleigh Langosh</td>
                            <td>Finance</td>
                            <td>45</td>
                            <td>2011-08-12</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Angus Grady</td>
                            <td>HR</td>
                            <td>34</td>
                            <td>2012-06-11</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Raheem Lehner</td>
                            <td>Dynamic Division Officer</td>
                            <td>47</td>
                            <td>2011-04-19</td>
                          </tr>
                        </tbody>
                      </table>
                      {/* End Primary Color Bordered Table */}
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Small tables</h5>
                      <p>Add <code>.table-sm</code> to make any <code>.table</code> more compact by cutting all cell padding in half.</p>
                      {/* Small tables */}
                      <table className="table table-sm">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Age</th>
                            <th scope="col">Start Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Brandon Jacob</td>
                            <td>Designer</td>
                            <td>28</td>
                            <td>2016-05-25</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Bridie Kessler</td>
                            <td>Developer</td>
                            <td>35</td>
                            <td>2014-12-05</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Ashleigh Langosh</td>
                            <td>Finance</td>
                            <td>45</td>
                            <td>2011-08-12</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Angus Grady</td>
                            <td>HR</td>
                            <td>34</td>
                            <td>2012-06-11</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Raheem Lehner</td>
                            <td>Dynamic Division Officer</td>
                            <td>47</td>
                            <td>2011-04-19</td>
                          </tr>
                        </tbody>
                      </table>
                      {/* End small tables */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>{/* End #main */}
          {/* ======= Footer ======= */}
          <footer id="footer" className="footer">
            <div className="copyright">
              © Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </footer>{/* End Footer */}
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
          {/* Vendor JS Files */}
          {/* Template Main JS File */}
        </div>
      );
    }
  });