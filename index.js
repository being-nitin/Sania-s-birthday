const moments = [
  {
    img: "Saanu/9.jpg",
    quote: "Every love story is beautiful, but ours is my favorite.",
  },
  {
    img: "Saanu/8.jpg",
    quote: "With you, every moment is a memory.",
  },
  {
    img: "Saanu/10.jpg",
    quote: "You make my heart smile, every single day.",
  },
  {
    img: "Saanu/12.jpg",
    quote: "Forever isn't long enough with you.",
  },
  {
    img: "Saanu/7.jpg",
    quote: "Every love story is beautiful, but ours is my favorite.",
  },
  {
    img: "Saanu/8.jpg",
    quote: "With you, every moment is a memory.",
  },
  {
    img: "Saanu/9.jpg",
    quote: "You make my heart smile, every single day.",
  },
  {
    img: "Saanu/10.jpg",
    quote: "Forever isn't long enough with you.",
  },
  {
    img: "Saanu/11.jpg",
    quote: "Every love story is beautiful, but ours is my favorite.",
  },
  {
    img: "Saanu/12.jpg",
    quote: "With you, every moment is a memory.",
  },
  {
    img: "Saanu/13.jpg",
    quote: "You make my heart smile, every single day.",
  },
  {
    img: "Saanu/14.jpg",
    quote: "Forever isn't long enough with you.",
  },
  {
    img: "Saanu/15.jpg",
    quote: "Every love story is beautiful, but ours is my favorite.",
  },
  {
    img: "Saanu/16.jpg",
    quote: "With you, every moment is a memory.",
  },
  {
    img: "Saanu/17.jpg",
    quote: "You make my heart smile, every single day.",
  },
  {
    img: "Saanu/18.jpg",
    quote: "Forever isn't long enough with you.",
  },
  {
    img: "Saanu/19.jpg",
    quote: "Every love story is beautiful, but ours is my favorite.",
  },
  {
    img: "Saanu/20.jpg",
    quote: "With you, every moment is a memory.",
  },
  {
    img: "Saanu/21.jpg",
    quote: "You make my heart smile, every single day.",
  },
  {
    img: "Saanu/22.jpg",
    quote: "Forever isn't long enough with you.",
  },
  {
    img: "Saanu/23.jpg",
    quote: "Every love story is beautiful, but ours is my favorite.",
  },
  {
    img: "Saanu/24.jpg",
    quote: "With you, every moment is a memory.",
  },
  {
    img: "Saanu/25.jpg",
    quote: "You make my heart smile, every single day.",
  },
  {
    img: "Saanu/26.jpg",
    quote: "Forever isn't long enough with you.",
  },
  {
    img: "Saanu/27.jpg",
    quote: "Every love story is beautiful, but ours is my favorite.",
  },
  {
    img: "Saanu/28.jpg",
    quote: "With you, every moment is a memory.",
  },
  {
    img: "Saanu/29.jpg",
    quote: "You make my heart smile, every single day.",
  },
  {
    img: "Saanu/30.jpg",
    quote: "Forever isn't long enough with you.",
  },
  {
    img: "Saanu/31.jpg",
    quote: "Every love story is beautiful, but ours is my favorite.",
  },
  {
    img: "Saanu/32.jpg",
    quote: "With you, every moment is a memory.",
  },
  {
    img: "Saanu/33.jpg",
    quote: "You make my heart smile, every single day.",
  },
  {
    img: "Saanu/34.jpg",
    quote: "Forever isn't long enough with you.",
  },
  {
    img: "Saanu/35.jpg",
    quote: "Every love story is beautiful, but ours is my favorite.",
  },
  {
    img: "Saanu/36.jpg",
    quote: "With you, every moment is a memory.",
  },
  {
    img: "Saanu/37.jpg",
    quote: "You make my heart smile, every single day.",
  },
  {
    img: "Saanu/38.jpg",
    quote: "Forever isn't long enough with you.",
  },
  {
    img: "Saanu/39.jpg",
    quote: "Every love story is beautiful, but ours is my favorite.",
  },
  {
    img: "Saanu/40.jpg",
    quote: "With you, every moment is a memory.",
  },
  {
    img: "Saanu/41.jpg",
    quote: "You make my heart smile, every single day.",
  },
  {
    img: "Saanu/42.jpg",
    quote: "Forever isn't long enough with you.",
  },
];

let index = 0;
const gallery = document.getElementById("gallery");

function showMoment(i) {
  const moment = moments[i];
  gallery.innerHTML = `
    <img src="${moment.img}" alt="moment${i}" />
    <p class="quote">"${moment.quote}"</p>
  `;
}

function showNext() {
  index = (index + 1) % moments.length;
  showMoment(index);
}

// Show the first moment
showMoment(index);

// Auto-play gallery every 3 seconds
setInterval(showNext, 3000);

// Music autoplay workaround
window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const tryPlay = () => {
    music.play().catch(() => {});
  };
  tryPlay();
  document.addEventListener("click", tryPlay, { once: true });
});

function unlockConfession() {
  const code = prompt("Enter the secret code 💖");
  if (code && code.toLowerCase() === "miss uk") {
    window.location.href = "confession.html";
  } else {
    alert("Oops! That's not the right code. Try again, love 💔");
  }
}
