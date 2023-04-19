const Sidebartest = () => {
  return (
    <nav className="bg-sidebar-bg text-white max-w-xs min-w-max" id="sidebar">
      <div className="sticky top-0 w-64 left-0">
        <a href="#" className="block text-white px-5 py-5">
        <img
            src="./public/assets/logo.png"
            alt=""
            className={`mx-auto ${
              open ? "w-32" : "w-16"
            } cursor-pointer duration-500`}
          />
          <span className="block text-center mt-4 font-bold text-xl">
            VipresNET
            <sup>
              <small className="absolute left-1 top-1 z-10 uppercase font-light">Pro</small>
            </sup>
          </span>
        </a>
        <div className="sidebar-user p-3">
          <div className="flex justify-center">
            <div className="shrink-0">
              <img
                src="./public/assets/img/avatars/avatar.jpg"
                className="w-10 h-10 max-w-full rounded mr-1"
                alt="Manolo Cabrera"
              />
            </div>
            <div className="flex-grow px-2 -mt-1">
              <a href="#" className="nowrap cursor-pointer">
                Manolo Cabrera
              </a>
              <div className="dropdown-menu dropdown-menu-start hidden">
                <a className="dropdown-item" href="pages-profile.html">
                  <i className="align-middle me-1" data-feather="user"></i> Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="align-middle me-1" data-feather="pie-chart"></i>{" "}
                  Analytics
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="pages-settings.html">
                  <i className="align-middle me-1" data-feather="settings"></i>{" "}
                  Settings & Privacy
                </a>
                <a className="dropdown-item" href="#">
                  <i className="align-middle me-1" data-feather="help-circle"></i>{" "}
                  Help Center
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Log out
                </a>
              </div>

              <div class="text-light-white -mt-1">Designer</div>
            </div>
          </div>
        </div>
        {'Voy oir aqui con el css'}
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
