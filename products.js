// Content Database
const productsArray = [
// Make sure that there are enough product cols to house all of the products.
  {
    id: "P00",
    name: "Product 0",
    imageSource: "images/Natural skincare product.jpg",
    description: "This is Product 0. It does x. It also does y, but most importantly it does z.",
    featureList: ["Feature 0", "Feature 1", "Feature 2", "Feature 3"],
    tagList: ["tag0", "tag1", "tag2"]
  },
  {
    id: "P01",
    name: "Product 1",
    imageSource: "images/Natural skincare product1.jpg",
    description: "This is Product 1. It does x. It also does y, but most importantly it does z.",
    featureList: ["Feature 0", "Feature 1", "Feature 2", "Feature 3"],
    tagList: ["tag1", "tag2", "tag3"]
  },
  {
    id: "P02",
    name: "Product 2",
    imageSource: "images/Natural skincare product2.jpg",
    description: "This is Product 2. It does x. It also does y, but most importantly it does z.",
    featureList: ["Feature 0", "Feature 1", "Feature 2", "Feature 3"],
    tagList: ["tag3", "tag4", "tag5"]
  },
  {
    id: "P03",
    name: "Product 3",
    imageSource: "images/Natural skincare product3.jpg",
    description: "This is Product 3. It does x. It also does y, but most importantly it does z.",
    featureList: ["Feature 0", "Feature 1", "Feature 2", "Feature 3"],
    tagList: ["tag4", "tag5", "tag6"]
  }
]

function renderProducts () {
// Publishes the product info into the grid layout.
// Make sure that there are enough product cols to house all of the products.
  for (var i = 0; i<productsArray.length; i++) {
    var targetClassImage = ".product-img-"+i;
    document.querySelector(targetClassImage).src = productsArray[i].imageSource;
    var targetClassName = ".product-h3-"+i;
    document.querySelector(targetClassName).innerHTML = productsArray[i].name;
    }
}

// Rendering the products array
renderProducts();

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

// Populate the Product grid


// Reveal the page
document.querySelector("body").classList.toggle("visibility-hidden");
