//loader
// let loader = document.getElementById('preloader');
// window.addEventListener('load', function () {
//   loader.style.display = 'none';
// });
//loader












//  دا زرار الى بيطلع
var btn = $('#button');
var image = $('.navbar-light .navbar-brand img');
var link = $('.navbar-light .nav-item .nav-link');
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
    image.css('width', '50%');
    link.addClass('change');
  } else {
    btn.removeClass('show');
    image.css('width', '70%');
    link.removeClass('change');
  }
});
btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});


// 





var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


//=========== Active sidebar dashboard =============
const currentLocationDashboard = location.href;
const menuItemDashboard = document.querySelectorAll(
  ".sidebar .nav-item .nav-link"
);
const menuChildDashboard = document.querySelectorAll(
  ".sidebar .nav-pills .nav-item ul li .nav-link"
);
const menuLengthDashboard = menuItemDashboard.length;
for (let i = 0; i < menuLengthDashboard; i++) {
  if (menuItemDashboard[i].href === currentLocationDashboard) {
    menuItemDashboard[i].className = "nav-link active";
    // menuChildDashboard[i].parentElement.parentElement.className =
    //   "flex-column collapse show";
  }
}
//=========== Active sidebar dashboard =============

//=========== sidebar toggle =============
const sideBar = document.querySelector(".sidebar");
const toggler = document.querySelector(".menu");
toggler.addEventListener("click", function () {
  sideBar.classList.toggle("open");
});
//=========== sidebar toggle =============
//=========== Close inspect =============

$(document).ready(function () {
  $(".sidebar").hover(
    function () {
      $(".sidebar").addClass("opened");
    },
    function () {
      $(".sidebar").removeClass("opened");
    }
  );
});

$(document).ready(function () {
  $(".close").on("click", function () {
    $(".sidebar.open .nav-pills .nav-item ul").removeClass("show");
  });
});


// animated hamburger icon
$(document).ready($(function () {
  let navBtn = $('.navbar-toggler');
  $(navBtn).click(function () {
    $(navBtn).toggleClass('active-hamburger');
  });
}));
// animated hamburger icon
var skillPers = document.querySelectorAll(".skill-per");

skillPers.forEach(function(skillPer) {
  var per = parseFloat(skillPer.getAttribute("per"));
  skillPer.style.width = per + "%";
  
  var animatedValue = 0; 
  var startTime = null;
  
  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var stepPercentage = progress / 1000; // Dividing by duration in milliseconds (1000ms = 1s)
    
    if (stepPercentage < 1) {
      animatedValue = per * stepPercentage;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
      requestAnimationFrame(animate);
    } else {
      animatedValue = per;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
    }
  }
  
  requestAnimationFrame(animate);
});
