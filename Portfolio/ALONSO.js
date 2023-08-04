document.addEventListener("DOMContentLoaded", function() {
    let animatedElements = document.querySelectorAll(".type-in-animation");
    animatedElements.forEach((element) => {
      element.style.animationPlayState = "paused";
        });
});
window.onload = function() {
    let animatedElements = document.querySelectorAll(".type-in-animation");
    animatedElements.forEach((element) => {
      let text = element.getAttribute("data-text");
      let animationDuration = 2000; // In milliseconds (adjust as needed)
      let animationDelay = 1000; // In milliseconds (adjust as needed)
  
      // Delay the animation to give a pause before it starts typing
      setTimeout(() => {
        element.innerText = text;
        element.style.animationPlayState = "running";
        element.style.animationDuration = `${animationDuration}ms`;
      }, animationDelay);
    });
  };