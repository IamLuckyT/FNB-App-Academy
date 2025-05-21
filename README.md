/*COLOR CODES USED ARE SHOWN BELOW WITH THEIR NAMES

Background colors:

Light Mode: #ffffff (white)
Dark Mode: #121212 (almost black)

Text colors:

Light Mode: #000000 (black)
Dark Mode: #ffffff (white)

Link colors:

Light Mode: #007BFF (a medium blue)
Dark Mode: #66b3ff (a soft light blue for visibility on dark backgrounds)

Hover colors:

Light Mode: #f2f2f2 (light gray for hover on links/buttons)
Dark Mode: #333333 (darker gray for hover on links/buttons)

Button colors:

Light Mode: #ddd (light gray background for buttons)
Dark Mode: #2a2a2a (dark gray background for buttons)

Borders:
Light Mode: #ccc (light gray border)
Dark Mode: #444 (darker gray border for contrast)*/

/* ALL THE CODE THAT STARTS HERE IS FOR THE SIDEBAR */
body {
  margin: 0; /* Removes default margin */
  font-family: Arial, sans-serif; /* Sets default font */
  display: flex; /* Enables flexbox for layout */
  flex-direction: column; /* Stacks elements vertically */
}

/* Prevents scrolling when a certain class is added */
body.no-scroll {
  overflow: hidden; /* Disables scrolling */
}

/* Top bar styles */
.top-bar {
  display: flex;
  background: #fff; /* Sets background color */
  align-items: center; /* Centers items vertically */
  border-bottom: 1px solid #ccc; /* Adds border under the top bar */
  padding: 10px 20px; /* Adds padding around the top bar */
  justify-content: space-between; /* Aligns content with space in between */
  align-items: center; /* Ensures vertical centering */
  width: 100%; /* Full width of the screen */
  z-index: 10; /* Keeps the top bar above other content */
}

/* Menu button styles */
#menu-toggle {
  font-size: 24px; /* Sets the font size of the button */
  background: none; /* Removes background */
  border: none; /* Removes border */
  cursor: pointer; /* Adds pointer cursor */
  margin-right: 15px; /* Adds margin to the right */
}

/* Ensures the buttons have the text color based on the theme */
#menu-toggle, #close-sidebar {
  color: var(--text-color); /* Uses variable for text color */
}

/* Dark mode overrides for buttons */
body.dark-mode #menu-toggle, body.dark-mode #close-sidebar {
  color: #fff; /* Changes the text color to white in dark mode */
}

/* Theme toggle button styles */
#theme-toggle {
  margin: 10px; /* Adds margin */
  align-self: center; /* Centers the button horizontally */
  font-size: 14px; /* Set the font size */
  padding: 8px 12px; /* Padding inside the button */
  scroll-margin-left: 10px;
  background-color: #ddd; /* Light background color */
  border: none; /* Removes the border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

/* Top bar logo styles */
.top-bar .logo {
  color: var(--text-color); /* Uses variable for text color */
  font-weight: bold; /* Makes logo text bold */
  font-size: 20px; /* Set the font size */
}

/* Transitions for smooth changes between light/dark mode */
.top-bar, #theme-toggle, #menu-toggle, .logo {
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transitions for background color and text color */
}

/* Dark mode: changes color of logo */
body.dark-mode .top-bar .logo {
  color: #fff; /* White color for logo in dark mode */
}

/* Sidebar styling sidebar */
.sidebar {
  position: fixed; /* Fixes sidebar in place */
  top: 50px; /* 50px from the top */
  left: -100vw; /* Makes sure sidebar is completely hidden and moved off screen*/
  width: 240px; /* Width of the sidebar */
  height: 100vh; /*full viewport height*/
  background-color: #fff; /* Background color */
  transition: left 0.3s ease; /* Smooth transition when sidebar opens/closes */
  padding: 10px; /* Padding inside the sidebar */
  z-index: 10; /* Makes sure the sidebar stays above other content */
  border-right: 1px solid #ccc; /* Border on the right side */
  overflow-y: auto; /* Enables scrolling inside the sidebar */
  display: flex; /* Flexbox layout */
  flex-direction: column; /* Stacks items vertically */
  justify-content: space-between; /* Push bottom content to bottom */
}

/* When the sidebar has the 'open' class, it slides in */
.sidebar.open {
  left: 0; /* Moves sidebar to the visible area */
} 

/* Sidebar logo styles */
.sidebar .logo {
  font-weight: bold; /* Makes the logo text bold */
  font-size: 20px; /* Font size */
  margin-bottom: 20px; /* Adds space below the logo */
}

/* Close button styles inside the sidebar */
#close-sidebar {
  font-size: 24px; /* Font size of the close button */
  background: none; /* Ensures there is no background */
  border: none; /* Removes border */
  float: right; /* Floats the button to the right */
  cursor: pointer; /* Pointer cursor on hover */
  margin-bottom: 10px; /* Adds margin at the bottom */
  display: none; /* Hidden by default */
}

