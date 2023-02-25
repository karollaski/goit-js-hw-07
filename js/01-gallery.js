import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryWrap = document.querySelector(".gallery");
const galleryCollection = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(
      ({ original, preview, description }) => `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`
    )
    .join("");
}

galleryWrap.insertAdjacentHTML("beforeend", galleryCollection);

// ------------------funkcja do otwierania okna modalnego------------------
const selectPhoto = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: () => window.addEventListener("keydown", keyClose),
      onClose: () => window.removeEventListener("keydown", keyClose),
    }
  );

  const keyClose = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  };

  instance.show();
};

galleryWrap.addEventListener("click", selectPhoto);
