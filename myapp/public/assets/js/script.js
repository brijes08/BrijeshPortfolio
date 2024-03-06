$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
 
  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  jQuery(document).ready(function(){
    "use strict"
        $('.contact').ripples({
        // dropRadius: 10,
        // perturbance: 0.01,
        resolution: 500,
        dropRadius: 20,
        perturbance: 0.04
      });
  });
	
	particlesJS('home',
  {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
//           "mode": "repulse"
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 0.3
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);

  // typing text animation script
  // var typed = new Typed(".typing", {
  //   strings: ["React Developer", "Website Developer", "Website Designer", "Wordpress Developer"],
  //   typeSpeed: 100,
  //   backSpeed: 60,
  //   loop: true,
  // });

  // var typed = new Typed(".typing-2", {
  //   strings: ["React Developer", "Website Developer", "Website Designer", "Wordpress Developer"],
  //   typeSpeed: 100,
  //   backSpeed: 60,
  //   loop: true,
  // });
  
//   function currentTime() {
//   const curdate = new Date().getHours();
//   let css = '';
//   let greeting = '';
//   if (curdate >= 1 && curdate < 12) {
//     greeting = 'Good Morning';
//     css = '#00ff00';
//     document.getElementById('greetings');
//   } else if (curdate >= 12 && curdate < 17) {
//     greeting = 'Good Afternoon';
//     css = 'yellow';
//   } else if (curdate >= 17 && curdate < 21) {
//     greeting = 'Good Evening';
//     css = 'orange';
//   } else {
//     greeting = 'Hope You Had a Great Day Today';
//     css = '#ffd68a';
//   }
//   document.getElementById('greetings').innerHTML = greeting;
//   document.getElementById("greetings").style.color = css;
//   let t = setTimeout(function(){ currentTime() }, 1000);
// }
// currentTime();

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

/* Disable right-click of mouse, F12 key, and save key combinations on page */
// window.onload = function () {
//   document.addEventListener(
//     "contextmenu",
//     function (e) {
//       e.preventDefault();
//     },
//     false
//   );
//   document.addEventListener(
//     "keydown",
//     function (e) {
//       //document.onkeydown = function(e) {
//       // "I" key
//       if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
//         disabledEvent(e);
//       }
//       // "J" key
//       if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
//         disabledEvent(e);
//       }
//       // "S" key + macOS
//       if (
//         e.keyCode == 83 &&
//         (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
//       ) {
//         disabledEvent(e);
//       }
//       // "p" key + macOS
//       if (
//         e.keyCode == 80 &&
//         (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
//       ) {
//         disabledEvent(e);
//       }
//       // "U" key
//       if (e.ctrlKey && e.keyCode == 85) {
//         disabledEvent(e);
//       }
//       // "F12" key
//       if (event.keyCode == 123) {
//         disabledEvent(e);
//       }
//     },
//     false
//   );
//   function disabledEvent(e) {
//     if (e.stopPropagation) {
//       e.stopPropagation();
//     } else if (window.event) {
//       window.event.cancelBubble = true;
//     }
//     e.preventDefault();
//     return false;
//   }
// };

let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");

window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + "px";
  cursor1.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
};

document.querySelectorAll("a").forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add("active");
    cursor2.classList.add("active");
  };

  links.onmouseleave = () => {
    cursor1.classList.remove("active");
    cursor2.classList.remove("active");
  };
});