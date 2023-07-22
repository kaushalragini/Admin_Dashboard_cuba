import React from "react";
import "./Dashboard.css";
import { BsThreeDots } from "react-icons/bs";
import { HiDownload } from "react-icons/hi"

const Dashboard = () => {
	return (
		<div>
			<body id="page-top">
				<div id="wrapper">
					<ul
						className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
						id="accordionSidebar">
						<a
							className="sidebar-brand d-flex align-items-center justify-content-center"
							href="index.html">
							<img src="https://admin.pixelstrap.com/cuba/assets/images/logo/logo.png" className="img-fluid" />
						</a>

						{/* <!-- Divider --> */}
						<hr className="sidebar-divider my-0" />

						{/* <!-- Nav Item - Dashboard --> */}
						<li className="nav-item active">
							<a className="nav-link" href="index.html">
								<i className="fas fa-fw fa-tachometer-alt"></i>
								<span>Dashboard</span>
							</a>
						</li>

						{/* <!-- Divider --> */}
						<hr className="sidebar-divider" />

						{/* <!-- Heading --> */}
						<div className="sidebar-heading">Interface</div>

						{/* <!-- Nav Item - Pages Collapse Menu --> */}
						<li className="nav-item">
							<a
								className="nav-link collapsed"
								href="#"
								data-toggle="collapse"
								data-target="#collapseTwo"
								aria-expanded="true"
								aria-controls="collapseTwo">
								<i className="fas fa-fw fa-cog"></i>
								<span>Components</span>
							</a>
							<div
								id="collapseTwo"
								className="collapse"
								aria-labelledby="headingTwo"
								data-parent="#accordionSidebar">
								<div className="bg-white py-2 collapse-inner rounded">
									<h6 className="collapse-header">Custom Components:</h6>
									<a className="collapse-item" href="buttons.html">
										Buttons
									</a>
									<a className="collapse-item" href="cards.html">
										Cards
									</a>
								</div>
							</div>
						</li>

						{/* <!-- Nav Item - Utilities Collapse Menu --> */}
						<li className="nav-item">
							<a
								className="nav-link collapsed"
								href="#"
								data-toggle="collapse"
								data-target="#collapseUtilities"
								aria-expanded="true"
								aria-controls="collapseUtilities">
								<i className="fas fa-fw fa-wrench"></i>
								<span>Utilities</span>
							</a>
							<div
								id="collapseUtilities"
								className="collapse"
								aria-labelledby="headingUtilities"
								data-parent="#accordionSidebar">
								<div className="bg-white py-2 collapse-inner rounded">
									<h6 className="collapse-header">Custom Utilities:</h6>
									<a className="collapse-item" href="utilities-color.html">
										Colors
									</a>
									<a className="collapse-item" href="utilities-border.html">
										Borders
									</a>
									<a className="collapse-item" href="utilities-animation.html">
										Animations
									</a>
									<a className="collapse-item" href="utilities-other.html">
										Other
									</a>
								</div>
							</div>
						</li>

						{/* <!-- Divider --> */}
						<hr className="sidebar-divider" />

						{/* <!-- Heading --> */}
						<div className="sidebar-heading">Addons</div>

						{/* <!-- Nav Item - Pages Collapse Menu --> */}
						<li className="nav-item">
							<a
								className="nav-link collapsed"
								href="#"
								data-toggle="collapse"
								data-target="#collapsePages"
								aria-expanded="true"
								aria-controls="collapsePages">
								<i className="fas fa-fw fa-folder"></i>
								<span>Pages</span>
							</a>
							<div
								id="collapsePages"
								className="collapse"
								aria-labelledby="headingPages"
								data-parent="#accordionSidebar">
								<div className="bg-white py-2 collapse-inner rounded">
									<h6 className="collapse-header">Login Screens:</h6>
									<a className="collapse-item" href="login.html">
										Login
									</a>
									<a className="collapse-item" href="register.html">
										Register
									</a>
									<a className="collapse-item" href="forgot-password.html">
										Forgot Password
									</a>
									<div className="collapse-divider"></div>
									<h6 className="collapse-header">Other Pages:</h6>
									<a className="collapse-item" href="404.html">
										404 Page
									</a>
									<a className="collapse-item" href="blank.html">
										Blank Page
									</a>
								</div>
							</div>
						</li>

						{/* <!-- Nav Item - Charts --> */}
						<li className="nav-item">
							<a className="nav-link" href="charts.html">
								<i className="fas fa-fw fa-chart-area"></i>
								<span>Charts</span>
							</a>
						</li>

						{/* <!-- Nav Item - Tables --> */}
						<li className="nav-item">
							<a className="nav-link" href="tables.html">
								<i className="fas fa-fw fa-table"></i>
								<span>Tables</span>
							</a>
						</li>

						{/* <!-- Divider --> */}
						<hr className="sidebar-divider d-none d-md-block" />

						{/* <!-- Sidebar Toggler (Sidebar) --> */}
						<div className="text-center d-none d-md-inline">
							<button
								className="rounded-circle border-0"
								id="sidebarToggle"></button>
						</div>

						{/* <!-- Sidebar Message --> */}
						<div className="sidebar-card d-none d-lg-flex">
							<img
								className="sidebar-card-illustration mb-2 img-fluid"
								src="img/undraw_rocket.svg"
								alt="..."

							/>
							<p className="text-center mb-2">
								<strong>SB Admin Pro</strong> is packed with premium features,
								components, and more!
							</p>
							<a
								className="btn btn-success btn-sm"
								href="https://startbootstrap.com/theme/sb-admin-pro">
								Upgrade to Pro!
							</a>
						</div>
					</ul>
					{/* <!-- End of Sidebar --> */}

					{/* <!-- Content Wrapper --> */}
					<div id="content-wrapper" className="d-flex flex-column">
						{/* <!-- Main Content --> */}
						<div id="content">
							{/* <!-- Topbar --> */}
							<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
								{/* <!-- Sidebar Toggle (Topbar) --> */}
								<button
									id="sidebarToggleTop"
									className="btn btn-link d-md-none rounded-circle mr-3">
									<i className="fa fa-bars"></i>
								</button>

								{/* <!-- Topbar Search --> */}
								<form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
									<div className="input-group">
										<input
											type="text"
											className="form-control bg-light border-0 small"
											placeholder="Search for..."
											aria-label="Search"
											aria-describedby="basic-addon2"
										/>
										<div className="input-group-append">
											<button className="btn btn-primary" type="button">
												<i className="fas fa-search fa-sm"></i>
											</button>
										</div>
									</div>
								</form>

								{/* <!-- Topbar Navbar --> */}
								<ul className="navbar-nav ml-auto">
									{/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
									<li className="nav-item dropdown no-arrow d-sm-none">
										<a
											className="nav-link dropdown-toggle"
											href="#"
											id="searchDropdown"
											role="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false">
											<i className="fas fa-search fa-fw"></i>
										</a>
										{/* <!-- Dropdown - Messages --> */}
										<div
											className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
											aria-labelledby="searchDropdown">
											<form className="form-inline mr-auto w-100 navbar-search">
												<div className="input-group">
													<input
														type="text"
														className="form-control bg-light border-0 small"
														placeholder="Search for..."
														aria-label="Search"
														aria-describedby="basic-addon2"
													/>
													<div className="input-group-append">
														<button className="btn btn-primary" type="button">
															<i className="fas fa-search fa-sm"></i>
														</button>
													</div>
												</div>
											</form>
										</div>
									</li>
									<li className="nav-item dropdown no-arrow mx-1">
										<a
											className="nav-link dropdown-toggle"
											href="#"
											id="alertsDropdown"
											role="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false">
											<i className="fas fa-bell fa-fw"></i>
											{/* <!-- Counter - Alerts --> */}
										</a>
									</li>
									{/* <!-- Nav Item - Alerts --> */}
									<li className="nav-item dropdown no-arrow mx-1">
										<a
											className="nav-link dropdown-toggle"
											href="#"
											id="alertsDropdown"
											role="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false">
											<i className="fas fa-bell fa-fw"></i>
											{/* <!-- Counter - Alerts --> */}
											<span className="badge badge-danger badge-counter">
												3+
											</span>
										</a>
										{/* <!-- Dropdown - Alerts --> */}
										<div
											className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
											aria-labelledby="alertsDropdown">
											<h6 className="dropdown-header">Alerts Center</h6>
											<a
												className="dropdown-item d-flex align-items-center"
												href="#">
												<div className="mr-3">
													<div className="icon-circle bg-primary">
														<i className="fas fa-file-alt text-white"></i>
													</div>
												</div>
												<div>
													<div className="small text-gray-500">
														December 12, 2019
													</div>
													<span className="font-weight-bold">
														A new monthly report is ready to download!
													</span>
												</div>
											</a>
											<a
												className="dropdown-item d-flex align-items-center"
												href="#">
												<div className="mr-3">
													<div className="icon-circle bg-success">
														<i className="fas fa-donate text-white"></i>
													</div>
												</div>
												<div>
													<div className="small text-gray-500">
														December 7, 2019
													</div>
													$290.29 has been deposited into your account!
												</div>
											</a>
											<a
												className="dropdown-item d-flex align-items-center"
												href="#">
												<div className="mr-3">
													<div className="icon-circle bg-warning">
														<i className="fas fa-exclamation-triangle text-white"></i>
													</div>
												</div>
												<div>
													<div className="small text-gray-500">
														December 2, 2019
													</div>
													Spending Alert: We've noticed unusually high spending
													for your account.
												</div>
											</a>
											<a
												className="dropdown-item text-center small text-gray-500"
												href="#">
												Show All Alerts
											</a>
										</div>
									</li>

									{/* <!-- Nav Item - Messages --> */}
									<li className="nav-item dropdown no-arrow mx-1">
										<a
											className="nav-link dropdown-toggle"
											href="#"
											id="messagesDropdown"
											role="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false">
											<i className="fas fa-envelope fa-fw"></i>
											{/* <!-- Counter - Messages --> */}
											<span className="badge badge-danger badge-counter">
												7
											</span>
										</a>
										{/* <!-- Dropdown - Messages --> */}
										<div
											className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
											aria-labelledby="messagesDropdown">
											<h6 className="dropdown-header">Message Center</h6>
											<a
												className="dropdown-item d-flex align-items-center"
												href="#">
												<div className="dropdown-list-image mr-3">
													<img
														className="rounded-circle img-fluid"
														src="img/undraw_profile_1.svg"
														alt="..."
													/>
													<div className="status-indicator bg-success"></div>
												</div>
												<div className="font-weight-bold">
													<div className="text-truncate">
														Hi there! I am wondering if you can help me with a
														problem I've been having.
													</div>
													<div className="small text-gray-500">
														Emily Fowler · 58m
													</div>
												</div>
											</a>
											<a
												className="dropdown-item d-flex align-items-center"
												href="#">
												<div className="dropdown-list-image mr-3">
													<img
														className="rounded-circle img-fluid"
														src="img/undraw_profile_2.svg"
														alt="..."
													/>
													<div className="status-indicator"></div>
												</div>
												<div>
													<div className="text-truncate">
														I have the photos that you ordered last month, how
														would you like them sent to you?
													</div>
													<div className="small text-gray-500">
														Jae Chun · 1d
													</div>
												</div>
											</a>
											<a
												className="dropdown-item d-flex align-items-center"
												href="#">
												<div className="dropdown-list-image mr-3">
													<img
														className="rounded-circle img-fluid"
														src="img/undraw_profile_3.svg"
														alt="..."
													/>
													<div className="status-indicator bg-warning"></div>
												</div>
												<div>
													<div className="text-truncate">
														Last month's report looks great, I am very happy
														with the progress so far, keep up the good work!
													</div>
													<div className="small text-gray-500">
														Morgan Alvarez · 2d
													</div>
												</div>
											</a>
											<a
												className="dropdown-item d-flex align-items-center"
												href="#">
												<div className="dropdown-list-image mr-3">
													<img
														className="rounded-circle img-fluid"
														src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
														alt="..."
													/>
													<div className="status-indicator bg-success"></div>
												</div>
												<div>
													<div className="text-truncate">
														Am I a good boy? The reason I ask is because someone
														told me that people say this to all dogs, even if
														they aren't good...
													</div>
													<div className="small text-gray-500">
														Chicken the Dog · 2w
													</div>
												</div>
											</a>
											<a
												className="dropdown-item text-center small text-gray-500"
												href="#">
												Read More Messages
											</a>
										</div>
									</li>

									<div className="topbar-divider d-none d-sm-block"></div>

									{/* <!-- Nav Item - User Information --> */}
									<li className="nav-item dropdown no-arrow">
										<a
											className="nav-link dropdown-toggle"
											href="#"
											id="userDropdown"
											role="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false">
											<span className="mr-2 d-none d-lg-inline text-gray-600 small">
												Emay Walter
											</span>
											<img
												className="img-profile rounded-circle img-fluid"
												src="img/undraw_profile.svg"
											/>
										</a>
										{/* <!-- Dropdown - User Information --> */}
										<div
											className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
											aria-labelledby="userDropdown">
											<a className="dropdown-item" href="#">
												<i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
												Profile
											</a>
											<a className="dropdown-item" href="#">
												<i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
												Settings
											</a>
											<a className="dropdown-item" href="#">
												<i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
												Activity Log
											</a>
											<div className="dropdown-divider"></div>
											<a
												className="dropdown-item"
												href="#"
												data-toggle="modal"
												data-target="#logoutModal">
												<i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
												Logout
											</a>
										</div>
									</li>
								</ul>
							</nav>
							{/* <!-- End of Topbar --> */}

							{/* <!-- Begin Page Content --> */}
							<div className="container-fluid">
								{/* <!-- Page Heading --> */}
								<div className="d-sm-flex align-items-center justify-content-between mb-4">
									<h1 className="h3 mb-0 text-gray-800">Default</h1>
									{/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                        className="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
									<span>
										Dashboard / <a href="#">Default</a>
									</span>
								</div>

								{/* <!-- Content Row --> */}
								<div className="row row-fluid">
									<div className="col-xl-4 col-md-4 mb-4">
										{/* <div class="col-lg-4 rounded">
											<img src="/img/main_cuba2.png" className="img-fluid" />
										</div> */}
										<img src="/img/main_cuba2.png" className="img-fluid" />
									</div>
									{/* <!-- Earnings (Monthly) Card Example --> */}
									<div className="col-xl-8 col-md-6 mb-4">
										<div className="row flex-box">
											<div className="col-xl-4 col-md-6 mb-4">
												<div className="card border-left-primary shadow py-2">
													<div className="card-body">
														<div className="row no-gutters align-items-center">
															<div className="col-xl-3 text-center">
																<img src="/img/shopping_cart.png" className="img-fluid" />
															</div>
															<div className="col-xl-5 ml-4">
																<div className="h5 mb-1 font-weight fs-2 text-gray-900">
																	10,000
																</div>
																<div className="text-s mb-1">
																	Purchase
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-4 col-md-6 mb-4">
												<div className="card border-left-primary shadow h-100 py-2">
													<div className="card-body">
														<div className="row no-gutters align-items-center">
															<div className="col-xl-3 text-center">
																<img src="/img/sales.png" className="img-fluid" />
															</div>
															<div className="col-xl-5 ml-4">
																<div className="h5 mb-2 font-weight fs-2 text-gray-900">
																	7,000
																</div>
																<div className="text-s mb-1">
																	Sales Return
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-4 col-md-6 mb-4">
												<div className="card border-left-primary shadow h-100 py-2">
													<div className="card-body">
														<div className="row no-gutters align-items-center">
															<div className="col-xl-5 ml-4">
																<div className="h5 mb-2 font-weight fs-2 text-gray-900">
																	180K
																</div>
																<div className="text-s mb-1">
																	Orders
																</div>
															</div>
															<div className="col-xl-3 text-center">
																<img src="/img/orders.png" className="img-fluid" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div class="row">
											<div className="col-xl-4 col-md-6 mb-4">
												<div className="card border-left-primary shadow h-100 py-2">
													<div className="card-body">
														<div className="row no-gutters align-items-center">
															<div className="col-xl-3 text-center">
																<img src="/img/sales2.png" className="img-fluid" />
															</div>
															<div className="col-xl-5 ml-4">
																<div className="h5 mb-2 font-weight fs-2 text-gray-900">
																	4,200
																</div>
																<div className="text-s mb-1">
																	Sales
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>

											{/* <!-- Pending Requests Card Example --> */}
											<div className="col-xl-4 col-md-6 mb-4">
												<div className="card border-left-primary shadow h-100 py-2">
													<div className="card-body">
														<div className="row no-gutters align-items-center">
															<div className="col-xl-3 text-center">
																<img src="/img/purchase.png" className="img-fluid" />
															</div>
															<div className="col-xl-5 ml-4">
																<div className="h5 mb-2 font-weight fs-2 text-gray-900">
																	5700
																</div>
																<div className="text-s mb-1">
																	Purchase rate
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-4 col-md-6 mb-4">
												<div className="card border-left-primary shadow h-100 py-2">
													<div className="card-body">
														<div className="row no-gutters align-items-center">
															<div className="col-xl-5 ml-4">
																<div className="h5 mb-2 font-weight-bold fs-2 text-gray-900">
																	7,000
																</div>
																<div className="text-s mb-1">
																	Profit
																</div>
															</div>
															<div className="col-xl-3 text-center">
																<img src="/img/profit.png" style={{ width: "80px" }} className="img-fluid" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										{/* <!-- Earnings (Monthly) Card Example --> */}
									</div>
								</div>
								<div className="row">
									{/* <!-- Area Chart --> */}
									<div className="col-xl-8 col-lg-7">
										<div className="card shadow mb-4">
											{/* <!-- Card Header - Dropdown --> */}
											<div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
												<h6 className="m-0 font-weight-bold">
													Overall Balance
												</h6>
											</div>
											{/* <!-- Card Body --> */}
											<div className="card-body">
												<div className="row">
													<div className="col-8">
														<div className="chart-area">
															<img src="img/overall_balance.png" className="img-fluid h-100" />
														</div>
													</div>
													<div className="col-4">
														<div className="row pb-4 align-middle">
															<div className="col-4">
																<HiDownload className="float-end h-100" />
															</div>
															<div className="col-4">
																<div className="row">Income</div>
																<div className="row">$22,678</div>
															</div>
															<div className="col-4">
																<div className="row">...</div>
																<div className="row">+$456</div>
															</div>
														</div>
														<div className="row pb-4 ">
															<div className="col-4">
																<HiDownload className="float-end h-100" />
															</div>
															<div className="col-4">
																<div className="row">Income</div>
																<div className="row">$22,678</div>
															</div>
															<div className="col-4">
																<div className="row">...</div>
																<div className="row">+$456</div>
															</div>
														</div>
														<div className="row pb-4">
															<div className="col-4">
																<HiDownload className="float-end h-100" />
															</div>
															<div className="col-4">
																<div className="row">Income</div>
																<div className="row">$22,678</div>
															</div>
															<div className="col-4">
																<div className="row">...</div>
																<div className="row">+$456</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									{/* <!-- Pie Chart --> */}
									<div className="col-xl-4 col-lg-5">
										<div className="card shadow mb-4">
											{/* <!-- Card Header - Dropdown --> */}
											<div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
												<h6 className="m-0 font-weight-bold text-primary">
													Recent Orders
												</h6>
												<div className="dropdown no-arrow">
													<a
														className="dropdown-toggle"
														href="#"
														role="button"
														id="dropdownMenuLink"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false">
														<i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
													</a>
													<div
														className="dropdown-menu dropdown-menu-right shadow animated--fade-in">
														<div className="dropdown-item" href="#">
															Weekly
														</div>
														<a className="dropdown-item" href="#">
															Monthly
														</a>
														<a className="dropdown-item" href="#">
															Yearly
														</a>

													</div>
												</div>
											</div>
											{/* <!-- Card Body --> */}
											<div className="card-body">
												<div className="row">
													<img src="img/recent_orders.png" className="img-fluid" />
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* <!-- 3rd row --> */}
								<div className="row">
									{/* <!-- Content Column --> */}
									<div className="col-lg-4 mb-4">
										{/* <!-- Project Card Example --> */}
										<div className="card shadow mb-4">
											<div className="card-header py-3 row">
												<h6 className="m-0 font-weight-bold text-primary col-6">
													Activity
												</h6>
												<div class="btn-group col-6">
													<button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
														Today
													</button>
													<ul class="dropdown-menu">
														<li><a class="dropdown-item" href="#">Today</a></li>
														<li><a class="dropdown-item" href="#">Tomorrow</a></li>
														<li><a class="dropdown-item" href="#">Yesterday</a></li>
													</ul>
												</div>
											</div>
											<div className="card-body">
												<div className="row mt-3">
													<div className="col-2">
														<img className="img-fluid" src="img/stepper.png" style={{ height: "350px" }} />
													</div>
													<div className="col-10">
														<div className="row mb-3">
															<div className="row mb-1">
																<div className="col-6 text-bg-info">8th March, 2022</div>
																<div className="col-2"></div>
																<div className="col-4">1 day ago</div>
															</div>
															<div className="row">
																<div className="col-12 fw-bold">Updated Product</div>
															</div>
															<div className="row">
																<div className="col-12"><small>Quisque a consequat ante sit amet magna.</small></div>
															</div>
														</div>
														<div className="row"></div>
														<div className="row">
															<div className="row">
																<div className="col-6 text-bg-info">15th Oct, 2022</div>
																<div className="col-2"></div>
																<div className="col-4">1 day ago</div>
															</div>
															<div className="row">
																<div className="col-12 fw-bold">Tello just like your product</div>
															</div>
															<div className="row">
																<div className="col-12"><small>Quisque a consequat ante sit amet magna.</small></div>
															</div>

														</div>
														<div className="row mb-1">
															<div className="row">
																<div className="col-6 text-bg-info">20th Sept, 2022</div>
																<div className="col-2"></div>
																<div className="col-4">1 day ago</div>
															</div>
															<div className="row">
																<div className="col-12 fw-bold">Tello just like your product</div>
															</div>
															<div className="row">
																<div className="col-12"><small>Quisque a consequat ante sit amet magna.</small></div>
															</div>

														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-4 mb-4">
										{/* <!-- Illustrations --> */}
										<div className="card shadow mb-4">
											<div className="card-header py-3 row">
												<h6 className="m-0 font-weight-bold text-primary col-6">
													Recent Sales
												</h6>
												<div class="btn-group col-6">
													<button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
														Today
													</button>
													<ul class="dropdown-menu">
														<li><a class="dropdown-item" href="#">Today</a></li>
														<li><a class="dropdown-item" href="#">Tomorrow</a></li>
														<li><a class="dropdown-item" href="#">Yesterday</a></li>
													</ul>
												</div>
											</div>
											<div className="card-body">
												<div className="row mt-4">
													<div className="row mb-4">
														<div className="col-6">
															<div className="row">
																<div className="col-4"><img className="img-fluid" src="img/Jane.png" style={{ width: "55px" }} /></div>
																<div className="col-8">
																	<div className="row fw-bold">Jane Cooper</div>
																	<div className="row text-secondary">10 minutes ago</div>
																</div>
															</div>
														</div>
														<div className="col-3"></div>
														<div className="col-3">
															<h6 className="text-success">$200.00</h6>
														</div>
													</div>
													<div className="row mb-4">
														<div className="col-6">
															<div className="row">
																<div className="col-4"><img className="img-fluid" src="img/Jane.png" style={{ width: "55px" }} /></div>
																<div className="col-8">
																	<div className="row fw-bold">Jane Cooper</div>
																	<div className="row text-secondary">10 minutes ago</div>
																</div>
															</div>
														</div>
														<div className="col-3"></div>
														<div className="col-3">
															<h6 className="text-success">$200.00</h6>
														</div>
													</div>
													<div className="row mb-4">
														<div className="col-6">
															<div className="row">
																<div className="col-4"><img className="img-fluid" src="img/Jane.png" style={{ width: "55px" }} /></div>
																<div className="col-8">
																	<div className="row fw-bold">Jane Cooper</div>
																	<div className="row text-secondary">10 minutes ago</div>
																</div>
															</div>
														</div>
														<div className="col-3"></div>
														<div className="col-3">
															<h6 className="text-success">$200.00</h6>
														</div>
													</div>
													<div className="row mb-4">
														<div className="col-6">
															<div className="row">
																<div className="col-4"><img className="img-fluid" src="img/Jane.png" style={{ width: "55px" }} /></div>
																<div className="col-8">
																	<div className="row fw-bold">Jane Cooper</div>
																	<div className="row text-secondary">10 minutes ago</div>
																</div>
															</div>
														</div>
														<div className="col-3"></div>
														<div className="col-3">
															<h6 className="text-success">$200.00</h6>
														</div>
													</div>
													<div className="row mb-4">
														<div className="col-6">
															<div className="row">
																<div className="col-4"><img className="img-fluid" src="img/Jane.png" style={{ width: "55px" }} /></div>
																<div className="col-8">
																	<div className="row fw-bold">Jane Cooper</div>
																	<div className="row text-secondary">10 minutes ago</div>
																</div>
															</div>
														</div>
														<div className="col-3"></div>
														<div className="col-3">
															<h6 className="text-success">$200.00</h6>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-4 mb-4">
										{/* <!-- Illustrations --> */}
										<div className="card shadow mb-4">
											<div className="card-header py-3 row">
												<h6 className="m-0 font-weight-bold text-primary col-6">
													Timeline
												</h6>
												<div class="btn-group col-6">
													<button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
														Today
													</button>
													<ul class="dropdown-menu">
														<li><a class="dropdown-item" href="#">Today</a></li>
														<li><a class="dropdown-item" href="#">Tomorrow</a></li>
														<li><a class="dropdown-item" href="#">Yesterday</a></li>

													</ul>
												</div>
											</div>
											<div className="card-body">
												<div className="row">
													<img className="img-fluid" src="img/timeline_chart.png" style={{ height: "390px" }} />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-6 mr-5">
										<div className="row card shadow mb-4 d-flex h-25">
											<div className="row mt-4 align-middle">
												<div className="col-3 fw-bold">Total Users</div>
												<div className="col-6"></div>
												<div className="col-3"><BsThreeDots className="float-end" /></div>
											</div>
											<div className="row mt-3 mb-2 align-middle">
												<div className="col-5">
													<div className="row d-flex justify-content-center">
														<div className="col-2 mr-2">
															<img className="img-fluid" src="img/total_users1.png" style={{ width: "40px" }} />
														</div>
														<div className="col-2">
															<div className="row">178,098</div>
															<div className="row ">+30.89</div>
														</div>
													</div>
												</div>
												<div className="col-2 d-flex d-flex justify-content-center"><div class="vr"></div></div>
												<div className="col-5">
													<div className="row ">
														<div className="col-2 mr-2">
															<img className="img-fluid" src="img/total_users2.png" style={{ width: "40px" }} />
														</div>
														<div className="col-2">
															<div className="row">178,098</div>
															<div className="row ">-08.89</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="row card shadow mb-4 h-80">
											<div className="row mt-4 align-middle">
												<div className="col-3 fw-bold">Followers Growth</div>
												<div className="col-6"></div>
												<div className="col-3"><BsThreeDots className="float-end" /></div>
											</div>
											<div className="row">
												<img className="img-fluid" src="img/followers_growth.png" style={{ height: "200px" }} />
											</div>
										</div>
									</div>
									<div className="col-lg-5 card shadow">
										<div className="row mt-4 align-middle">
											<div className="col-3 fw-bold">PaperNote</div>
											<div className="col-6">
											</div>
											<div className="col-3"><BsThreeDots className="float-end" /></div>
										</div>
										<div className="row mt-4">
											<img src="img/papernote.png" className="img-fluid" />
										</div>
										<div className="row mt-4">
											<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
										</div>
										<div className="row mb-4">
											<div className="col-8">
												<button type="button" class="btn btn-primary mr-1">SAAS</button>
												<button type="button" class="btn btn-secondary mr-1">E-Commerce</button>
												<button type="button" class="btn btn-success mr-1">Crypto</button>
												<button type="button" class="btn btn-info mr-1">Project</button>
												<button type="button" class="btn btn-warning mr-1">NFT</button>
												<button type="button" class="btn btn-info mr-1">+9</button>
											</div>
											<div className="col-1 d-flex d-flex justify-content-center"><div class="vr"></div></div>
											<div className="col-3">
												<button type="button" class="btn btn-warning">In-progress</button>
											</div>
										</div>
										<div className="row mb-4">
											<div className="col-5">
												<img src="img/overlapping.png" className="img-fluid" />
											</div>
											<div className="col-4 ">
												<span className="text-primary">$239,098</span><span>(Budget)</span>
											</div>
											<div className="col-3"></div>
										</div>
									</div>

								</div>
							</div>
							{/* <!-- /.container-fluid --> */}
						</div>
						{/* <!-- End of Main Content --> */}

						{/* <!-- Footer --> */}
						<footer className="sticky-footer bg-white">
							<div className="container my-auto">
								<div className="copyright text-center my-auto">
									<span>Copyright &copy; Your Website 2021</span>
								</div>
							</div>
						</footer>
						{/* <!-- End of Footer --> */}
					</div>
					{/* <!-- End of Content Wrapper --> */}
				</div>
				{/* <!-- End of Page Wrapper --> */}

				{/* <!-- Scroll to Top Button--> */}
				<a className="scroll-to-top rounded" href="#page-top">
					<i className="fas fa-angle-up"></i>
				</a>

				{/* <!-- Logout Modal--> */}
				<div
					className="modal fade"
					id="logoutModal"
					tabindex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">
									Ready to Leave?
								</h5>
								<button
									className="close"
									type="button"
									data-dismiss="modal"
									aria-label="Close">
									<span aria-hidden="true">×</span>
								</button>
							</div>
							<div className="modal-body">
								Select "Logout" below if you are ready to end your current
								session.
							</div>
							<div className="modal-footer">
								<button
									className="btn btn-secondary"
									type="button"
									data-dismiss="modal">
									Cancel
								</button>
								<a className="btn btn-primary" href="login.html">
									Logout
								</a>
							</div>
						</div>
					</div>
				</div>
			</body>
		</div>
	);
};

export default Dashboard;
