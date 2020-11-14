import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Loader from "../../components/Loader";

import "./index.scss";

import Social from "../../components/Social";
import { HashLink as Link } from "react-router-hash-link";

const CustomGallery = ({ data, name, size }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photos, setPhotos] = useState(null);

  const createPhotos = async () => {
    const arr = [];

    if (name) {
      const photos = data[name].photos;

      for (const photo in photos) {
        const src = photos[photo][size];
        const tmpImg = new Image();
        tmpImg.src = src;
        const item = await new Promise((resolve) => {
          tmpImg.onload = function () {
            const height = tmpImg.height;
            const width = tmpImg.width;

            if (width > height) {
              resolve({ src, width: 4, height: 3 });
            } else if (width < height) {
              resolve({ src, width: 3, height: 4 });
            } else {
              resolve({ src, width: 1, height: 1 });
            }
          };
        });

        arr.push(item);
      }
    }
    setPhotos(arr);
  };

  useEffect(() => {
    createPhotos();
  }, []);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  if (photos) {
    return (
      <div className="gallery">
        <div className="gallery__imagesBox">
          <Gallery
            targetRowHeight={750}
            photos={photos}
            onClick={openLightbox}
          />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
        <div className="gallery__titleBox">{name}</div>

        <Link className="gallery__btn" to="/#portfolio">
          wróć
        </Link>
        <Social />
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default CustomGallery;
