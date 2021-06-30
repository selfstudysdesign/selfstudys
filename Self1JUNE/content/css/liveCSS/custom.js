// Header Js
function handleNavClick(type) {
  if (type === 'open') {
    document.getElementById("sideNav").style.width = "100%";
  }
  if (type === 'close') {
    document.getElementById("sideNav").style.width = "0";
  }
};
// Onclick menu 
$('.mainMenu__list').on("click", function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
  }
  else {
    $('.mainMenu__list').removeClass('active');
    $(this).addClass('active');
  }
});

// on click outside close menu
const $menu = $('.mainMenu ');
$(document).mouseup(e => {
  if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
    $('.mainMenu__list').removeClass('active');
  }
});



// End Header 
// tab
jQuery('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  jQuery('.notification_slider').slick('setPosition');
})
// End Tab


jQuery(document).ready(function () {
  jQuery('.notification_slider').slick({
    dots: false,
    autoplay: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});