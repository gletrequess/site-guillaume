// window.addEventListener("DOMContentLoaded", function () {
//     const loadingPercent = document.querySelector(".js-counter-value");
//     let percent = 0;
//     gsap.to(".progress-bar--fill", {
//         width: "67%",
//         duration: 2
//     })
//     setInterval(() => {
//         if (percent <= 67) {
//             loadingPercent.innerHTML = percent;
//             percent++;
//         } else {
//             clearInterval();
//         }
//     }, 40);
//     window.onload = function () {
//         const loader = document.querySelector(".loader-section");
//         setTimeout(() => {
//             gsap.to(".progress-bar--fill", {
//                 width: "100%",
//                 duration: 0.7
//             })
//             setInterval(() => {
//                 if (percent <= 100) {
//                     loadingPercent.innerHTML = percent;
//                     percent++;
//                 } else {
//                     clearInterval();
//                 }
//             }, 40);
//             document.querySelector("body").style = "overflow-y: scroll;"
//             setTimeout(() => {
//                 loader.style = "opacity: 0;"
//             }, 3000);
//             setTimeout(() => {
//                 loader.style = "display:none;"
//             }, 3500);
           
//         }, 500);
//     };
// })

