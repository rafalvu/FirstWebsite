const video = document.querySelectorAll(".hiddenText");
const youtubeHoverables = document.querySelectorAll(".embed-responsive-item");

youtubeHoverables.forEach((item) =>
  item.addEventListener("mouseover", (el) => {
    console.log(el);
  })
);

video.forEach((vid) =>
  vid.addEventListener("mouseover", () => console.log("hello"))
);

console.log(video);
