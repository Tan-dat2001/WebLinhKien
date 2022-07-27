class headerAdm extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header class="app-header"><a class="app-header__logo" href="index.html">Admin</a>
        <!-- Sidebar toggle button--><a class="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar"></a>
        <!-- Navbar Right Menu-->
        <ul class="app-nav">
          <li class="app-search">
            <input class="app-search__input" type="search" placeholder="Search">
            <button class="app-search__button"><i class="fa fa-search"></i></button>
          </li>
      
         
          <!-- User Menu-->
          <li class="dropdown"><a class="app-nav__item" href="#" data-toggle="dropdown" aria-label="Open Profile Menu"><i class="fa fa-user fa-lg"></i></a>
            <ul class="dropdown-menu settings-menu dropdown-menu-right">
              <li><a class="dropdown-item" href="page-user.html"><i class="fa fa-cog fa-lg"></i> Settings</a></li>
              <li><a class="dropdown-item" href="page-user.html"><i class="fa fa-user fa-lg"></i> Profile</a></li>
              <li><a class="dropdown-item" href="page-login.html"><i class="fa fa-sign-out fa-lg"></i> Logout</a></li>
            </ul>
          </li>
        </ul>
      </header>
  
  
      <!-- Sidebar menu-->
      <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
      <aside class="app-sidebar">
        <div class="app-sidebar__user"><img class="app-sidebar__user-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg" alt="User Image">
          <div>
            <p class="app-sidebar__user-name">John Doe</p>
            <p class="app-sidebar__user-designation">Frontend Developer</p>
          </div>
        </div>
        <ul class="app-menu">
          <li><a class="app-menu__item active" href="dashboard.html"><i class="app-menu__icon fa fa-dashboard"></i><span class="app-menu__label">Dashboard</span></a></li>
          <li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fa fa-laptop"></i><span class="app-menu__label">Quản Lí Linh Kiện</span><i class="treeview-indicator fa fa-angle-right"></i></a>
            <ul class="treeview-menu">
              <li><a class="treeview-item" href="linhKien.html"><i class="icon fa fa-circle-o"></i>Linh Kiện</a></li>
              <li><a class="treeview-item" href="hangSX.html" target="_blank" rel="noopener"><i class="icon fa fa-circle-o"></i>Hãng Sản Xuất</a></li>
              <li><a class="treeview-item" href="danhMuc.html"><i class="icon fa fa-circle-o"></i>Danh mục Linh Kiện</a></li>
            </ul>
          </li>
          <li><a class="app-menu__item" href="nguoiDung.html"><i class="app-menu__icon fa fa-pie-chart"></i><span class="app-menu__label">Quản Lí Khách Hàng</span></a></li>
          <li><a class="app-menu__item" href="nhanVien.html"><i class="app-menu__icon fa fa-pie-chart"></i><span class="app-menu__label">Quản Lí Nhân Viên </span></a></li>
          <li><a class="app-menu__item" href="donHang.html"><i class="app-menu__icon fa fa-pie-chart"></i><span class="app-menu__label">Quản Lí Đơn Hàng </span></a></li>
          <li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fa fa-edit"></i><span class="app-menu__label">Thống Kê</span><i class="treeview-indicator fa fa-angle-right"></i></a>
            <ul class="treeview-menu">
              <li><a class="treeview-item" href="thongKeLinhKien.html"><i class="icon fa fa-circle-o"></i> Linh Kiện</a></li>
              <li><a class="treeview-item" href="thongKeDoanhThu.html"><i class="icon fa fa-circle-o"></i> Doanh Thu</a></li>
            </ul>
          </li>
          
        
          <li><a class="app-menu__item" href="khuyenMai.html"><i class="app-menu__icon fa fa-file-code-o"></i><span class="app-menu__label">Khuyến Mãi</span></a></li>
        </ul>
      </aside>
        
        `
    }
}

customElements.define('include-admin',headerAdm)