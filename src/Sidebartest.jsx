const Sidebartest = () => {
  return (
    <nav className="bg-sidebar-bg text-white max-w-xs min-w-max" id="sidebar">
      <div className="sticky top-0 w-64 left-0">
        <a href="#" className="block text-white px-5 py-5">
        <img
            src="./assets/logo.png"
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
        <div className="sidebar-user py-3 px-6">
          <div className="flex justify-center">
            <div className="shrink-0">
              <img
                src="./assets/img/avatars/avatar.jpg"
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

        <ul className="sidebar-nav flex-grow">
          <li className="sidebar-header bg-opacity-0 text-sm pt-6 pl-6 pr-1 pb-1">Pages</li>
          <li className="sidebar-item list-item">
            <a href="" className="sidebar-link hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders align-middle inline-block"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
              <span className="align-middle px-2 text-base">Dashboard</span>
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
