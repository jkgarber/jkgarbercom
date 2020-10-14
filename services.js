function windowSizeConsiderations() {
  // What: Instructions for altering page contents to achieve design goals across all window/client widths.
  // Why: To address issues in responsiveness and content layout.
  // How: First the window/client width is determined, and then content is delivered to certain html elements.
  // When: The function is called initially when the page is loaded and then subsequently every time the window changes size.

  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth > 900) {
    // Wide viewport

  } else {
    // Mobile viewport

  }
}

// Initial and ongoing calls to a function
windowSizeConsiderations();
window.addEventListener("resize", windowSizeConsiderations);


// Navbar slide-up
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-56px";
  }
  prevScrollpos = currentScrollPos;
}

// Reveal the page
document.querySelector("body").classList.toggle("visibility-hidden");
