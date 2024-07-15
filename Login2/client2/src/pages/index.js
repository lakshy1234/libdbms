import React, {Fragment} from 'react';

function Index(){
    return(
        <Fragment>
            <div className="navbar navbar-default" id="navbar">
			<script type="text/javascript">
				try{ace.settings.check('navbar' , 'fixed')}catch(e){}
			</script>

			<div className="navbar-container" id="navbar-container">
				<div className="navbar-header pull-left">
					<a href="#" className="navbar-brand">
						<small>
							<i className="icon-leaf"></i>
							Ace Admin
						</small>
					</a><!-- /.brand -->
				</div><!-- /.navbar-header -->

				<div className="navbar-header pull-right" role="navigation">
					<ul className="nav ace-nav">
						<li className="grey">
							<a data-toggle="dropdown" className="dropdown-toggle" href="#">
								<i className="icon-tasks"></i>
								<span className="badge badge-grey">4</span>
							</a>

							<ul className="pull-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
								<li className="dropdown-header">
									<i className="icon-ok"></i>
									4 Tasks to complete
								</li>

								<li>
									<a href="#">
										<div className="clearfix">
											<span className="pull-left">Software Update</span>
											<span className="pull-right">65%</span>
										</div>

										<div className="progress progress-mini ">
											<div style="width:65%" className="progress-bar "></div>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										<div className="clearfix">
											<span className="pull-left">Hardware Upgrade</span>
											<span className="pull-right">35%</span>
										</div>

										<div className="progress progress-mini ">
											<div style="width:35%" className="progress-bar progress-bar-danger"></div>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										<div className="clearfix">
											<span className="pull-left">Unit Testing</span>
											<span className="pull-right">15%</span>
										</div>

										<div className="progress progress-mini ">
											<div style="width:15%" className="progress-bar progress-bar-warning"></div>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										<div className="clearfix">
											<span className="pull-left">Bug Fixes</span>
											<span className="pull-right">90%</span>
										</div>

										<div className="progress progress-mini progress-striped active">
											<div style="width:90%" className="progress-bar progress-bar-success"></div>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										See tasks with details
										<i className="icon-arrow-right"></i>
									</a>
								</li>
							</ul>
						</li>

						<li className="purple">
							<a data-toggle="dropdown" className="dropdown-toggle" href="#">
								<i className="icon-bell-alt icon-animated-bell"></i>
								<span className="badge badge-important">8</span>
							</a>

							<ul className="pull-right dropdown-navbar navbar-pink dropdown-menu dropdown-caret dropdown-close">
								<li className="dropdown-header">
									<i className="icon-warning-sign"></i>
									8 Notifications
								</li>

								<li>
									<a href="#">
										<div className="clearfix">
											<span className="pull-left">
												<i className="btn btn-xs no-hover btn-pink icon-comment"></i>
												New Comments
											</span>
											<span className="pull-right badge badge-info">+12</span>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										<i className="btn btn-xs btn-primary icon-user"></i>
										Bob just signed up as an editor ...
									</a>
								</li>

								<li>
									<a href="#">
										<div className="clearfix">
											<span className="pull-left">
												<i className="btn btn-xs no-hover btn-success icon-shopping-cart"></i>
												New Orders
											</span>
											<span className="pull-right badge badge-success">+8</span>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										<div className="clearfix">
											<span className="pull-left">
												<i className="btn btn-xs no-hover btn-info icon-twitter"></i>
												Followers
											</span>
											<span className="pull-right badge badge-info">+11</span>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										See all notifications
										<i className="icon-arrow-right"></i>
									</a>
								</li>
							</ul>
						</li>

						<li className="green">
							<a data-toggle="dropdown" className="dropdown-toggle" href="#">
								<i className="icon-envelope icon-animated-vertical"></i>
								<span className="badge badge-success">5</span>
							</a>

							<ul className="pull-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
								<li className="dropdown-header">
									<i className="icon-envelope-alt"></i>
									5 Messages
								</li>

								<li>
									<a href="#">
										<img src="assets/avatars/avatar.png" className="msg-photo" alt="Alex's Avatar" />
										<span className="msg-body">
											<span className="msg-title">
												<span className="blue">Alex:</span>
												Ciao sociis natoque penatibus et auctor ...
											</span>

											<span className="msg-time">
												<i className="icon-time"></i>
												<span>a moment ago</span>
											</span>
										</span>
									</a>
								</li>

								<li>
									<a href="#">
										<img src="assets/avatars/avatar3.png" className="msg-photo" alt="Susan's Avatar" />
										<span className="msg-body">
											<span className="msg-title">
												<span className="blue">Susan:</span>
												Vestibulum id ligula porta felis euismod ...
											</span>

											<span className="msg-time">
												<i className="icon-time"></i>
												<span>20 minutes ago</span>
											</span>
										</span>
									</a>
								</li>

								<li>
									<a href="#">
										<img src="assets/avatars/avatar4.png" className="msg-photo" alt="Bob's Avatar" />
										<span className="msg-body">
											<span className="msg-title">
												<span className="blue">Bob:</span>
												Nullam quis risus eget urna mollis ornare ...
											</span>

											<span className="msg-time">
												<i className="icon-time"></i>
												<span>3:15 pm</span>
											</span>
										</span>
									</a>
								</li>

								<li>
									<a href="inbox.html">
										See all messages
										<i className="icon-arrow-right"></i>
									</a>
								</li>
							</ul>
						</li>

						<li className="light-blue">
							<a data-toggle="dropdown" href="#" className="dropdown-toggle">
								<img className="nav-user-photo" src="assets/avatars/user.jpg" alt="Jason's Photo" />
								<span className="user-info">
									<small>Welcome,</small>
									Jason
								</span>

								<i className="icon-caret-down"></i>
							</a>

							<ul className="user-menu pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
								<li>
									<a href="#">
										<i className="icon-cog"></i>
										Settings
									</a>
								</li>

								<li>
									<a href="#">
										<i className="icon-user"></i>
										Profile
									</a>
								</li>

								<li className="divider"></li>

								<li>
									<a href="#">
										<i className="icon-off"></i>
										Logout
									</a>
								</li>
							</ul>
						</li>
					</ul><!-- /.ace-nav -->
				</div><!-- /.navbar-header -->
			</div><!-- /.container -->
		</div>

		<div className="main-container" id="main-container">
			<script type="text/javascript">
				try{ace.settings.check('main-container' , 'fixed')}catch(e){}
			</script>

			<div className="main-container-inner">
				<a className="menu-toggler" id="menu-toggler" href="#">
					<span className="menu-text"></span>
				</a>

				<div className="sidebar" id="sidebar">
					<script type="text/javascript">
						try{ace.settings.check('sidebar' , 'fixed')}catch(e){}
					</script>

					<div className="sidebar-shortcuts" id="sidebar-shortcuts">
						<div className="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
							<button className="btn btn-success">
								<i className="icon-signal"></i>
							</button>

							<button className="btn btn-info">
								<i className="icon-pencil"></i>
							</button>

							<button className="btn btn-warning">
								<i className="icon-group"></i>
							</button>

							<button className="btn btn-danger">
								<i className="icon-cogs"></i>
							</button>
						</div>

						<div className="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
							<span className="btn btn-success"></span>

							<span className="btn btn-info"></span>

							<span className="btn btn-warning"></span>

							<span className="btn btn-danger"></span>
						</div>
					</div><!-- #sidebar-shortcuts -->

					<ul className="nav nav-list">
						<li>
							<a href="index.html">
								<i className="icon-dashboard"></i>
								<span className="menu-text"> Dashboard </span>
							</a>
						</li>

						<li>
							<a href="typography.html">
								<i className="icon-text-width"></i>
								<span className="menu-text"> Typography </span>
							</a>
						</li>

						<li>
							<a href="#" className="dropdown-toggle">
								<i className="icon-desktop"></i>
								<span className="menu-text"> UI Elements </span>

								<b className="arrow icon-angle-down"></b>
							</a>

							<ul className="submenu">
								<li>
									<a href="elements.html">
										<i className="icon-double-angle-right"></i>
										Elements
									</a>
								</li>

								<li>
									<a href="buttons.html">
										<i className="icon-double-angle-right"></i>
										Buttons &amp; Icons
									</a>
								</li>

								<li>
									<a href="treeview.html">
										<i className="icon-double-angle-right"></i>
										Treeview
									</a>
								</li>

								<li>
									<a href="jquery-ui.html">
										<i className="icon-double-angle-right"></i>
										jQuery UI
									</a>
								</li>

								<li>
									<a href="nestable-list.html">
										<i className="icon-double-angle-right"></i>
										Nestable Lists
									</a>
								</li>

								<li>
									<a href="#" className="dropdown-toggle">
										<i className="icon-double-angle-right"></i>

										Three Level Menu
										<b className="arrow icon-angle-down"></b>
									</a>

									<ul className="submenu">
										<li>
											<a href="#">
												<i className="icon-leaf"></i>
												Item #1
											</a>
										</li>

										<li>
											<a href="#" className="dropdown-toggle">
												<i className="icon-pencil"></i>

												4th level
												<b className="arrow icon-angle-down"></b>
											</a>

											<ul className="submenu">
												<li>
													<a href="#">
														<i className="icon-plus"></i>
														Add Product
													</a>
												</li>

												<li>
													<a href="#">
														<i className="icon-eye-open"></i>
														View Products
													</a>
												</li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</li>

						<li className="active open">
							<a href="#" className="dropdown-toggle">
								<i className="icon-list"></i>
								<span className="menu-text"> Tables </span>

								<b className="arrow icon-angle-down"></b>
							</a>

							<ul className="submenu">
								<li className="active">
									<a href="tables.html">
										<i className="icon-double-angle-right"></i>
										Simple &amp; Dynamic
									</a>
								</li>

								<li>
									<a href="jqgrid.html">
										<i className="icon-double-angle-right"></i>
										jqGrid plugin
									</a>
								</li>
							</ul>
						</li>

						<li>
							<a href="#" className="dropdown-toggle">
								<i className="icon-edit"></i>
								<span className="menu-text"> Forms </span>

								<b className="arrow icon-angle-down"></b>
							</a>

							<ul className="submenu">
								<li>
									<a href="form-elements.html">
										<i className="icon-double-angle-right"></i>
										Form Elements
									</a>
								</li>

								<li>
									<a href="form-wizard.html">
										<i className="icon-double-angle-right"></i>
										Wizard &amp; Validation
									</a>
								</li>

								<li>
									<a href="wysiwyg.html">
										<i className="icon-double-angle-right"></i>
										Wysiwyg &amp; Markdown
									</a>
								</li>

								<li>
									<a href="dropzone.html">
										<i className="icon-double-angle-right"></i>
										Dropzone File Upload
									</a>
								</li>
							</ul>
						</li>

						<li>
							<a href="widgets.html">
								<i className="icon-list-alt"></i>
								<span className="menu-text"> Widgets </span>
							</a>
						</li>

						<li>
							<a href="calendar.html">
								<i className="icon-calendar"></i>

								<span className="menu-text">
									Calendar
									<span className="badge badge-transparent tooltip-error" title="2&nbsp;Important&nbsp;Events">
										<i className="icon-warning-sign red bigger-130"></i>
									</span>
								</span>
							</a>
						</li>

						<li>
							<a href="gallery.html">
								<i className="icon-picture"></i>
								<span className="menu-text"> Gallery </span>
							</a>
						</li>

						<li>
							<a href="#" className="dropdown-toggle">
								<i className="icon-tag"></i>
								<span className="menu-text"> More Pages </span>

								<b className="arrow icon-angle-down"></b>
							</a>

							<ul className="submenu">
								<li>
									<a href="profile.html">
										<i className="icon-double-angle-right"></i>
										User Profile
									</a>
								</li>

								<li>
									<a href="inbox.html">
										<i className="icon-double-angle-right"></i>
										Inbox
									</a>
								</li>

								<li>
									<a href="pricing.html">
										<i className="icon-double-angle-right"></i>
										Pricing Tables
									</a>
								</li>

								<li>
									<a href="invoice.html">
										<i className="icon-double-angle-right"></i>
										Invoice
									</a>
								</li>

								<li>
									<a href="timeline.html">
										<i className="icon-double-angle-right"></i>
										Timeline
									</a>
								</li>

								<li>
									<a href="login.html">
										<i className="icon-double-angle-right"></i>
										Login &amp; Register
									</a>
								</li>
							</ul>
						</li>

						<li>
							<a href="#" className="dropdown-toggle">
								<i className="icon-file-alt"></i>

								<span className="menu-text">
									Other Pages
									<span className="badge badge-primary ">5</span>
								</span>

								<b className="arrow icon-angle-down"></b>
							</a>

							<ul className="submenu">
								<li>
									<a href="faq.html">
										<i className="icon-double-angle-right"></i>
										FAQ
									</a>
								</li>

								<li>
									<a href="error-404.html">
										<i className="icon-double-angle-right"></i>
										Error 404
									</a>
								</li>

								<li>
									<a href="error-500.html">
										<i className="icon-double-angle-right"></i>
										Error 500
									</a>
								</li>

								<li>
									<a href="grid.html">
										<i className="icon-double-angle-right"></i>
										Grid
									</a>
								</li>

								<li>
									<a href="blank.html">
										<i className="icon-double-angle-right"></i>
										Blank Page
									</a>
								</li>
							</ul>
						</li>
					</ul><!-- /.nav-list -->

					<div className="sidebar-collapse" id="sidebar-collapse">
						<i className="icon-double-angle-left" data-icon1="icon-double-angle-left" data-icon2="icon-double-angle-right"></i>
					</div>

					<script type="text/javascript">
						try{ace.settings.check('sidebar' , 'collapsed')}catch(e){}
					</script>
				</div>

				<div className="main-content">
					<div className="breadcrumbs" id="breadcrumbs">
						<script type="text/javascript">
							try{ace.settings.check('breadcrumbs' , 'fixed')}catch(e){}
						</script>

						<ul className="breadcrumb">
							<li>
								<i className="icon-home home-icon"></i>
								<a href="#">Home</a>
							</li>

							<li>
								<a href="#">Tables</a>
							</li>
							<li className="active">Simple &amp; Dynamic</li>
						</ul><!-- .breadcrumb -->

						<div className="nav-search" id="nav-search">
							<form className="form-search">
								<span className="input-icon">
									<input type="text" placeholder="Search ..." className="nav-search-input" id="nav-search-input" autocomplete="off" />
									<i className="icon-search nav-search-icon"></i>
								</span>
							</form>
						</div><!-- #nav-search -->
					</div>

					<div className="page-content">
						<div className="page-header">
							<h1>
								Tables
								<small>
									<i className="icon-double-angle-right"></i>
									Static &amp; Dynamic Tables
								</small>
							</h1>
						</div><!-- /.page-header -->

						<div className="row">
							<div className="col-xs-12">
								<!-- PAGE CONTENT BEGINS -->

								<div className="row">
									<div className="col-xs-12">
										<div className="table-responsive">
											<table id="sample-table-1" className="table table-striped table-bordered table-hover">
												<thead>
													<tr>
														<th className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</th>
														<th>Domain</th>
														<th>Price</th>
														<th className="hidden-480">Clicks</th>

														<th>
															<i className="icon-time bigger-110 hidden-480"></i>
															Update
														</th>
														<th className="hidden-480">Status</th>

														<th></th>
													</tr>
												</thead>

												<tbody>
													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">ace.com</a>
														</td>
														<td>$45</td>
														<td className="hidden-480">3,330</td>
														<td>Feb 12</td>

														<td className="hidden-480">
															<span className="label label-sm label-warning">Expiring</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs btn-group">
																<button className="btn btn-xs btn-success">
																	<i className="icon-ok bigger-120"></i>
																</button>

																<button className="btn btn-xs btn-info">
																	<i className="icon-edit bigger-120"></i>
																</button>

																<button className="btn btn-xs btn-danger">
																	<i className="icon-trash bigger-120"></i>
																</button>

																<button className="btn btn-xs btn-warning">
																	<i className="icon-flag bigger-120"></i>
																</button>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-cog icon-only bigger-110"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">base.com</a>
														</td>
														<td>$35</td>
														<td className="hidden-480">2,595</td>
														<td>Feb 18</td>

														<td className="hidden-480">
															<span className="label label-sm label-success">Registered</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs btn-group">
																<button className="btn btn-xs btn-success">
																	<i className="icon-ok bigger-120"></i>
																</button>

																<button className="btn btn-xs btn-info">
																	<i className="icon-edit bigger-120"></i>
																</button>

																<button className="btn btn-xs btn-danger">
																	<i className="icon-trash bigger-120"></i>
																</button>

																<button className="btn btn-xs btn-warning">
																	<i className="icon-flag bigger-120"></i>
																</button>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-cog icon-only bigger-110"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">max.com</a>
														</td>
														<td>$60</td>
														<td className="hidden-480">4,400</td>
														<td>Mar 11</td>

														<td className="hidden-480">
															<span className="label label-sm label-warning">Expiring</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs btn-group">
																<button className="btn btn-xs btn-success">
																	<i className="icon-ok bigger-120"></i>
																</button>

																<button className="btn btn-xs btn-info">
																	<i className="icon-edit bigger-120"></i>
																</button>

																<button className="btn btn-xs btn-danger">
																	<i className="icon-trash bigger-120"></i>
																</button>

																<button className="btn btn-xs btn-warning">
																	<i className="icon-flag bigger-120"></i>
																</button>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-cog icon-only bigger-110"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">best.com</a>
														</td>
														<td>$75</td>
														<td className="hidden-480">6,500</td>
														<td>Apr 03</td>

														<td className="hidden-480">
															<span className="label label-sm label-inverse arrowed-in">Flagged</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs btn-group">
																<button className="btn btn-xs btn-success">
																	<i className="icon-ok bigger-120"></i>
																</button>

																<button className="btn btn-xs btn-info">
																	<i className="icon-edit bigger-120"></i>
																</button>

																<button className="btn btn-xs btn-danger">
																	<i className="icon-trash bigger-120"></i>
																</button>

																<button className="btn btn-xs btn-warning">
																	<i className="icon-flag bigger-120"></i>
																</button>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-cog icon-only bigger-110"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">pro.com</a>
														</td>
														<td>$55</td>
														<td className="hidden-480">4,250</td>
														<td>Jan 21</td>

														<td className="hidden-480">
															<span className="label label-sm label-success">Registered</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs btn-group">
																<button className="btn btn-xs btn-success">
																	<i className="icon-ok bigger-120"></i>
																</button>

																<button className="btn btn-xs btn-info">
																	<i className="icon-edit bigger-120"></i>
																</button>

																<button className="btn btn-xs btn-danger">
																	<i className="icon-trash bigger-120"></i>
																</button>

																<button className="btn btn-xs btn-warning">
																	<i className="icon-flag bigger-120"></i>
																</button>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-cog icon-only bigger-110"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div><!-- /.table-responsive -->
									</div><!-- /span -->
								</div><!-- /row -->

								<div className="hr hr-18 dotted hr-double"></div>

								<h4 className="pink">
									<i className="icon-hand-right icon-animated-hand-pointer blue"></i>
									<a href="#modal-table" role="button" className="green" data-toggle="modal"> Table Inside a Modal Box </a>
								</h4>

								<div className="hr hr-18 dotted hr-double"></div>

								<div className="row">
									<div className="col-xs-12">
										<h3 className="header smaller lighter blue">jQuery dataTables</h3>
										<div className="table-header">
											Results for "Latest Registered Domains"
										</div>

										<div className="table-responsive">
											<table id="sample-table-2" className="table table-striped table-bordered table-hover">
												<thead>
													<tr>
														<th className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</th>
														<th>Domain</th>
														<th>Price</th>
														<th className="hidden-480">Clicks</th>

														<th>
															<i className="icon-time bigger-110 hidden-480"></i>
															Update
														</th>
														<th className="hidden-480">Status</th>

														<th></th>
													</tr>
												</thead>

												<tbody>
													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">app.com</a>
														</td>
														<td>$45</td>
														<td className="hidden-480">3,330</td>
														<td>Feb 12</td>

														<td className="hidden-480">
															<span className="label label-sm label-warning">Expiring</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">base.com</a>
														</td>
														<td>$35</td>
														<td className="hidden-480">2,595</td>
														<td>Feb 18</td>

														<td className="hidden-480">
															<span className="label label-sm label-success">Registered</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">max.com</a>
														</td>
														<td>$60</td>
														<td className="hidden-480">4,400</td>
														<td>Mar 11</td>

														<td className="hidden-480">
															<span className="label label-sm label-warning">Expiring</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">best.com</a>
														</td>
														<td>$75</td>
														<td className="hidden-480">6,500</td>
														<td>Apr 03</td>

														<td className="hidden-480">
															<span className="label label-sm label-inverse arrowed-in">Flagged</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">pro.com</a>
														</td>
														<td>$55</td>
														<td className="hidden-480">4,250</td>
														<td>Jan 21</td>

														<td className="hidden-480">
															<span className="label label-sm label-success">Registered</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">team.com</a>
														</td>
														<td>$40</td>
														<td className="hidden-480">3,200</td>
														<td>Feb 09</td>

														<td className="hidden-480">
															<span className="label label-sm label-inverse arrowed-in">Flagged</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">up.com</a>
														</td>
														<td>$95</td>
														<td className="hidden-480">8,520</td>
														<td>Feb 22</td>

														<td className="hidden-480">
															<span className="label label-sm label-info arrowed arrowed-righ">Sold</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">view.com</a>
														</td>
														<td>$45</td>
														<td className="hidden-480">4,100</td>
														<td>Mar 12</td>

														<td className="hidden-480">
															<span className="label label-sm label-success">Registered</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">nice.com</a>
														</td>
														<td>$38</td>
														<td className="hidden-480">3,940</td>
														<td>Feb 12</td>

														<td className="hidden-480">
															<span className="label label-sm label-info arrowed arrowed-righ">Sold</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">fine.com</a>
														</td>
														<td>$25</td>
														<td className="hidden-480">2,983</td>
														<td>Apr 01</td>

														<td className="hidden-480">
															<span className="label label-sm label-warning">Expiring</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">good.com</a>
														</td>
														<td>$50</td>
														<td className="hidden-480">6,500</td>
														<td>Feb 02</td>

														<td className="hidden-480">
															<span className="label label-sm label-inverse arrowed-in">Flagged</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">great.com</a>
														</td>
														<td>$55</td>
														<td className="hidden-480">6,400</td>
														<td>Feb 24</td>

														<td className="hidden-480">
															<span className="label label-sm label-success">Registered</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">shine.com</a>
														</td>
														<td>$25</td>
														<td className="hidden-480">2,200</td>
														<td>Apr 01</td>

														<td className="hidden-480">
															<span className="label label-sm label-inverse arrowed-in">Flagged</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">rise.com</a>
														</td>
														<td>$42</td>
														<td className="hidden-480">3,900</td>
														<td>Feb 01</td>

														<td className="hidden-480">
															<span className="label label-sm label-info arrowed arrowed-righ">Sold</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">above.com</a>
														</td>
														<td>$35</td>
														<td className="hidden-480">3,420</td>
														<td>Mar 12</td>

														<td className="hidden-480">
															<span className="label label-sm label-warning">Expiring</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">share.com</a>
														</td>
														<td>$30</td>
														<td className="hidden-480">3,200</td>
														<td>Feb 11</td>

														<td className="hidden-480">
															<span className="label label-sm label-info arrowed arrowed-righ">Sold</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">fair.com</a>
														</td>
														<td>$35</td>
														<td className="hidden-480">3,900</td>
														<td>Mar 26</td>

														<td className="hidden-480">
															<span className="label label-sm label-inverse arrowed-in">Flagged</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">year.com</a>
														</td>
														<td>$48</td>
														<td className="hidden-480">3,990</td>
														<td>Feb 15</td>

														<td className="hidden-480">
															<span className="label label-sm label-warning">Expiring</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">day.com</a>
														</td>
														<td>$55</td>
														<td className="hidden-480">5,600</td>
														<td>Jan 29</td>

														<td className="hidden-480">
															<span className="label label-sm label-info arrowed arrowed-righ">Sold</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">light.com</a>
														</td>
														<td>$40</td>
														<td className="hidden-480">3,100</td>
														<td>Feb 17</td>

														<td className="hidden-480">
															<span className="label label-sm label-success">Registered</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">sight.com</a>
														</td>
														<td>$58</td>
														<td className="hidden-480">6,100</td>
														<td>Feb 19</td>

														<td className="hidden-480">
															<span className="label label-sm label-inverse arrowed-in">Flagged</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">right.com</a>
														</td>
														<td>$50</td>
														<td className="hidden-480">4,400</td>
														<td>Apr 01</td>

														<td className="hidden-480">
															<span className="label label-sm label-warning">Expiring</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>

													<tr>
														<td className="center">
															<label>
																<input type="checkbox" className="ace" />
																<span className="lbl"></span>
															</label>
														</td>

														<td>
															<a href="#">once.com</a>
														</td>
														<td>$20</td>
														<td className="hidden-480">1,400</td>
														<td>Apr 04</td>

														<td className="hidden-480">
															<span className="label label-sm label-info arrowed arrowed-righ">Sold</span>
														</td>

														<td>
															<div className="visible-md visible-lg hidden-sm hidden-xs action-buttons">
																<a className="blue" href="#">
																	<i className="icon-zoom-in bigger-130"></i>
																</a>

																<a className="green" href="#">
																	<i className="icon-pencil bigger-130"></i>
																</a>

																<a className="red" href="#">
																	<i className="icon-trash bigger-130"></i>
																</a>
															</div>

															<div className="visible-xs visible-sm hidden-md hidden-lg">
																<div className="inline position-relative">
																	<button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown">
																		<i className="icon-caret-down icon-only bigger-120"></i>
																	</button>

																	<ul className="dropdown-menu dropdown-only-icon dropdown-yellow pull-right dropdown-caret dropdown-close">
																		<li>
																			<a href="#" className="tooltip-info" data-rel="tooltip" title="View">
																				<span className="blue">
																					<i className="icon-zoom-in bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
																				<span className="green">
																					<i className="icon-edit bigger-120"></i>
																				</span>
																			</a>
																		</li>

																		<li>
																			<a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
																				<span className="red">
																					<i className="icon-trash bigger-120"></i>
																				</span>
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>

								<div id="modal-table" className="modal fade" tabindex="-1">
									<div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-header no-padding">
												<div className="table-header">
													<button type="button" className="close" data-dismiss="modal" aria-hidden="true">
														<span className="white">&times;</span>
													</button>
													Results for "Latest Registered Domains
												</div>
											</div>

											<div className="modal-body no-padding">
												<table className="table table-striped table-bordered table-hover no-margin-bottom no-border-top">
													<thead>
														<tr>
															<th>Domain</th>
															<th>Price</th>
															<th>Clicks</th>

															<th>
																<i className="icon-time bigger-110"></i>
																Update
															</th>
														</tr>
													</thead>

													<tbody>
														<tr>
															<td>
																<a href="#">ace.com</a>
															</td>
															<td>$45</td>
															<td>3,330</td>
															<td>Feb 12</td>
														</tr>

														<tr>
															<td>
																<a href="#">base.com</a>
															</td>
															<td>$35</td>
															<td>2,595</td>
															<td>Feb 18</td>
														</tr>

														<tr>
															<td>
																<a href="#">max.com</a>
															</td>
															<td>$60</td>
															<td>4,400</td>
															<td>Mar 11</td>
														</tr>

														<tr>
															<td>
																<a href="#">best.com</a>
															</td>
															<td>$75</td>
															<td>6,500</td>
															<td>Apr 03</td>
														</tr>

														<tr>
															<td>
																<a href="#">pro.com</a>
															</td>
															<td>$55</td>
															<td>4,250</td>
															<td>Jan 21</td>
														</tr>
													</tbody>
												</table>
											</div>

											<div className="modal-footer no-margin-top">
												<button className="btn btn-sm btn-danger pull-left" data-dismiss="modal">
													<i className="icon-remove"></i>
													Close
												</button>

												<ul className="pagination pull-right no-margin">
													<li className="prev disabled">
														<a href="#">
															<i className="icon-double-angle-left"></i>
														</a>
													</li>

													<li className="active">
														<a href="#">1</a>
													</li>

													<li>
														<a href="#">2</a>
													</li>

													<li>
														<a href="#">3</a>
													</li>

													<li className="next">
														<a href="#">
															<i className="icon-double-angle-right"></i>
														</a>
													</li>
												</ul>
											</div>
										</div><!-- /.modal-content -->
									</div><!-- /.modal-dialog -->
								</div><!-- PAGE CONTENT ENDS -->
							</div><!-- /.col -->
						</div><!-- /.row -->
					</div><!-- /.page-content -->
				</div><!-- /.main-content -->

				<div className="ace-settings-container" id="ace-settings-container">
					<div className="btn btn-app btn-xs btn-warning ace-settings-btn" id="ace-settings-btn">
						<i className="icon-cog bigger-150"></i>
					</div>

					<div className="ace-settings-box" id="ace-settings-box">
						<div>
							<div className="pull-left">
								<select id="skin-colorpicker" className="hide">
									<option data-skin="default" value="#438EB9">#438EB9</option>
									<option data-skin="skin-1" value="#222A2D">#222A2D</option>
									<option data-skin="skin-2" value="#C6487E">#C6487E</option>
									<option data-skin="skin-3" value="#D0D0D0">#D0D0D0</option>
								</select>
							</div>
							<span>&nbsp; Choose Skin</span>
						</div>

						<div>
							<input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-navbar" />
							<label className="lbl" for="ace-settings-navbar"> Fixed Navbar</label>
						</div>

						<div>
							<input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-sidebar" />
							<label className="lbl" for="ace-settings-sidebar"> Fixed Sidebar</label>
						</div>

						<div>
							<input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-breadcrumbs" />
							<label className="lbl" for="ace-settings-breadcrumbs"> Fixed Breadcrumbs</label>
						</div>

						<div>
							<input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-rtl" />
							<label className="lbl" for="ace-settings-rtl"> Right To Left (rtl)</label>
						</div>

						<div>
							<input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-add-container" />
							<label className="lbl" for="ace-settings-add-container">
								Inside
								<b>.container</b>
							</label>
						</div>
					</div>
				</div><!-- /#ace-settings-container -->
			</div><!-- /.main-container-inner -->

			<a href="#" id="btn-scroll-up" className="btn-scroll-up btn btn-sm btn-inverse">
				<i className="icon-double-angle-up icon-only bigger-110"></i>
			</a>
		</div><!-- /.main-container -->

		<!-- basic scripts -->

		<!--[if !IE]> -->

		<script type="text/javascript">
			window.jQuery || document.write("<script src='assets/js/jquery-2.0.3.min.js'>"+"<"+"/script>");
		</script>

		<!-- <![endif]-->

		<!--[if IE]>
<script type="text/javascript">
 window.jQuery || document.write("<script src='assets/js/jquery-1.10.2.min.js'>"+"<"+"/script>");
</script>
<![endif]-->

		<script type="text/javascript">
			if("ontouchend" in document) document.write("<script src='assets/js/jquery.mobile.custom.min.js'>"+"<"+"/script>");
		</script>
		<script src="assets/js/bootstrap.min.js"></script>
		<script src="assets/js/typeahead-bs2.min.js"></script>

		<!-- page specific plugin scripts -->

		<script src="assets/js/jquery.dataTables.min.js"></script>
		<script src="assets/js/jquery.dataTables.bootstrap.js"></script>

		<!-- ace scripts -->

		<script src="assets/js/ace-elements.min.js"></script>
		<script src="assets/js/ace.min.js"></script>

		<!-- inline scripts related to this page -->

		<script type="text/javascript">
			jQuery(function($) {
				var oTable1 = $('#sample-table-2').dataTable( {
				"aoColumns": [
			      { "bSortable": false },
			      null, null,null, null, null,
				  { "bSortable": false }
				] } );
				
				
				$('table th input:checkbox').on('click' , function(){
					var that = this;
					$(this).closest('table').find('tr > td:first-child input:checkbox')
					.each(function(){
						this.checked = that.checked;
						$(this).closest('tr').toggleclassName('selected');
					});
						
				});
			
			
				$('[data-rel="tooltip"]').tooltip({placement: tooltip_placement});
				function tooltip_placement(context, source) {
					var $source = $(source);
					var $parent = $source.closest('table')
					var off1 = $parent.offset();
					var w1 = $parent.width();
			
					var off2 = $source.offset();
					var w2 = $source.width();
			
					if( parseInt(off2.left) < parseInt(off1.left) + parseInt(w1 / 2) ) return 'right';
					return 'left';
				}
			})
		</script>
        </Fragment>
    )
}
export default Index;