/* Show the close button when the sidebar is open */
.sidebar.open #close-sidebar {
  display: block; /* Makes the close button visible when the sidebar is open */
}

/* Navigation links styles */
.nav-links a {
  display: block; /* Makes links block-level */
  padding: 10px 15px; /* Padding inside the links */
  color: var(--text-color); /* Set the text color based on theme */
  text-decoration: none; /* Removes underline */
  border-radius: 8px; /* Rounded corners for the border */
}

/* Hover effect for links */
.nav-links a:hover {
  background-color: #f2f2f2; /* Light background on hover */
}

/* Section title styles */
.section-title {
  font-size: 14px; /* Font size */
  margin: 15px 0 5px 15px; /* Adds margins around the title */
  font: bold; 
  color: #555; /* Dark gray color */
}

/* Main content styles */
.main-content {
  margin-top: 60px; /* Adds top margin */
  padding: 20px;
}

/* Overlay that covers the screen when sidebar is open */
.overlay {
  display: none;
  position: fixed; /* Fixes the overlay in place */
  top: 0; /* Position from the top */
  left: 0; /* Position from the left */
  height: 100%; /* Full height */
  width: 100%; /* Full width */
  background-color: rgba(0, 0, 0, 0.4); /* Semi-transparent black background */
  z-index: 9; /* Positioned above content, but below sidebar */
}

/* Overlay shown when sidebar is active */
.overlay.active {
  display: block; /* Shows the overlay */
}

/* Theme toggle button container at the bottom */
.theme-toggle-wrapper {
  padding: 10px 15px;
  margin-top: auto; /* Makes sure button stays at the bottom*/
}

/* Style for theme toggle button */
.theme-toggle-wrapper button {
  width: 100%; /* Button takes full width */
  padding: 10px; 
  background-color: #ddd; /* Light gray background */
  border: none;
  border-radius: 5px; 
  cursor: pointer;
}

/*SIDEBAR CODE ENDS HERE*/

/* ALL THE CODE THAT STARTS HERE IS FOR THE LIGHT AND DARK MODE THEME */
/* Root default light theme colors */
:root {
  --background-color: #ffffff; 
  --text-color: #000000;
  --link-color: #f9f9f9;
  --link-hover-color: #e0e0e0;
}

/* Apply colors based on the theme */
body {
  background-color: var(--background-color); /* Uses the background color variable */
  color: var(--text-color);
}

/* APPLY TO SIDEBAR AND LINKS */
/* Apply colors for sidebar */
.sidebar {
  background-color: var(--background-color);
}

/* Hover effect for links */
.nav-links a:hover {
  background-color: var(--link-hover-color);
}

/* OVERRIDES DARK MODE THEME */
body.dark-mode {
  --background-color: #121212;
  --text-color: #ffffff;
  --link-hover-color: #333;
  --link-color: #ccc;
}

/* Dark mode styles for the main content */
body.dark-mode .main-content {
  background-color: #121212;
  color: #ffffff;
}

/* Dark mode styles for the sidebar */
body.dark-mode .sidebar {
  background-color: #1e1e1e;
  color: #ffffff;
}

/* Dark mode link color */
body.dark-mode .nav-links a {
  color: #ffffff;
  background-color: transparent;
}

/* Dark mode link hover effect */
body.dark-mode .nav-links a:hover {
  background-color: #333;
  color: #ffffff;
}

/* Dark mode section title color */
body.dark-mode .section-title {
  color: #cccccc;
}


/* Dark mode theme toggle button styles */
body.dark-mode #theme-toggle {
  background-color: #2a2a2a;
  color: #fff;
}

/* Dark mode theme toggle button hover effect */
body.dark-mode #theme-toggle:hover {
  background-color: #444;
}

/* Dark mode top bar styles */
body.dark-mode .top-bar {
  background-color: #1e1e1e;
  color: #fff;
  border-bottom: 1px solid #444;
}

/* Dark mode theme toggle button wrapper styles */
body.dark-mode .theme-toggle-wrapper {
  border-top: 1px solid #444;
}

/* Dark mode button inside theme toggle wrapper */
body.dark-mode .theme-toggle-wrapper button {
  background-color: #2a2a2a;
  color: #fff;
}

/* Dark mode button inside theme toggle wrapper */
body.dark-mode #menu-toggle, body.dark-mode #close-sidebar {
  color: #fff;
}

/* LIGHT AND DARK MODE THEME ENDS HERE */

/* ALL THE CODE THAT STARTS HERE IS FOR THE MAKING TOGGLE THEME RESPONSIVE */
@media screen and (max-width: 600px)
{
    #theme-toggle {
        font-size: 12px; /* Set Smaller font size for mobile */
        padding: 6px 10px
    }
}
/* CODE ENDS HERE */

/* CODE FOR SMOOTH TRANSITION START HERE */
/* Smooth transition for changes between light/dark modes */
body, .sidebar, .nav-links a, .main-content{
  transition: background-color 0.3s ease, color 0.3s ease;
}
/* CODE ENDS HERE */
