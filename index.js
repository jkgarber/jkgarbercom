// Data chest
// What: A library of page data.
// Why: To assist with the behaviour of the project.
// How: The data is utilised by the functions in the project in various ways.
// When: The data is utilised at various times.
let topImgHtml = "<img class='top-img' src='images/Woman with Dog.jpg'>"
let topTitleTextHtml = "<h1 class='top-title'>Loremi</h1><p class='top-text'>Orci porta non pulvinar neque laoreet suspendisse interdum consectetur.</p>"
let captionP1Long = "In nulla posuere sollicitudin aliquam. Ut aliquam purus sit amet luctus venenatis lectus magna. Integer malesuada nunc vel risus commodo. Placerat in egestas erat imperdiet sed. Nunc sed augue lacus viverra vitae congue eu consequat. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Proin nibh nisl condimentum id venenatis a. Ipsum dolor sit amet consectetur adipiscing elit duis tristique.";
let captionP1Short = "In nulla posuere sollicitudin aliquam.";
let captionP2Long = "Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Morbi non arcu risus quis varius quam. Integer quis auctor elit sed vulputate. Donec ac odio tempor orci dapibus ultrices in iaculis. Purus sit amet volutpat consequat mauris nunc. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus.";
let captionP2Short = "Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel.";
let captionP3Long = "Id neque aliquam vestibulum morbi blandit. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Malesuada proin libero nunc consequat interdum varius. Id semper risus in hendrerit gravida rutrum. In eu mi bibendum neque egestas congue quisque egestas.";
let captionP3Short = "Id neque aliquam vestibulum morbi blandit.";

function windowSizeConsiderations() {
  // What: Instructions for altering page contents to achieve design goals across all window/client widths.
  // Why: To address issues in responsiveness and content layout.
  // How: First the window/client width is determined, and then content is delivered to certain html elements.
  // When: The function is called initially when the page is loaded and then subsequently every time the window changes size.

  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth > 900) {
    // Wide viewport

    // Section: top
    // innerHTML assignment for content layout
    document.querySelector(".top-first-col").innerHTML = topImgHtml;
    document.querySelector(".top-second-col").innerHTML = topTitleTextHtml;

    // Section: products
    // Carousel caption innerHTML assignment
    document.querySelector(".caption-p-1").innerHTML = captionP1Long;
    document.querySelector(".caption-p-2").innerHTML = captionP2Long;
    document.querySelector(".caption-p-3").innerHTML = captionP3Long;
  } else {
    // Mobile viewport

    // Section: top
    // innerHTML assignment for content layout
    document.querySelector(".top-first-col").innerHTML = topTitleTextHtml;
    document.querySelector(".top-second-col").innerHTML = topImgHtml;

    // Section: products
    // Carousel caption innerHTML assignment
    document.querySelector(".caption-p-1").innerHTML = captionP1Short;
    document.querySelector(".caption-p-2").innerHTML = captionP2Short;
    document.querySelector(".caption-p-3").innerHTML = captionP3Short;
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
