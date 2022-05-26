let jSON = [
  {
    id: 0,
    photo: "Images/IMG-20220313-WA0023.jpg",
  },
  {
    id: 1,
    photo: "Images/IMG-20220407-WA0025.jpg",
  },
  {
    id: 2,
    photo: "Images/IMG_2542.jpeg",
  },
  {
    id: 3,
    photo: "Images/IMG_0579.jpeg",
  },
  {
    id: 4,
    photo: "Images/IMG_0031.JPG",
  },
  {
    id: 5,
    photo: "Images/IMG-20220313-WA0023.jpg",
  },
  {
    id: 6,
    photo: "Images/IMG-20220407-WA0029.jpg",
  },
];

console.log(jSON);

let postImgCont = document.querySelector(".post-img-cont");

let postContent = jSON.map((i) => {
  return `<div class="post-content-img-wrapper"> 
    <div class="post-main-img"> 
      <img src="${i.photo}" alt="" />
    </div>
  </div>`;
});

postImgCont.innerHTML = postContent.join(" ");
