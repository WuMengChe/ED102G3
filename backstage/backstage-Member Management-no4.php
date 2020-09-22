<?php
$errMsg = '';
try{
    require_once('./connectMySql.php');
    $sql = "update member set   MEM_NO=:MEM_NO,
                                MEM_NAME=:MEM_NAME,
                                MEM_TEL=:MEM_TEL,
                                MEM_EMAIL=:MEM_EMAIL,
                                MEM_USE=:MEM_USE   where MEM_NO = 4";
    $member = $pdo->prepare($sql);
    $member->bindValue(':MEM_NO',$_POST['MEM_NO']);
    $member->bindValue(':MEM_NAME',$_POST['MEM_NAME']);
    $member->bindValue(':MEM_TEL',$_POST['MEM_TEL']);
    $member->bindValue(':MEM_EMAIL',$_POST['MEM_EMAIL']);
    $member->bindValue(':MEM_USE',$_POST['MEM_USE']);
    $member->execute();
}catch(PDOException $e){
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
  <title>CoreUI Free Bootstrap Admin Template</title>
  <!-- Icons-->
  <link href="node_modules/@coreui/icons/css/coreui-icons.min.css" rel="stylesheet">
  <link href="node_modules/flag-icon-css/css/flag-icon.min.css" rel="stylesheet">
  <link href="node_modules/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link href="node_modules/simple-line-icons/css/simple-line-icons.css" rel="stylesheet">
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
  <script src="https://use.fontawesome.com/79072b09c8.js"></script>
  <!-- Main styles for this application-->
  <link href="css/style.css" rel="stylesheet">
</head>

<body class="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">
  <!-- top_header -->
  <header class="app-header navbar">
    <button class="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
    <span class="navbar-toggler-icon"></span>
  </button>
    <a class="navbar-brand">
        <img class="navbar-brand-full" src="../img/LOGO_FINAL.svg" width="auto" height="40" alt="CoreUI Logo">
    </a>
    <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
    <span class="navbar-toggler-icon"></span>
  </button>

    <ul class="nav navbar-nav ml-auto">
        <li class="nav-item d-md-down-none">
            <a class="nav-link" href="#">
                <i class="icon-bell"></i>
                <span class="badge badge-pill badge-danger">5</span>
            </a>
        </li>
        <li class="nav-item d-md-down-none">
            <a class="nav-link" href="#">
                <i class="icon-list"></i>
            </a>
        </li>
        <li class="nav-item d-md-down-none">
            <a class="nav-link" href="#">
                <i class="icon-location-pin"></i>
            </a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <img class="img-avatar" src="../img/logo.svg" alt="admin@bootstrapmaster.com">
            </a>
            <div class="dropdown-menu dropdown-menu-right">
                <div class="dropdown-header text-center">
                    <strong>Account</strong>
                </div>
                <a class="dropdown-item" href="#">
                    <i class="fa fa-bell-o"></i> Updates
                    <span class="badge badge-info">42</span>
                </a>
                <a class="dropdown-item" href="#">
                    <i class="fa fa-envelope-o"></i> Messages
                    <span class="badge badge-success">42</span>
                </a>
                <a class="dropdown-item" href="#">
                    <i class="fa fa-tasks"></i> Tasks
                    <span class="badge badge-danger">42</span>
                </a>
                <a class="dropdown-item" href="#">
                    <i class="fa fa-comments"></i> Comments
                    <span class="badge badge-warning">42</span>
                </a>
                <div class="dropdown-header text-center">
                    <strong>Settings</strong>
                </div>
                <a class="dropdown-item" href="#">
                    <i class="fa fa-user"></i> Profile</a>
                <a class="dropdown-item" href="#">
                    <i class="fa fa-wrench"></i> Settings</a>
                <a class="dropdown-item" href="#">
                    <i class="fa fa-usd"></i> Payments
                    <span class="badge badge-secondary">42</span>
                </a>
                <a class="dropdown-item" href="#">
                    <i class="fa fa-file"></i> Projects
                    <span class="badge badge-primary">42</span>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                    <i class="fa fa-shield"></i> Lock Account</a>
                <a class="dropdown-item" href="#">
                    <i class="fa fa-lock"></i> Logout</a>
            </div>
        </li>
    </ul>
    <button class="navbar-toggler aside-menu-toggler d-md-down-none" type="button" data-toggle="aside-menu-lg-show">
    <a href="#">登出</a>
  </button>
    <!-- <button class="navbar-toggler aside-menu-toggler d-lg-none" type="button" data-toggle="aside-menu-show">
    <span class="navbar-toggler-icon"></span>
  </button> -->
</header>
  <div class="app-body">
    <div class="sidebar">
      <!-- sidebar menu-->
      <nav class="sidebar-nav">
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link" href="index.html">
        <i class="nav-icon icon-speedometer"></i>安妮,你好

      </a>
    </li>
    <li class="nav-title">人員管理</li>
    <li class="nav-item">
      <a class="nav-link" href="colors.html">
        <i class="nav-icon icon-drop"></i> 會員管理</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="typography.html">
        <i class="nav-icon icon-pencil"></i>管理員管理</a>
    </li>
    <li class="nav-title">後台管理</li>
    <li class="nav-item nav-dropdown">
      <a class="nav-link nav-dropdown-toggle" href="#">
        <i class="nav-icon icon-puzzle"></i>題庫管理</a>
      <ul class="nav-dropdown-items">
        <li class="nav-item">
          <a class="nav-link" href="base/breadcrumb.html">
            <i class="nav-icon icon-puzzle"></i>實作型</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="base/cards.html">
            <i class="nav-icon icon-puzzle"></i>研究型</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="base/carousel.html">
            <i class="nav-icon icon-puzzle"></i>文藝型</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="base/collapse.html">
            <i class="nav-icon icon-puzzle"></i>社會型</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="base/forms.html">
            <i class="nav-icon icon-puzzle"></i>企業型</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="base/jumbotron.html">
            <i class="nav-icon icon-puzzle"></i>事務型</a>
        </li>
      </ul>
    </li>
    <li class="nav-item nav-dropdown">
      <a class="nav-link nav-dropdown-toggle" href="#">
        <i class="nav-icon icon-cursor"></i>行業管理</a>
      <ul class="nav-dropdown-items">
        <li class="nav-item">
          <a class="nav-link" href="buttons/buttons.html">
            <i class="nav-icon icon-cursor"></i>實作型</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="buttons/button-group.html">
            <i class="nav-icon icon-cursor"></i>研究型</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="buttons/dropdowns.html">
            <i class="nav-icon icon-cursor"></i>文藝型</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="buttons/brand-buttons.html">
            <i class="nav-icon icon-cursor"></i>社會型</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="base/forms.html">
            <i class="nav-icon icon-puzzle"></i>企業型</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="base/jumbotron.html">
            <i class="nav-icon icon-puzzle"></i>事務型</a>
        </li>
      </ul>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="charts.html">
        <i class="nav-icon icon-pie-chart"></i>課程管理</a>
    </li>
    <li class="nav-item nav-dropdown">
      <a class="nav-link nav-dropdown-toggle" href="#">
        <i class="nav-icon icon-star"></i>文章檢舉管理</a>
      <ul class="nav-dropdown-items">
        <li class="nav-item">
          <a class="nav-link" href="icons/coreui-icons.html">
            <i class="nav-icon icon-star"></i> CoreUI Icons
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="icons/flags.html">
            <i class="nav-icon icon-star"></i> Flags</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="icons/font-awesome.html">
            <i class="nav-icon icon-star"></i> Font Awesome
            <span class="badge badge-secondary">4.7</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="icons/simple-line-icons.html">
            <i class="nav-icon icon-star"></i> Simple Line Icons</a>
        </li>
      </ul>
    </li>
    <li class="nav-item nav-dropdown">
      <a class="nav-link nav-dropdown-toggle" href="#">
        <i class="nav-icon icon-bell"></i>訂單管理</a>
      <ul class="nav-dropdown-items">
        <li class="nav-item">
          <a class="nav-link" href="notifications/alerts.html">
            <i class="nav-icon icon-bell"></i> Alerts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="notifications/badge.html">
            <i class="nav-icon icon-bell"></i> Badge</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="notifications/modals.html">
            <i class="nav-icon icon-bell"></i> Modals</a>
        </li>
      </ul>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="widgets.html">
        <i class="nav-icon icon-calculator"></i>明信片素材管理
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="widgets.html">
        <i class="nav-icon icon-calculator"></i>座談會管理
      </a>
    </li>


  </ul>
</nav>
      <button class="sidebar-minimizer brand-minimizer" type="button"></button>
    </div>
    <main class="main">
      <!-- Breadcrumb-->
      <ol class="breadcrumb">
        <li class="breadcrumb-item">Home</li>
        <li class="breadcrumb-item">
          <a href="#">人員管理</a>
        </li>
        <li class="breadcrumb-item active">會員</li>
        <!-- Breadcrumb Menu-->
        <li class="breadcrumb-menu d-md-down-none">
          <div class="btn-group" role="group" aria-label="Button group">
            <a class="btn" href="#">
              <i class="icon-speech"></i>
            </a>
          </div>
        </li>
      </ol>
      <div class="container-fluid">

        <!-- 中間內容 -->
        <div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">會員管理</div>
            <div class="card-body">
                <div class="search">
                    <input type="search" name="" id="member_search" class="col-md-6 col-10">
                    <button class="btn btn-outline-primary" type="button">查詢</button>
                </div>
                <table class="table table-responsive-sm table-sm">
                    <thead>
                        <tr>
                            <th>會員名稱</th>
                            <th>生日</th>
                            <th>電話</th>
                            <th>電子郵件</th>
                            <th>公告權限</th>
                            <th>是否停權</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Annie</td>
                            <td>2012/01/01</td>
                            <td>0919865432</td>
                            <td>12345@gmail.com</td>
                            <td>有
                                <select name="authority" id="">
                  <option value="authority">有</option>
                  <option value="authority">無</option>
                </select>
                            </td>
                            <td>
                                <span class="badge badge-success">Active</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Judy</td>
                            <td>2012/02/01</td>
                            <td>0919865432</td>
                            <td>12345@gmail.com</td>
                            <td>無
                                <select name="authority" id="">
                  <option value="authority">有</option>
                  <option value="authority">無</option>
                </select>
                            </td>
                            <td>
                                <span class="badge badge-danger">Banned</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Zoe</td>
                            <td>2012/02/01</td>
                            <td>0919865432</td>
                            <td>12345@gmail.com</td>
                            <td>無
                                <select name="authority" id="">
                  <option value="authority">有</option>
                  <option value="authority">無</option>
                </select>
                            </td>
                            <td>
                                <span class="badge badge-success">Active</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Jing</td>
                            <td>2012/03/01</td>
                            <td>0919865432</td>
                            <td>12345@gmail.com</td>
                            <td>無
                                <select name="authority" id="">
                  <option value="authority">有</option>
                  <option value="authority">無</option>
                </select>
                            </td>
                            <td>
                                <span class="badge badge-success">Active</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Lin</td>
                            <td>2012/01/21</td>
                            <td>0919865432</td>
                            <td>12345@gmail.com</td>
                            <td>無
                                <select name="authority" id="">
                  <option value="authority">有</option>
                  <option value="authority">無</option>
                </select>
                            </td>
                            <td>
                                <span class="badge badge-success">Active</span>
                            </td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    </div>
</div>
        <!-- end -->
      </div>
    </main>
    <aside class="aside-menu">
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" data-toggle="tab" href="#timeline" role="tab">
            <i class="icon-list"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#messages" role="tab">
            <i class="icon-speech"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#settings" role="tab">
            <i class="icon-settings"></i>
          </a>
        </li>
      </ul>
      <!-- Tab panes-->
      <div class="tab-content">
        <div class="tab-pane active" id="timeline" role="tabpanel">
          <div class="list-group list-group-accent">
            <div
              class="list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">
              Today</div>
            <div class="list-group-item list-group-item-accent-warning list-group-item-divider">
              <div class="avatar float-right">
                <img class="img-avatar" src="img/avatars/7.jpg" alt="admin@bootstrapmaster.com">
              </div>
              <div>Meeting with
                <strong>Lucas</strong>
              </div>
              <small class="text-muted mr-3">
                <i class="icon-calendar"></i>  1 - 3pm</small>
              <small class="text-muted">
                <i class="icon-location-pin"></i>  Palo Alto, CA</small>
            </div>
            <div class="list-group-item list-group-item-accent-info">
              <div class="avatar float-right">
                <img class="img-avatar" src="img/avatars/4.jpg" alt="admin@bootstrapmaster.com">
              </div>
              <div>Skype with
                <strong>Megan</strong>
              </div>
              <small class="text-muted mr-3">
                <i class="icon-calendar"></i>  4 - 5pm</small>
              <small class="text-muted">
                <i class="icon-social-skype"></i>  On-line</small>
            </div>
            <div
              class="list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">
              Tomorrow</div>
            <div class="list-group-item list-group-item-accent-danger list-group-item-divider">
              <div>New UI Project -
                <strong>deadline</strong>
              </div>
              <small class="text-muted mr-3">
                <i class="icon-calendar"></i>  10 - 11pm</small>
              <small class="text-muted">
                <i class="icon-home"></i>  creativeLabs HQ</small>
              <div class="avatars-stack mt-2">
                <div class="avatar avatar-xs">
                  <img class="img-avatar" src="img/avatars/2.jpg" alt="admin@bootstrapmaster.com">
                </div>
                <div class="avatar avatar-xs">
                  <img class="img-avatar" src="img/avatars/3.jpg" alt="admin@bootstrapmaster.com">
                </div>
                <div class="avatar avatar-xs">
                  <img class="img-avatar" src="img/avatars/4.jpg" alt="admin@bootstrapmaster.com">
                </div>
                <div class="avatar avatar-xs">
                  <img class="img-avatar" src="img/avatars/5.jpg" alt="admin@bootstrapmaster.com">
                </div>
                <div class="avatar avatar-xs">
                  <img class="img-avatar" src="img/avatars/6.jpg" alt="admin@bootstrapmaster.com">
                </div>
              </div>
            </div>
            <div class="list-group-item list-group-item-accent-success list-group-item-divider">
              <div>
                <strong>#10 Startups.Garden</strong> Meetup</div>
              <small class="text-muted mr-3">
                <i class="icon-calendar"></i>  1 - 3pm</small>
              <small class="text-muted">
                <i class="icon-location-pin"></i>  Palo Alto, CA</small>
            </div>
            <div class="list-group-item list-group-item-accent-primary list-group-item-divider">
              <div>
                <strong>Team meeting</strong>
              </div>
              <small class="text-muted mr-3">
                <i class="icon-calendar"></i>  4 - 6pm</small>
              <small class="text-muted">
                <i class="icon-home"></i>  creativeLabs HQ</small>
              <div class="avatars-stack mt-2">
                <div class="avatar avatar-xs">
                  <img class="img-avatar" src="img/avatars/2.jpg" alt="admin@bootstrapmaster.com">
                </div>
                <div class="avatar avatar-xs">
                  <img class="img-avatar" src="img/avatars/3.jpg" alt="admin@bootstrapmaster.com">
                </div>
                <div class="avatar avatar-xs">
                  <img class="img-avatar" src="img/avatars/4.jpg" alt="admin@bootstrapmaster.com">
                </div>
                <div class="avatar avatar-xs">
                  <img class="img-avatar" src="img/avatars/5.jpg" alt="admin@bootstrapmaster.com">
                </div>
                <div class="avatar avatar-xs">
                  <img class="img-avatar" src="img/avatars/6.jpg" alt="admin@bootstrapmaster.com">
                </div>
                <div class="avatar avatar-xs">
                  <img class="img-avatar" src="img/avatars/7.jpg" alt="admin@bootstrapmaster.com">
                </div>
                <div class="avatar avatar-xs">
                  <img class="img-avatar" src="img/avatars/8.jpg" alt="admin@bootstrapmaster.com">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane p-3" id="messages" role="tabpanel">
          <div class="message">
            <div class="py-3 pb-5 mr-3 float-left">
              <div class="avatar">
                <img class="img-avatar" src="img/avatars/7.jpg" alt="admin@bootstrapmaster.com">
                <span class="avatar-status badge-success"></span>
              </div>
            </div>
            <div>
              <small class="text-muted">Lukasz Holeczek</small>
              <small class="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
            <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt...</small>
          </div>
          <hr>
          <div class="message">
            <div class="py-3 pb-5 mr-3 float-left">
              <div class="avatar">
                <img class="img-avatar" src="img/avatars/7.jpg" alt="admin@bootstrapmaster.com">
                <span class="avatar-status badge-success"></span>
              </div>
            </div>
            <div>
              <small class="text-muted">Lukasz Holeczek</small>
              <small class="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
            <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt...</small>
          </div>
          <hr>
          <div class="message">
            <div class="py-3 pb-5 mr-3 float-left">
              <div class="avatar">
                <img class="img-avatar" src="img/avatars/7.jpg" alt="admin@bootstrapmaster.com">
                <span class="avatar-status badge-success"></span>
              </div>
            </div>
            <div>
              <small class="text-muted">Lukasz Holeczek</small>
              <small class="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
            <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt...</small>
          </div>
          <hr>
          <div class="message">
            <div class="py-3 pb-5 mr-3 float-left">
              <div class="avatar">
                <img class="img-avatar" src="img/avatars/7.jpg" alt="admin@bootstrapmaster.com">
                <span class="avatar-status badge-success"></span>
              </div>
            </div>
            <div>
              <small class="text-muted">Lukasz Holeczek</small>
              <small class="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
            <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt...</small>
          </div>
          <hr>
          <div class="message">
            <div class="py-3 pb-5 mr-3 float-left">
              <div class="avatar">
                <img class="img-avatar" src="img/avatars/7.jpg" alt="admin@bootstrapmaster.com">
                <span class="avatar-status badge-success"></span>
              </div>
            </div>
            <div>
              <small class="text-muted">Lukasz Holeczek</small>
              <small class="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
            <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt...</small>
          </div>
        </div>
        <div class="tab-pane p-3" id="settings" role="tabpanel">
          <h6>Settings</h6>
          <div class="aside-options">
            <div class="clearfix mt-4">
              <small>
                <b>Option 1</b>
              </small>
              <label class="switch switch-label switch-pill switch-success switch-sm float-right">
                <input class="switch-input" type="checkbox" checked="">
                <span class="switch-slider" data-checked="On" data-unchecked="Off"></span>
              </label>
            </div>
            <div>
              <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</small>
            </div>
          </div>
          <div class="aside-options">
            <div class="clearfix mt-3">
              <small>
                <b>Option 2</b>
              </small>
              <label class="switch switch-label switch-pill switch-success switch-sm float-right">
                <input class="switch-input" type="checkbox">
                <span class="switch-slider" data-checked="On" data-unchecked="Off"></span>
              </label>
            </div>
            <div>
              <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</small>
            </div>
          </div>
          <div class="aside-options">
            <div class="clearfix mt-3">
              <small>
                <b>Option 3</b>
              </small>
              <label class="switch switch-label switch-pill switch-success switch-sm float-right">
                <input class="switch-input" type="checkbox">
                <span class="switch-slider" data-checked="On" data-unchecked="Off"></span>
              </label>
            </div>
          </div>
          <div class="aside-options">
            <div class="clearfix mt-3">
              <small>
                <b>Option 4</b>
              </small>
              <label class="switch switch-label switch-pill switch-success switch-sm float-right">
                <input class="switch-input" type="checkbox" checked="">
                <span class="switch-slider" data-checked="On" data-unchecked="Off"></span>
              </label>
            </div>
          </div>
          <hr>
          <h6>System Utilization</h6>
          <div class="text-uppercase mb-1 mt-4">
            <small>
              <b>CPU Usage</b>
            </small>
          </div>
          <div class="progress progress-xs">
            <div class="progress-bar bg-info" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>
          <small class="text-muted">348 Processes. 1/4 Cores.</small>
          <div class="text-uppercase mb-1 mt-2">
            <small>
              <b>Memory Usage</b>
            </small>
          </div>
          <div class="progress progress-xs">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 70%" aria-valuenow="70"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <small class="text-muted">11444GB/16384MB</small>
          <div class="text-uppercase mb-1 mt-2">
            <small>
              <b>SSD 1 Usage</b>
            </small>
          </div>
          <div class="progress progress-xs">
            <div class="progress-bar bg-danger" role="progressbar" style="width: 95%" aria-valuenow="95"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <small class="text-muted">243GB/256GB</small>
          <div class="text-uppercase mb-1 mt-2">
            <small>
              <b>SSD 2 Usage</b>
            </small>
          </div>
          <div class="progress progress-xs">
            <div class="progress-bar bg-success" role="progressbar" style="width: 10%" aria-valuenow="10"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <small class="text-muted">25GB/256GB</small>
        </div>
      </div>
    </aside>
  </div>
  <footer class="app-footer">
  <div>
    <a href="https://coreui.io">職引960</a>
    <span>&copy;2020 Powered by direction.ALL Right Reserved.</span>
  </div>
</footer>
  <!-- CoreUI and necessary plugins-->
  <script src="node_modules/jquery/dist/jquery.min.js"></script>
  <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
  <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
  <script src="node_modules/pace-progress/pace.min.js"></script>
  <script src="node_modules/perfect-scrollbar/dist/perfect-scrollbar.min.js"></script>
  <script src="node_modules/@coreui/coreui/dist/js/coreui.min.js"></script>
  <?php
if($errMsg != ""){
    echo "$member";
}else{
    echo "異動成功~<br>";
}
?>
</body>

</html>