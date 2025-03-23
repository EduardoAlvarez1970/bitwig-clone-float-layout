/* Toggle between adding and removing the "responsive" class to top-bar when the user clicks on the icon */
//function myFunction() {
//    var x = document.querySelector(".top-bar");/* toma el elemento de clase top-bar y lo almacena en x*/
//    if (x.className === "top-bar") {
//      x.className += " responsive"; /*le agrega la clase responsive*/
//    } else {
//      x.className = "top-bar";
//    }
//  }
  

  function myFunction() {
    var x = document.querySelector(".top-bar");
    x.classList.toggle("responsive"); /*agrega la clase si no está y la quita si ya está, evitando errores.*/
}
