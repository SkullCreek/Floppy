<?php

  session_start();
  if($_SESSION['email'] != ""){
    $email = $_SESSION['email'];
  }
  else{
    header("Location: 404.html");
    exit;
  }


?>

<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="page_styles/profile.css">
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
    <title>Floppy | Profile</title>
  </head>

  <body>
    <div class="app-container">
      <div class="app-header">
        <div class="app-header-left">
          <img src="../images/logo/dashboard.svg" alt="logo" width="24" height="24">
          <p class="app-name">Floppy</p>
          <div class="search-wrapper">
            <input class="search-input" type="text" placeholder="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search"
              viewBox="0 0 24 24">
              <defs></defs>
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
          </div>
        </div>
        <div class="app-header-right">
          <button class="mode-switch" title="Switch Theme">
            <svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
              <defs></defs>
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
          </button>
          <button class="add-btn" title="Add New Project">
            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-plus">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" /></svg>
          </button>
          <button class="notification-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-bell">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
          </button>
          <button class="profile-btn">
            <img src="https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg?w=2000" />
            <span id="user_name">Pluto S.</span>
          </button>
        </div>
        <button class="messages-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-message-circle">
            <path
              d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
        </button>
      </div>
      <div class="app-content">
        <div class="app-sidebar">
          <a href="profile.php" class="app-sidebar-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-home">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" /></svg>
          </a>
          <a href="images.php" class="app-sidebar-link active">
            <i data-feather="image"></i>
          </a>
          <a href="" class="app-sidebar-link">
            <i data-feather="file-text"></i>
          </a>
          <a href="" class="app-sidebar-link">
            <i data-feather="book"></i>
          </a>
          <a href="pages_backend/logout.php" class="app-sidebar-link">
            <i data-feather="log-out"></i>
          </a>
        </div>
        <div class="projects-section">
          <div class="projects-section-header">
            <p>Files</p>
            <p class="time" id="date_month">December, 12</p>
          </div>
          <div class="projects-section-line">
            <div class="projects-status">
              <button class="add_file" id = "add-image"><i style="margin-right: 10px; font-size: 14px;" class="fa-solid fa-plus"></i>
                New</button>
            </div>
            <div class="view-actions">
              <button class="view-btn list-view" title="List View">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-list">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" /></svg>
              </button>
              <button class="view-btn grid-view active" title="Grid View">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-grid">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" /></svg>
              </button>
            </div>
          </div>
          <div id="images-section">
            <section id="starred">
              <div id="parent-starred-container">
                
              </div>
            </section>
          </div>
        </div>
        <div class="messages-section">
          <button class="messages-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-x-circle">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" /></svg>
          </button>
          <div class="projects-section-header" style="  display: flex;flex-direction: column;">
            <p id="storage-heading">Storage</p>
            <section class="storage">
              <div class="circular-progress">
                <svg 
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 100 100'
                  aria-labelledby='title' role='graphic'>
                  <title id='title'>svg circular progress bar</title>
                  <circle cx="50" cy="50" r="40" ></circle>
                  <circle cx="50" cy="50" r="40" id='pct-ind'></circle>
                </svg>
                <p class="pct">Total Storage <br><span id = "storage-left">0.36 MB / 10 MB</span></p>
              </div>
            </section>
            <ul style="margin-bottom: 50px;">
              <li><p style="background-color: #dee2e6;"></p>Total</li>
              <li><p style="background-color: #058EED;"></p>Images</li>
            </ul>
            <aside id="upgrade">
              <button id="upgrade-btn" amount="500" plan="exclusive">Upgrade Now</button>
            </aside>
          </div>
        </div>
      </div>
      <div class="magify">
        <div class="magify-image animate__animated animate__bounceIn">
          
          <i class="close-icon" data-feather="x-circle"></i>
        </div>
        <div class="magify-image2 animate__animated animate__bounceIn"></div>
      </div>
    </div>
    
    <script src="scripts/profile.js"></script>
    <script src="scripts/payment-gateway.js"></script>
    <script src="scripts/images.js"></script>
    <script src="scripts/edit-image.js"></script>
    <script src="https://unpkg.com/feather-icons"></script>
    <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
    <script>
      feather.replace();
    </script>
    <script src="https://kit.fontawesome.com/b182aa84d1.js" crossorigin="anonymous"></script>
  </body>

</html>