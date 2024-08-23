import gsap from "gsap";

export function cursorJs() {
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".circle");
  const circle2 = document.querySelectorAll(".circle2");
  const cursor = document.querySelector(".project-circle");
  const liveCursor = document.querySelector(".go-live-circle");

  circles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
  });

  // single circle
  function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";

      circle.style.scale = (circles.length - index) / circles.length;

      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];

      x += (nextCircle.x - x) * 0.5;
      y += (nextCircle.y - y) * 0.5;
    });

    requestAnimationFrame(animateCircles);
  }

  animateCircles();
  // Handling x y co-ordinates
  function getCursorPosition(event) {
    coords.x = event.x;
    coords.y = event.y;
    gsap.to(".circle", {
      scale: 1,
    });

    gsap.to(circle2, {
      scale: 1,
      x: event.x - 11 + "px",
      y: event.y - 10 + "px",
      duration: 0,
    });

    gsap.to(cursor, {
      x: event.x - 11 + "px",
      y: event.y - 10 + "px",
    });
    gsap.to(liveCursor, {
      x: event.x - 11 + "px",
      y: event.y - 10 + "px",
    });
  }

  window.addEventListener("mousemove", getCursorPosition);
  document
    .querySelector(".appDiv")
    .addEventListener("mouseleave", function () {
      gsap.to(".circle", {
        scale: 0,
      });
      gsap.to(circle2, {
        scale: 0,
      });
    });

  // Handling h1
  // const head = document.querySelector(".head");
  // head.addEventListener("mousemove", function () {
  //   gsap.to(circle2, {
  //     scale: 6,
  //   });
  //   gsap.to(".circle", {
  //     opacity: 0,
  //     duration: 0.1,
  //   });
  // });
  // head.addEventListener("mouseout", function () {
  //   gsap.to(circle2, {
  //     scale: 1,
  //   });
  //   gsap.to(".circle", {
  //     opacity: 1,
  //     duration: 0.1,
  //   });
  // });

  // hide unhide up-btn
  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 200) {
      gsap.to(".up-btn", {
        opacity: 1,
      });
    } else {
      gsap.to(".up-btn", {
        opacity: 0,
      });
    }
  });
}