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



// animate on scroll
const boxes = document.querySelectorAll('.animate')
        window.addEventListener('scroll', checkBoxes)
        checkBoxes()
        function checkBoxes(){
            const triggerBottom = window.innerHeight / 5 * 5
            boxes.forEach(box => {
                const boxTop = box.getBoundingClientRect().top
                if(boxTop < triggerBottom){
                    box.classList.add('show')
                } else{
                    box.classList.remove('show')
                }
            })
        }



// // Darkmode
//   // darkmode Feature
//   const darkModeToggle = document.getElementById('darkmode');
//   const body = document.body;
//   const wrapper = document.getElementById('home');
  
//   darkModeToggle.addEventListener('click', function () {
//       // Toggle dark mode styles on body and wrapper
//       body.classList.toggle('dark-mode');
//       wrapper.classList.toggle('home-darkmode');
  
//       // Save dark mode preference (optional, can be stored in localStorage)
//       const isDarkModeEnabled = body.classList.contains('dark-mode');})




  // Dark mode toggle
  const darkModeToggle = document.getElementById('darkmode');
  const body = document.body;
  const wrapper = document.getElementById('home');

  darkModeToggle.addEventListener('click', function () {
    // Toggle dark mode styles on body and wrapper
    body.classList.toggle('dark-mode');
    wrapper.classList.toggle('home-darkmode');

    // Toggle background color of home section
    const isDarkModeEnabled = body.classList.contains('dark-mode');
    const homepage = wrapper.classList.contains('home-darkmode');
    wrapper.style.backgroundColor = isDarkModeEnabled ? '#6d6a6a' : ''; // Set the background color to white if dark mode is enabled
  });
