(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Courses carousel
    $(".courses-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
    });


    // Related carousel
    $(".related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
})(jQuery);

/*
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Auto slide every 10 seconds
setInterval(function() {
  plusSlides(1);
}, 10000); // 10000 milliseconds = 10 seconds*/
 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active2", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active2";
}

// Automatic slide transition every 10 seconds
setInterval(function() {
  plusSlides(1);
}, 10000); // 10000 milliseconds = 10 seconds


document.querySelector('.team-item').addEventListener('click', function() {
    document.getElementById('learnMoreBtn').style.opacity = 1;
});

// For submenu dropdowns
$(document).ready(function() {
    $('.dropdown-submenu a.dropdown-toggle').on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).next('.dropdown-menu').toggleClass('show');
    });

    // Hide any open menus when focus is lost
    $('body').on('click', function(e) {
        $('.dropdown-submenu .dropdown-menu').removeClass('show');
    });
});

// Mobile click event
$(document).ready(function() {
  $('.dropdown-submenu a.dropdown-toggle').on("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).next('.dropdown-menu').toggleClass('show');
  });

  // Prevent the submenu from closing when clicking on dropdown-items
  $('.dropdown-submenu .dropdown-item').on("click", function(e) {
      e.stopPropagation();
  });

  // Hide any open menus when focus is lost
  $('body').on('click', function(e) {
      $('.dropdown-submenu .dropdown-menu').removeClass('show');
  });
});

// Season Clickbait --- Testing 0% ---- Ugly as hell
function randNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  _ = self.Flower = function(opts){
    this.left = opts.left;
    this.top = opts.top;
    this.size = randNum(1.5, 6);
    this.drawFlower();
  }
  _.prototype = {
    spinFlower: function(el){
      var r = 0;
      var spd = Math.random() * (3 - 0.05) + 0.05;
      (function spin() {
        if (r === 350){
          r = 0
        } else {
          r += spd
        }
        el.style.transform = 'rotate('+r+'deg)';
        requestAnimationFrame(spin);
      })();
    },
    fall: function(el){
      var _this = this;
      var max_right = _this.left + randNum(20, 50);
      var max_left = _this.left - randNum(20, 50);
      var dir_i = randNum(0,1);
      var directions = ['left', 'right'];
      var direction = directions[dir_i];
      (function fall() {
        if (_this.left === max_left){
          direction = 'right';
          max_left= _this.left - randNum(20, 50);
        }
        if (_this.left === max_right){
          direction = 'left';
          max_right = _this.left + randNum(20, 50);
        }
        if (direction === 'left'){
          _this.left -= 1
        } else {
          _this.left += 1
        }
        _this.top += 2;
        el.style.top = _this.top + 'px';
        el.style.left = _this.left + 'px';
        requestAnimationFrame(fall);
      })();
    },
    fadeOut: function(el){
      el.style.opacity = 1;
  
      (function fade() {
        if ((el.style.opacity -= .007) < 0) {
          el.parentNode.removeChild(el);
        } else {
          requestAnimationFrame(fade);
        }
      })();
    },
    get petal (){
      var petal = document.createElement('div');
      petal.style.userSelect = 'none';
      petal.style.position = 'absolute';
      petal.style.background = 'radial-gradient(white 10%, pink 70%)';
      petal.style.backgroundSize = this.size+'vmin';
      petal.style.backgroundPosition = '-'+this.size/2+'vmin 0';
      petal.style.width = petal.style.height = this.size/2+'vmin';
      petal.style.borderTopLeftRadius = petal.style.borderBottomRightRadius = (42.5 * this.size) / 100 + "vmin";
      return petal;
    },
    get petal_styles(){
      return [
        {
          transform: 'rotate(-47deg)',
          left: '50%',
          marginLeft: '-'+this.size/4+'vmin',
          top: 0
        },{
          transform: 'rotate(15deg)',
          left: '100%',
          marginLeft: '-'+(this.size * 39 /100)+'vmin',
          top: (this.size * 17.5) / 100 + 'vmin'
        },{
          transform: 'rotate(93deg)',
          left: '100%',
          marginLeft: '-'+(this.size * 51) / 100+'vmin',
          top: (this.size * 58) / 100 + 'vmin'
        },{
          transform: 'rotate(175deg)',
          left: '0%',
          marginLeft: (this.size * 5) / 100 +'vmin',
          top: (this.size * 58) / 100 + 'vmin'
        },{
          transform: 'rotate(250deg)',
          left: '0%',
          marginLeft: -(this.size * 8) / 100 +'vmin',
          top: (this.size * 17.5) / 100 + 'vmin'
        }
      ]
    },
    get flower(){
      var flower = document.createElement('div');
      flower.style.userSelect = 'none';
      flower.style.position = 'absolute';
      flower.style.left = this.left + 'px';
      flower.style.top = this.top + 'px';
      flower.style.width = this.size + 'vmin';
      flower.style.height = this.size + 'vmin';
       flower.style.pointerEvents = 'none'
      for (var i = 0; i < 5; i++){
        var petal = this.petal;
        // var styles = this.petal_styles[i];
        petal.style.transform = this.petal_styles[i]['transform'];
        petal.style.top = this.petal_styles[i]['top'];
        petal.style.left = this.petal_styles[i]['left'];
        petal.style.marginLeft = this.petal_styles[i]['marginLeft'];
        flower.appendChild(petal);
      }
      this.fadeOut(flower);
      this.spinFlower(flower);
      this.fall(flower);
      return flower;
    },
    drawFlower: function(){
      document.body.appendChild(this.flower);
    }
  }
  
  window.addEventListener('mousedown', function(e){
    var amt = randNum(1, 5);
    for (var i = 0; i < amt; i++){
      var top = randNum(e.clientY - 30, e.clientY + 30);
      var left = randNum(e.clientX - 30, e.clientX + 10);
      var flower = new Flower({
        top: top,
        left: left
      });
    }
  });