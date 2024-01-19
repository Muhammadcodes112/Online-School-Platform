// code for loader
// document.addEventListener("DOMContentLoaded", function () {
//     var loader = document.getElementById("loader");
//     var content = document.getElementById("content");

//     setTimeout(function () {
//         loader.style.display = "none";
//         content.style.display = "block"; 
//     }, 2000);
// });



// header responsiveness code
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}



// code for floating button
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('floatingbtn');
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;

        if (scrollPosition < 20) {
            button.style.opacity = '0';
        }else{
            button.style.opacity = '1';
        }});
    });