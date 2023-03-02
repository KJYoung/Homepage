import React from 'react';
import styled from "styled-components";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: process.env.PUBLIC_URL + "/gallery/20230117_Paris1.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/20230117_Paris2.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/20230118_Paris3.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/20230118_Paris4.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/20230118_Paris5.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/20230119_Paris6.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/20230119_Paris7.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/20230119_Paris8.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/20230120_Paris9.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/20230120_Paris10.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/20230120_Paris11.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/20230120_Paris12.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/20230120_Paris13.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/20230121_Paris14.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/20230121_Paris15.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/20230121_Paris16.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/20230122_Paris17.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/20230122_Paris18.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/20230123_Paris19.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/20230123_Paris20.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/20230124_Paris21.png" },
    { url: process.env.PUBLIC_URL + "/gallery/20230124_Paris22.jpg" },
  ];

function Gallery() {
  return (
    <GalleryBody>
      <div>
        Welcome to the Gallery.
      </div>
      <div>
        <SimpleImageSlider
            width={1200}
            height={600}
            images={images}
            showBullets={true}
            showNavs={true}
        />
      </div>
    </GalleryBody>
  );
}

const GalleryBody = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100%;
    min-height: 600px;
    margin-top: 100px;
    border: 1px solid red;
    background-color: var(--hp-white);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
    }
    /* Modal Shadow */
    -webkit-box-shadow: 0 10px 12px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 10px 12px rgba(0, 0, 0, 0.3);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding-box;
    background-clip: padding-box;
`;

export default Gallery;
