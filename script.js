// code for loader
// document.addEventListener("DOMContentLoaded", function () {
//     var loader = document.getElementById("loader");
//     var content = document.getElementById("content");

//     setTimeout(function () {
//         loader.style.display = "none";
//         content.style.display = "block"; 
//     }, 2000);
// });

// code for loader
document.addEventListener("DOMContentLoaded", function () {
    var loader = document.getElementById("loader");
    var content = document.getElementById("content");

    // Ensure loader is initially displayed and content is hidden
    loader.style.display = "block";
    content.style.display = "none";

    setTimeout(function () {
        loader.style.display = "none";
        content.style.display = "block"; 
    }, 2000);
});


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





const sr = ScrollReveal ({
    distance: '650px',
    duration: '2600',
    delay: 450,
    reset: true
})

//sr.reveal('.header', {delay: 200, origin:'bottom'})
sr.reveal('.home', {delay: 20, origin:'bottom'})
sr.reveal('.courses', {delay: 20, origin:'bottom'})
sr.reveal('.box', {delay: 20, origin:'bottom'})
sr.reveal('.subjects', {delay: 20, origin:'bottom'})
sr.reveal('.learners', {delay: 20, origin:'bottom'})
sr.reveal('.facilities', {delay: 20, origin:'bottom'})
sr.reveal('.facilities-col', {delay: 20, origin:'bottom'})
sr.reveal('.testimonials', {delay: 20, origin:'bottom'})
sr.reveal('.testimonials-col', {delay: 20, origin:'bottom'})
sr.reveal('.cta', {delay: 20, origin:'bottom'})
sr.reveal('.p-btn', {delay: 20, origin:'left'})
sr.reveal('.footer', {delay: 20, origin:'bottom'})
sr.reveal('.logo', {delay: 20, origin:'top'})
sr.reveal('.container', {delay: 20, origin:'bottom'})
sr.reveal('.blog-left', {delay: 20, origin:'bottom'})
sr.reveal('.blog-right', {delay: 20, origin:'bottom'})
sr.reveal('.comment-box', {delay: 20, origin:'bottom'})


