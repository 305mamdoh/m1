$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".scroll-top-button").fadeIn();
    } else {
      $(".scroll-top-button").fadeOut();
    }
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  $(".scroll-top-button").on('click', function () {
    $('html , body').animate({
      scrollTop: 0
    }, 100);
  });

  $('.hamburger').click(function(){
    $('.hamburger').toggleClass('active');
    $('.navbar-nav').toggleClass('active-nav');
    $('body').toggleClass('overflowNone')
  });

  $('.profile .filter-icon').click(function(){
    $('.profile .profile-mobile-view').addClass('active-profile');
    $('body').addClass('overflowNone')
  });

  $('.profile .close-icon').click(function(){
    $('.profile .profile-mobile-view').removeClass('active-profile');
    $('body').removeClass('overflowNone')
  });

  $('.profile .nav-item .nav-link').click(function(){
    $('.profile .profile-mobile-view').removeClass('active-profile');
    $('body').removeClass('overflowNone')
  });

  $('.products .filter-icon').click(function(){
    $('.products .mobile-filter').addClass('active-filter');
    $('body').addClass('overflowNone')
  });

  $('.products .close-icon').click(function(){
    $('.products .mobile-filter').removeClass('active-filter');
    $('body').removeClass('overflowNone')
  });

  $('.sort-icon').click(function(){
    $('.sort-list').toggleClass('active');
  });

  var swiper = new Swiper(".swiper-header", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  var swiper = new Swiper(".swiper-feature", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
      slidesPerView: 1,
      spaceBetween: 18,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
    },
  });
  
  var swiper = new Swiper(".swiper-course", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
    },
  });
  
  var swiper = new Swiper(".swiper-team", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });

  $("#single-slider-range").slider({
    range:true,
    orientation:"horizontal",
    min: 0,
    isRTL: true,
    max: 10000,
    values: [0, 10000],
    step: 100,
    slide:function (event, ui) {
      if (ui.values[0] == ui.values[1]) {
        return false;
      }     
      $("#single_min_price").val(ui.values[0]);
      $("#single_max_price").val(ui.values[1]);
    }
  });

  $('.grid-btn.list').click(function() {
    $('.products .column').addClass('list-box-view col-lg-6 col-12 mb-4 px-2');
    $('.products .column').removeClass('col-lg-4 col-12 mb-4');
    $('.products .column').removeClass('col-lg-12 col-12 mb-4');
    $('.grid-btn.list').addClass('active');
    $('.grid-btn.grid').removeClass('active');
    $('.grid-btn.full-width').removeClass('active');
  });

  $('.grid-btn.grid').click(function() {
    $('.products .column').removeClass('col-lg-12 col-12 mb-4');
    $('.products .column').removeClass('list-box-view col-lg-6 col-12 mb-4 px-2');
    $('.products .column').addClass('col-lg-4 col-12 mb-4');
    $('.grid-btn.grid').addClass('active');
    $('.grid-btn.list').removeClass('active');
    $('.grid-btn.full-width').removeClass('active');
  });

  $('.grid-btn.full-width').click(function() {
    $('.products .column').addClass('col-lg-12 col-12 mb-4');
    $('.products .column').removeClass('col-lg-4 col-12 mb-4');
    $('.products .column').removeClass('list-box-view col-lg-6 col-12 mb-4 px-2');
    $('.grid-btn.full-width').addClass('active');
    $('.grid-btn.grid').removeClass('active');
    $('.grid-btn.list').removeClass('active');
  });

  $(".fav-icon").on('click', function(event) {
    event.preventDefault();
    
    $(this).toggleClass("active");
  });

  var swiper = new Swiper(".prodcutDetailsThumbsSlider", {
    spaceBetween: 10,
    
    freeMode: true,
    watchSlidesProgress: true,
    loop: true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0:{
        slidesPerView: 3,
      },
      700:{
        slidesPerView: 3,
      },
      1050:{
        slidesPerView: 4,
      }
    }
  });
  
  var swiper2 = new Swiper(".prodcutDetailsSwiper", {
    spaceBetween: 10,
    loop: true,
    thumbs: {
      swiper: swiper,
    },
  });
});

$(document).ready(function() {
  let i = 120;
  let a = setInterval(function() {
    if (i < 10)
      document.querySelector('.count_down').textContent = `0${i}`;
    else {
      document.querySelector('.count_down').textContent = `${i}`
    }
    i--;
    if (i < 0) {
      clearInterval(a);
    }
  }, 1000)
});

$(document).ready(function() {
  let i = 1000;
  let a = setInterval(function() {
    if (i < 10)
      document.querySelector('.count_down_product').textContent = `0${i}`;
    else {
      document.querySelector('.count_down_product').textContent = `${i}`
    }
    i--;
    if (i < 0) {
      clearInterval(a);
    }
  }, 1000)
});

$(document).ready(function() {
  const codes = document.querySelectorAll('.code');
  codes[0].focus();
  codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
      if (e.key >= 0 && e.key <= 9) {
        codes[idx].value = '';
        setTimeout(() => codes[idx + 1].focus(), 10);
      } else if (e.key === 'Backspace') {
        setTimeout(() => codes[idx - 1].focus(), 10);
      }
    });
  });
});

// let countDown = new Date().getTime()