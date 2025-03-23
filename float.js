/* Toggle between adding and removing the "responsive" class to top-bar when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("top-bar");
    if (x.className === "top-bar") {
      x.className += " responsive";
    } else {
      x.className = "top-bar";
    }
  }