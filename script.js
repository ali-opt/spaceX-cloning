


document.addEventListener("DOMContentLoaded", function() {
    window.scrollTo(0, 0);
  });
  window.onload = function() {
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 0);
  };



gsap.to("#nav" , {
    duration: 0.5,
    opacity: 0,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers: true,
        start:"top -50%",
        end: "top 90%",
        scrub:1
    }
})

