$(document).ready(function () {
  // gsap timeline animation call to action
  var timeline = gsap.timeline();

  timeline.from("span", {
    duration: 2,
    opacity: 0,
    scale: 3,
    ease: "back.out",
  });
  timeline.from(
    ".heroimage1",
    { duration: 1.5, ease: "expo.out", x: 600 },
    "-=1"
  );
  timeline.from(".heroimage2", { duration: 0.5, ease: "expo.out", x: 800 });

  //   mouseover anchor button animation

  $("a").mouseover(function (e) {
    gsap.to($(this), 0.2, { css: { scale: 1.1 }, repeat: 3, yoyo: true });
  });
});
