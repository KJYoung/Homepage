import React, { useState } from 'react';
import styled from "styled-components";
import SimpleImageSlider from "react-simple-image-slider";
import { BELGIUM_images, FRANCE_images, GREECE_images, ITALY_images, NETHERLANDS_images, SWISS_images, TURKIYE_images } from './Gallery_URL';

enum CATEGORY {
   NONE = 0,
   FRANCE = 1,
   BELGIUM = 2, NETHERLANDS = 3,
   SWISS = 4,
   TURKIYE = 5, GREECE = 6,
   ITALY = 7
};

function Gallery() {
  const [category, setCategory] = useState(0);
  return (
    <>
        <div>
            <span>Welcome to the Gallery. Choose the Category what you want to see.</span>
            <select onChange={e => setCategory(Number.parseInt(e.target.value))}>
                <option value={0}>CHOOSE CATEGORY!</option>
                <option value={CATEGORY.FRANCE}>🇫🇷Paris, Colmar, Strasbourg ({FRANCE_images.length})</option>
                <option value={CATEGORY.BELGIUM}>🇧🇪Brussels, Antwerpen ({BELGIUM_images.length})</option>
                <option value={CATEGORY.NETHERLANDS}>🇳🇱Amsterdam ({NETHERLANDS_images.length})</option>
                <option value={CATEGORY.SWISS}>🇨🇭Bern, Interlaken, Jungfrau ({SWISS_images.length})</option>
                <option value={CATEGORY.TURKIYE}>🇹🇷Istanbul, Cappadocia ({TURKIYE_images.length})</option>
                <option value={CATEGORY.GREECE}>🇬🇷Santorini, Athens ({GREECE_images.length})</option>
                <option value={CATEGORY.ITALY}>🇮🇹Rome, Vatican, Venice ({ITALY_images.length})</option>
            </select>
        </div>
        <GalleryBody>
            <div>
                {category === CATEGORY.NONE && <span> Choose the Category! </span>}
                {category === CATEGORY.FRANCE && <SimpleImageSlider width={1200} height={600} images={FRANCE_images} showBullets={true} showNavs={true}/>}
                {category === CATEGORY.BELGIUM && <SimpleImageSlider width={1200} height={600} images={BELGIUM_images} showBullets={true} showNavs={true}/>}
                {category === CATEGORY.NETHERLANDS && <SimpleImageSlider width={1200} height={600} images={NETHERLANDS_images} showBullets={true} showNavs={true}/>}
                {category === CATEGORY.SWISS && <SimpleImageSlider width={1200} height={600} images={SWISS_images} showBullets={true} showNavs={true}/>}
                {category === CATEGORY.TURKIYE && <SimpleImageSlider width={1200} height={600} images={TURKIYE_images} showBullets={true} showNavs={true}/>}
                {category === CATEGORY.GREECE && <SimpleImageSlider width={1200} height={600} images={GREECE_images} showBullets={true} showNavs={true}/>}
                {category === CATEGORY.ITALY && <SimpleImageSlider width={1200} height={600} images={ITALY_images} showBullets={true} showNavs={true}/>}
            </div>
        </GalleryBody>
    </>
  );
}

const GalleryBody = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100%;
    min-height: 600px;
    margin-top: 100px;
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
