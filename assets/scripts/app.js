window.addEventListener("load", function () {

    const soundwaveContainer = document.querySelector(".navbar-sound-container");
    const soundwaveItem = document.querySelectorAll(".soundwave-wave");
    const menuButton = document.querySelector(".navbar-menu-button");
    const burgerSpan = document.querySelectorAll(".burger-span");
    const navbar = document.querySelector(".navbar");
    const navbarMenuContent = document.querySelector(".navbar-menu-content");
    const music = document.querySelector(".website-music");
    const content = document.querySelector(".main-content")

    music.volume = 0.2;

    /**
     * SOUNDWAVE ANIMATION TOOGLE
     */
    
    soundwaveContainer.style.height = menuButton.clientHeight + "px";

    soundwaveContainer.addEventListener("click", function () {
        let date = new Date();

        let hours = date.getHours()
        let minutes = date.getMinutes()

        if(music.paused){
            if((hours == 9 && minutes>= 58) || (hours <= 10 && minutes <= 2)){
                music.src = "./assets/music/ambiant-website.mp3";
                music.play();
            }else{
                music.src = "./assets/music/ambiant-website.mp3";
                music.play();
            }
        }else{
            music.pause();
        }
        
        soundwaveItem.forEach(element => {
            element.classList.toggle("animation-paused");
            element.classList.toggle("soundwave--start");
        })
    })


    /**
     * MENU BURGER
     */
    menuButton.addEventListener("click", function () {
        burgerSpan[0].classList.toggle("burger-span1--active");
        burgerSpan[1].classList.toggle("burger-span2--active");

        navbarMenuContent.classList.toggle("navbar-menu-content--active");
    })

    content.addEventListener("click", function(){
        burgerSpan[0].classList.remove("burger-span1--active");
        burgerSpan[1].classList.remove("burger-span2--active");

        navbarMenuContent.classList.remove("navbar-menu-content--active");
    })


    navbarMenuContent.style.top = navbar.clientHeight + "px";


    /**
     * COPY POPUP
     */

    let copy = document.querySelectorAll(".copy");
    let copy_popup = document.querySelector(".copy-popup");

    copy.forEach(element => {
        element.addEventListener("click", (e) => {
            copy_popup.style.left = e.clientX + "px";
            copy_popup.style.top = e.clientY + "px";
            copy_popup.style.visibility = "visible";
            setTimeout(() => {
                copy_popup.style.visibility = "hidden";
            }, 1500);
            navigator.clipboard.writeText("guillaume.letrequesser@gmail.com");
        });
    })

    this.document.addEventListener('mousemove', (e) => {
        copy_popup.style.left = e.clientX + 6 + "px";
        copy_popup.style.top = e.clientY + 6 + "px";

    })

    /**
     * CURSOR
     */

    const cursor = document.querySelector('.cursor');
    let buttons_ripple = gsap.utils.toArray(".button-ripple-hover");

    function moveCursor(e) {
        requestAnimationFrame(() => {
            TweenMax.to(cursor, 0.5, { x: (e.clientX - (cursor.offsetWidth / 2)), y: (e.clientY - (cursor.offsetHeight / 2)), duration: 0.05 })
        })
    }

    function changeCursorSize(scale) {
        requestAnimationFrame(() => {
            TweenMax.to(cursor, 0.5, { scale: scale })
        })
    }

    function resetCursorSize() {
        requestAnimationFrame(() => {
            TweenMax.to(cursor, 0.5, { scale: 1 })
        })
    }

    function cursorText(text) {
        requestAnimationFrame(() => {
            cursor.innerText = text;
        })
    }

    window.addEventListener('mousemove', moveCursor);

    /**
     * BUTTON RIPPLE EFFECT
     */
    buttons_ripple.forEach(button => {
        let ripple = this.document.createElement('div');
        Object.assign(ripple.style, {
            mixBlendMode: "difference",
            position: "absolute",
            display: "block",
            background: "#fff",
            top: 0,
            left: 0,
            width: "0px",
            height: "0px",
            borderRadius: "100%",
            transformOrigine: "center",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
        })
        button.appendChild(ripple);

        button.addEventListener('mouseenter', (e) => {
            cursor.style.mixBlendMode = "normal";
            changeCursorSize(0);

            // Blinks ripple to the edge where mouse is
            ripple.style.left = e.pageX - button.offsetLeft + "px";
            ripple.style.top = e.pageY - button.offsetTop + "px";

            // Animate ripple
            gsap.to(ripple, 0.5, {
                width: button.offsetWidth * 2.5,
                height: button.offsetWidth * 2.5
            });
        })

        button.addEventListener('mouseout', (e) => {
            resetCursorSize();

            // Blinks ripple to the edge where mouse is
            ripple.style.left = e.pageX - button.offsetLeft + "px";
            ripple.style.top = e.pageY - button.offsetTop + "px";

            // Animate ripple
            gsap.to(ripple, 0.5, {
                width: 0,
                height: 0,
                onComplete() {
                    cursor.style.mixBlendMode = "difference";
                }
            });
        })
    });

    const cursorClick = document.querySelectorAll(".cursor-state-click");

    cursorClick.forEach(element => 
        element.addEventListener("mouseover", function () {
            cursorText("Click") //Le texte ne marche pas
            changeCursorSize(4)

        })
    )
    cursorClick.forEach(element => 
        element.addEventListener("mouseout", function () {
            cursorText("")
            resetCursorSize()

        })
    )
})