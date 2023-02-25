import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryWrap = document.querySelector(".gallery");
const galleryCollection = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(
      ({ original, preview, description }) =>
        `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>`
    )
    .join("");
}

galleryWrap.insertAdjacentHTML("beforeend", galleryCollection);

// ------------------funkcja do otwierania okna modalnego------------------
const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionsDelay: 250,
});
