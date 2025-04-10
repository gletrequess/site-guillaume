window.addEventListener('load', () => {
  gsap.registerPlugin(ScrollTrigger);
  const uiText = new SplitType('#ui-text', {
    types: "words",
    tagName: "span",
    reduceWhiteSpace: true,
  });
  const uxText = new SplitType('#ux-text', {
    types: "words",
    tagName: "span",
    reduceWhiteSpace: true,
  });
  const commText = new SplitType('#comm-text', {
    types: "words",
    tagName: "span",
    reduceWhiteSpace: true,
  });
  const devText = new SplitType('#dev-text', {
    types: "words",
    tagName: "span",
    reduceWhiteSpace: true,
  });
  const gestText = new SplitType('#gest-text', {
    types: "words",
    tagName: "span",
    reduceWhiteSpace: true,
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(uiText.words, {
    scrollTrigger:{
      trigger: "#ui-text",
      start: "0%, 70%",
      end: "100%, 70%",
      markers: false,
      scrub: 1,
    },
    opacity: 0.25,
    stagger: 0.1,
    
  });
  gsap.from(uxText.words, {
    scrollTrigger:{
      trigger: "#ux-text",
      start: "0%, 70%",
      end: "100%, 70%",
      markers: false,
      scrub: 1,
    },
    opacity: 0.25,
    stagger: 0.1,
    
  });
  gsap.from(commText.words, {
    scrollTrigger:{
      trigger: "#comm-text",
      start: "0%, 70%",
      end: "100%, 70%",
      markers: false,
      scrub: 1,
    },
    opacity: 0.25,
    stagger: 0.1,
    
  });
  gsap.from(devText.words, {
    scrollTrigger:{
      trigger: "#dev-text",
      start: "0%, 70%",
      end: "100%, 70%",
      markers: false,
      scrub: 1,
    },
    opacity: 0.25,
    stagger: 0.1,
    
  });
  gsap.from(gestText.words, {
    scrollTrigger:{
      trigger: "#gest-text",
      start: "0%, 70%",
      end: "100%, 70%",
      markers: false,
      scrub: 1,
    },
    opacity: 0.25,
    stagger: 0.1,
    
  });

});