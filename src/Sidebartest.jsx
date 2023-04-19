const Sidebartest = () => {
  return (
    <nav className="" id="sidebar">
      <div>
        <a href="#">
          <span>
            AdminKit{" "}
            <sup>
              <small>Pro</small>
            </sup>
          </span>
          <img
            src="./src/assets/logo.png"
            alt=""
            className={`mx-auto ${
              open ? "w-32" : "w-16"
            } cursor-pointer duration-500`}
          />
        </a>
        <div className="sidebar-user">
          <div className="">
            <div className="">
              <img
                src="./src/assets/img/avatars/avatar.jpg"
                class="avatar img-fluid rounded me-1"
                alt="Charles Hall"
              />
            </div>
            <div className="">
              <a href="#" className="sidebar-user-title-dropdown-toggle">
                Manolo Cabrera
              </a>
              <div class="dropdown-menu dropdown-menu-start">
                <a class="dropdown-item" href="pages-profile.html">
                  <i class="align-middle me-1" data-feather="user"></i> Profile
                </a>
                <a class="dropdown-item" href="#">
                  <i class="align-middle me-1" data-feather="pie-chart"></i>{" "}
                  Analytics
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="pages-settings.html">
                  <i class="align-middle me-1" data-feather="settings"></i>{" "}
                  Settings & Privacy
                </a>
                <a class="dropdown-item" href="#">
                  <i class="align-middle me-1" data-feather="help-circle"></i>{" "}
                  Help Center
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Log out
                </a>
              </div>

              <div class="sidebar-user-subtitle">Designer</div>
            </div>
          </div>
        </div>
        <ul className="sidebar-nav">
          <li className="sidebar-header">Pages</li>
          <li className="sidebar-item">
            <a href="" className="">
              Dashboards
            </a>

            <ul className="sidebar-dropdown-list-unstyled">
              <li className="sidebar-item">
                <a href="" className="sidebar-link">
                  Analytics
                </a>
              </li>
              <li className="sidebar-item">
                <a href="" className="sidebar-link">
                  E-Commerce
                </a>
              </li>
              <li className="sidebar-item">
                <a href="" className="sidebar-link">
                  Crypto
                </a>
              </li>
            </ul>
          </li>

          <li className="sidebar-item active">
            <a href="" className="sidebar-link">
              <i class="align-middle" data-feather="layout"></i> <span class="align-middle">Pages</span>
            </a>
            <ul id="pages" className="sidebar-dropdown-list-unstyled">
              <li className="sidebar-item"><a href="">Settings</a></li>
              <li className="sidebar-item"><a href="">Projects</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebartest;
