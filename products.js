// Content Database
const productsArray = [
// Make sure that there are enough product cols to house all of the products.
  {
    id: "P00",
    name: "Aliquam",
    imageSource: "images/Natural skincare product.jpg",
    description: "This is Aliquam. It does x. It also does y, but most importantly it does z.",
    featureList: ["Feature 0", "Feature 1", "Feature 2", "Feature 3"],
    tagList: ["tag2", "tag9", "tag1"]
  },
  {
    id: "P01",
    name: "Odio",
    imageSource: "images/Natural skincare product1.jpg",
    description: "This is Odio. It does x. It also does y, but most importantly it does z.",
    featureList: ["Feature 0", "Feature 1", "Feature 2", "Feature 3"],
    tagList: ["tag11", "tag15", "tag2"]
  },
  {
    id: "P02",
    name: "Faucibus",
    imageSource: "images/Natural skincare product2.jpg",
    description: "This is Faucibus. It does x. It also does y, but most importantly it does z.",
    featureList: ["Feature 0", "Feature 1", "Feature 2", "Feature 3"],
    tagList: ["tag1", "tag13", "tag7"]
  },
  {
    id: "P03",
    name: "Quis",
    imageSource: "images/Natural skincare product3.jpg",
    description: "This is Quis. It does x. It also does y, but most importantly it does z.",
    featureList: ["Feature 0", "Feature 1", "Feature 2", "Feature 3"],
    tagList: ["tag10", "tag1", "tag9"]
  },
  {
    id: "P04",
    name: "Leo",
    imageSource: "images/Natural skincare product4.jpg",
    description: "This is Leo. It does x. It also does y, but most importantly it does z.",
    featureList: ["Feature 0", "Feature 1", "Feature 2", "Feature 3"],
    tagList: ["tag13", "tag15", "tag10"]
  },
  {
    id: "P05",
    name: "Purus",
    imageSource: "images/Natural skincare product5.jpg",
    description: "This is Purus. It does x. It also does y, but most importantly it does z.",
    featureList: ["Feature 0", "Feature 1", "Feature 2", "Feature 3"],
    tagList: ["tag12", "tag9", "tag2"]
  },
  {
    id: "P06",
    name: "Duis",
    imageSource: "images/Natural skincare product6.jpg",
    description: "This is Duis. It does x. It also does y, but most importantly it does z.",
    featureList: ["Feature 0", "Feature 1", "Feature 2", "Feature 3"],
    tagList: ["tag2", "tag3", "tag12"]
  },
  {
    id: "P07",
    name: "Quam",
    imageSource: "images/Natural skincare product7.jpg",
    description: "This is Quam. It does x. It also does y, but most importantly it does z.",
    featureList: ["Feature 0", "Feature 1", "Feature 2", "Feature 3"],
    tagList: ["tag9", "tag4", "tag5"]
  },
  {
    id: "P08",
    name: "Amet",
    imageSource: "images/Natural skincare product8.jpg",
    description: "This is Amet. It does x. It also does y, but most importantly it does z.",
    featureList: ["Feature 0", "Feature 1", "Feature 2", "Feature 3"],
    tagList: ["tag4", "tag9", "tag10"]
  },
  {
    id: "P09",
    name: "Diam",
    imageSource: "images/Natural skincare product9.jpg",
    description: "This is Diam. It does x. It also does y, but most importantly it does z.",
    featureList: ["Feature 0", "Feature 1", "Feature 2", "Feature 3"],
    tagList: ["tag12", "tag10", "tag7"]
  },
  {
    id: "P10",
    name: "Cursus",
    imageSource: "images/Natural skincare product10.jpg",
    description: "This is Cursus. It does x. It also does y, but most importantly it does z.",
    featureList: ["Feature 0", "Feature 1", "Feature 2", "Feature 3"],
    tagList: ["tag14", "tag12", "tag15"]
  },
  {
    id: "P11",
    name: "Dui",
    imageSource: "images/Natural skincare product11.jpg",
    description: "This is Dui. It does x. It also does y, but most importantly it does z.",
    featureList: ["Feature 0", "Feature 1", "Feature 2", "Feature 3"],
    tagList: ["tag9", "tag6", "tag4"]
  },
  {
    id: "P12",
    name: "Suscipit",
    imageSource: "images/Natural skincare product12.jpg",
    description: "This is Suscipit. It does x. It also does y, but most importantly it does z.",
    featureList: ["Feature 0", "Feature 1", "Feature 2", "Feature 3"],
    tagList: ["tag2", "tag5", "tag15"]
  },
  {
    id: "P13",
    name: "Tristique",
    imageSource: "images/Natural skincare product13.jpg",
    description: "This is Tristique. It does x. It also does y, but most importantly it does z.",
    featureList: ["Feature 0", "Feature 1", "Feature 2", "Feature 3"],
    tagList: ["tag7", "tag10", "tag14"]
  },
  {
    id: "P14",
    name: "Tempus",
    imageSource: "images/Natural skincare product14.jpg",
    description: "This is Tempus. It does x. It also does y, but most importantly it does z.",
    featureList: ["Feature 0", "Feature 1", "Feature 2", "Feature 3"],
    tagList: ["tag5", "tag8", "tag4"]
  },
  {
    id: "P15",
    name: "Eu",
    imageSource: "images/Natural skincare product15.jpg",
    description: "This is Eu. It does x. It also does y, but most importantly it does z.",
    featureList: ["Feature 0", "Feature 1", "Feature 2", "Feature 3"],
    tagList: ["tag7", "tag1", "tag2"]
  }
]

function renderProducts () {
// Publishes the product info into the grid layout.
// Adds hover event listeners to image and name.
// Make sure that there are enough product cols to house all of the products.
  for (var i = 0; i<productsArray.length; i++) {
    // Define variables to target the relevant HTML element:
    let targetClassImage = ".product-img-"+i;
    let targetClassName = ".product-h3-"+i;
    // Insert the data to render the product cell in the grid:
    document.querySelector(targetClassName).innerHTML = productsArray[i].name;
    document.querySelector(targetClassImage).src = productsArray[i].imageSource;
    // Add event listeners for mouseovers and mouseouts:
    document.querySelector(targetClassName).addEventListener("mouseover", function () {
      document.querySelector(targetClassName).classList.toggle("opacity-half");
      document.querySelector(targetClassImage).classList.toggle("opacity-half");
      document.body.classList.toggle("cursor-pointer");
    });
    document.querySelector(targetClassName).addEventListener("mouseout", function () {
      document.querySelector(targetClassName).classList.toggle("opacity-half");
      document.querySelector(targetClassImage).classList.toggle("opacity-half");
      document.body.classList.toggle("cursor-pointer");
    });
    document.querySelector(targetClassImage).addEventListener("mouseover", function () {
      document.querySelector(targetClassName).classList.toggle("opacity-half");
      document.querySelector(targetClassImage).classList.toggle("opacity-half");
      document.body.classList.toggle("cursor-pointer");
    });
    document.querySelector(targetClassImage).addEventListener("mouseout", function () {
      document.querySelector(targetClassName).classList.toggle("opacity-half");
      document.querySelector(targetClassImage).classList.toggle("opacity-half");
      document.body.classList.toggle("cursor-pointer");
    });
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
