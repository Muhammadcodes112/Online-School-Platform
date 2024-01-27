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
    }, 1000);
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


//  header 
const header = document.getElementById('main-header');
let lastScrollPosition = 0;

window.addEventListener('scroll', function () {
    const currentScrollPosition = window.scrollY;

    // Check the scroll direction
    if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down
        header.style.top = '5px';
    } else {
        // Scrolling up
        header.style.top = '0';
    }

    // Update the last scroll position
    lastScrollPosition = currentScrollPosition;

    // Toggle the 'fixed' class based on the scroll position
    if (currentScrollPosition > 200) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
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



const theme = document.getElementById("darkmode");
const themeIcon = document.getElementById("themeIcon");

theme.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
    themeIcon.innerHTML = '<i class="ri-sun-line"></i>';
    } else {
    themeIcon.innerHTML = '<i class="ri-moon-line"></i>';
    }
};



  // Dark mode toggle
//   const darkModeToggle = document.getElementById('darkmode');
//   const body = document.body;
//   const wrapper = document.getElementById('home');

//   darkModeToggle.addEventListener('click', function () {
//     // Toggle dark mode styles on body and wrapper
//     body.classList.toggle('dark-mode');
//     wrapper.classList.toggle('dark-mode');

//     // Toggle background color of home section
//     const isDarkModeEnabled = body.classList.contains('dark-mode');
//     const homepage = wrapper.classList.contains('dark-mode');
//     // wrapper.style.backgroundColor = isDarkModeEnabled ? '#6d6a6a' : ''; // Set the background color to white if dark mode is enabled
//   });
