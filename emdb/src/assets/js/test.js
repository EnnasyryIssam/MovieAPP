// var container = document.getElementById('container')
// var slider = document.getElementById('slider1');
// var slides = document.getElementsByClassName('slide').length;
// var buttons = document.getElementsByClassName('btn');

// var currentPosition = 0;
// var currentMargin = 0;
// var slidesPerPage = 0;
// var slidesCount = slides - slidesPerPage;
// var containerWidth = container.offsetWidth;
// var prevKeyActive = false;
// var nextKeyActive = true;

// window.addEventListener("resize", checkWidth);

// function checkWidth() {
//     containerWidth = container.offsetWidth;
//     setParams(containerWidth);
// }

// function setParams(w) {
//     if (w < 551) {
//         slidesPerPage = 1;
//     } else {
//         if (w < 901) {
//             slidesPerPage = 2;
//         } else {
//             if (w < 1101) {
//                 slidesPerPage = 3;
//             } else {
//                 slidesPerPage = 4;
//             }
//         }
//     }
//     slidesCount = slides - slidesPerPage;
//     if (currentPosition > slidesCount) {
//         currentPosition -= slidesPerPage;
//     };
//     currentMargin = - currentPosition * (100 / slidesPerPage);
//     slider.style.marginLeft = currentMargin + '%';
//     if (currentPosition > 0) {
//         buttons[0].classList.remove('inactive');
//     }
//     if (currentPosition < slidesCount) {
//         buttons[1].classList.remove('inactive');
//     }
//     if (currentPosition >= slidesCount) {
//         buttons[1].classList.add('inactive');
//     }
// }

// setParams();

// function slideRight() {
//     if (currentPosition != 0) {
//         slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
//         currentMargin += (100 / slidesPerPage);
//         currentPosition--;
//     };
//     if (currentPosition === 0) {
//         buttons[0].classList.add('inactive');
//     }
//     if (currentPosition < slidesCount) {
//         buttons[1].classList.remove('inactive');
//     }
// };

// function slideLeft() {
//     if (currentPosition != slidesCount) {
//         slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
//         currentMargin -= (100 / slidesPerPage);
//         currentPosition++;
//     };
//     if (currentPosition == slidesCount) {
//         buttons[1].classList.add('inactive');
//     }
//     if (currentPosition > 0) {
//         buttons[0].classList.remove('inactive');
//     }
// };

// function click() {
//   $(".related-card-img").click(function () {
//     alert("Clicked");
//   });
// }

// $(document).ready(function () {
//   var count = 0;
//   var inc = 0;
//   margin = 0;
//   var slider = document.getElementById("test");
//   alert(slider.innerHTML);
//   var itemDisplay = 0;
//   if (screen.width > 990) {
//     itemDisplay = document
//       .getElementsByClassName("slider-container")[0]
//       .getAttribute("item-display-d");
//     margin = itemDisplay * 5;
//   }
//   if (screen.width > 700 && screen.width < 990) {
//     itemDisplay = document
//       .getElementsByClassName("slider-container")[0]
//       .getAttribute("item-display-t");
//     margin = itemDisplay * 6.8;
//   }
//   if (screen.width > 280 && screen.width < 700) {
//     itemDisplay = document
//       .getElementsByClassName("slider-container")[0]
//       .getAttribute("item-display-m");
//     margin = itemDisplay * 20;
//   }

//   var items = document.getElementsByClassName("item");
//   var itemleft = items.length % itemDisplay;
//   var itemslide = Math.floor(items.length / itemDisplay) - 1;
//   alert("Item");
//   for (let i = 0; i < items.length; i++) {
//     items[i].style.width = screen.width / itemDisplay - margin + "px";
//   }

//   function prev() {
//     if (inc !== 0) {
//       if (inc == itemleft) {
//         inc = inc - itemleft;
//         count = count + (screen.width / itemDisplay) * itemleft;
//       } else {
//         inc--;
//         count = count + screen.width;
//       }
//     }
//     console.log(inc);
//     console.log(slider);
//     slider.style.left = count + "px";
//   }

//   function next() {
//     if (inc !== itemslide + itemleft) {
//       if (inc == itemslide) {
//         inc = inc + itemleft;
//         count = count - (screen.width / itemDisplay) * itemleft;
//       } else {
//         inc++;
//         count = count - screen.width;
//       }
//     }
//     slider.style.left = count + "px";
//   }
// });
