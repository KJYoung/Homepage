import React from 'react';
import styled from "styled-components";

function Gallery() {
  return (
    <GalleryBody>
      <div>
        Welcome to the Gallery.
      </div>
      <div>
        <GalleryIMG src={process.env.PUBLIC_URL + "/gallery/20230117_Paris1.jpg"} alt="Paris1_Test" />
      </div>
    </GalleryBody>
  );
}

const GalleryIMG = styled.img`
    max-width: 1200px;
    max-height: 600px;
`

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
