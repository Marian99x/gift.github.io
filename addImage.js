const arr = new Array(
  "src/image2.png",
  "src/image3.png",
  "src/image5.png",
  "src/image6.png",
  "src/image1.png",
  "src/image4.png",
  "src/gg.jpg",
  "src/image7.png",
  "src/ee.jpg"
);

const arrx = new Array(
  "src/aa.jpg",
  "src/dd.jpg",
  "src/cc.jpg",
  "src/bb.jpg",
  "src/jj.jpg",
  "src/ff.jpg",
  "src/gg.jpg",
  "src/hh.jpg",
  "src/ee.jpg"
);


let val = [];
val.length = 9;
val.fill(0);
const image = document.getElementsByTagName("img");
const v = document.getElementById("he");


function addListenerToImage() {
  for (let a = 0; image.length > a; a++) {
    image[a].src = arrx[a];
    image[a].addEventListener("click", (e) => {
      if (val[a] === 0) {
        val[a] = 1;
      } else {
        val[a] = 0;
      }
      var audio = new Audio('src/so.wav');
      audio.volume = 1.0;
      audio.play();
      image[a].classList.add("fade-out-img");
      
      image[a].addEventListener("transitionend", (ev) => {
        if (val[a] === 1) {
          image[a].src = arr[a];
        } else {
          image[a].src = arrx[a];
        }
        image[a].classList.remove("fade-out-img");
        image[a].classList.add("fade-in-img");
      });
    });
  }
}
