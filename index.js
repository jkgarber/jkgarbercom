let captionP1 = "In nulla posuere sollicitudin aliquam. Ut aliquam purus sit amet luctus venenatis lectus magna. Integer malesuada nunc vel risus commodo. Placerat in egestas erat imperdiet sed. Nunc sed augue lacus viverra vitae congue eu consequat. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Proin nibh nisl condimentum id venenatis a. Ipsum dolor sit amet consectetur adipiscing elit duis tristique.";
let captionP2 = "Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Morbi non arcu risus quis varius quam. Integer quis auctor elit sed vulputate. Donec ac odio tempor orci dapibus ultrices in iaculis. Purus sit amet volutpat consequat mauris nunc. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus.";
let captionP3 = "Id neque aliquam vestibulum morbi blandit. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Malesuada proin libero nunc consequat interdum varius. Id semper risus in hendrerit gravida rutrum. In eu mi bibendum neque egestas congue quisque egestas.";

function windowSizeStuff() {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth > 900) {
  	console.log('Wide viewport');
    document.querySelector(".caption-p-1").innerHTML = captionP1;
    document.querySelector(".caption-p-2").innerHTML = captionP2;
    document.querySelector(".caption-p-3").innerHTML = captionP3;
  } else {
  	console.log('Small viewport');
    document.querySelector(".caption-p-1").innerHTML = captionP1.slice(0,60)+"...";
    document.querySelector(".caption-p-2").innerHTML = captionP2.slice(0,60)+"...";
    document.querySelector(".caption-p-3").innerHTML = captionP3.slice(0,60)+"...";
  }
}

windowSizeStuff();
window.addEventListener("resize", windowSizeStuff);
