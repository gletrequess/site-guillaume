const slider = document.querySelectorAll('.real-detail-slider-container');
let isDown = false;
let startX;
let scrollLeft;

slider.forEach(element => {
    element.addEventListener('mousedown', (e) => {
        isDown = true;
        element.classList.add('active');
        startX = e.pageX - element.offsetLeft;
        scrollLeft = element.scrollLeft;
      });
      element.addEventListener('mouseleave', () => {
        isDown = false;
        element.classList.remove('active');
      });
      element.addEventListener('mouseup', () => {
        isDown = false;
        element.classList.remove('active');
      });
      element.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - element.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        element.scrollLeft = scrollLeft - walk;
      });
})

