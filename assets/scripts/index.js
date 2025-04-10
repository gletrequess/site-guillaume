window.addEventListener("load", function () {
    const input = document.querySelectorAll(".contact-form-input");
    const inputNumber = document.querySelectorAll(".contact-form-number");

    let mm = gsap.matchMedia();

    input.forEach(element => {
        element.addEventListener("focus", function () {
            inputNumber[element.dataset.index].classList.add("contact-form-number--active");
        })
        element.addEventListener("focusout", function () {
            inputNumber[element.dataset.index].classList.remove("contact-form-number--active");
        })
    })

    /**
     * Images parralax by their respective container
     */
    const comp_images = gsap.utils.toArray('.competence-image');
    const comp_container = gsap.utils.toArray('.competence-container');

    for (let i = 0; i < comp_container.length; i++) {
        comp_container[i].addEventListener("mousemove", (e) => {
            parallax(e, comp_images[i])
        })
        comp_container[i].addEventListener("mouseleave", (e) => {
            reset(comp_images[i])
        })
    }

    function reset(element) {
        TweenMax.to(element, 0.5, { x: 0, y: 0 })
    }

    function parallax(e, element) {
        let mousePosXRatio = (e.clientX - (window.innerWidth / 2)) * 0.075;
        let mousePosYRatio = (e.clientY - (window.innerHeight / 2)) * 0.075;
        TweenMax.to(element, 0.5, { x: mousePosXRatio, y: mousePosYRatio })
    }


    // ANIMATION ON SCROLL


    gsap.registerPlugin(ScrollTrigger);

    // PROJETS
    const real_item = gsap.utils.toArray('.realisation-item');
    const videos = document.querySelectorAll(".realisation-video");

    real_item.forEach(element => {
        element.addEventListener("mouseenter", function () {
            videos[element.dataset.index].classList.remove("visibility-off")
            videos[element.dataset.index].play();
            element.classList.add('active');
        })
        element.addEventListener("mouseleave", function () {
            videos[element.dataset.index].classList.add("visibility-off")
            videos[element.dataset.index].pause();
            element.classList.remove('active');
        })
    })

    // COMPETENCE ITEM
    const competence_slash = gsap.utils.toArray('.competence-slash');
    const competence_title = gsap.utils.toArray('.competence-title-content');

    competence_slash.forEach(slash => {
        gsap.to(slash, {
            scrollTrigger: {
                trigger: slash,
                start: "100% 80%",
            },
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            transform: "translate(0,0)",
            duration: 0.5
        })
    });

    competence_title.forEach(title => {
        gsap.to(title, {
            scrollTrigger: {
                trigger: title,
                start: "100% 80%",
            },
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            transform: "translateX(0)",
            duration: 0.5,
            delay: 0.5
        })
    });

    // WHITE MODE
    const whiteMode = gsap.utils.toArray(".white-mode")
    const body = document.querySelector("body");

    mm.add("(min-width: 1024px)", () => {

        whiteMode.forEach(element => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 30%",
                    end: "bottom 30%",
                    markers: false,
                    onEnter: () => { //Add white mode
                        body.classList.add("white-mode--var");
                    },
                    onEnterBack: () => { //Add white mode
                        body.classList.add("white-mode--var");
                    },
                    onLeave: () => { //Add dark mode
                        body.classList.remove("white-mode--var");
                    },
                    onLeaveBack: () => { //Add dark mode
                        body.classList.remove("white-mode--var");
                    }
                }
            })
        })
    })
})