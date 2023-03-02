import React, { useState } from 'react';
import styled from "styled-components";
import SimpleImageSlider from "react-simple-image-slider";

enum CATEGORY {
   NONE = 0,
   FRANCE = 1,
   BELGIUM = 2, NETHERLAND = 3,
   SWISS = 4,
   TURKIYE = 5, GREECE = 6,
   ITALY = 7
};

const FRANCE_images = [
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230117_Paris1.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230117_Paris2.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230118_Paris3.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230118_Paris4.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230118_Paris5.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230119_Paris6.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230119_Paris7.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230119_Paris8.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230120_Paris9.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230120_Paris10.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230120_Paris11.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230120_Paris12.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230120_Paris13.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230121_Paris14.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230121_Paris15.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230121_Paris16.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230122_Paris17.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230123_Paris18.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230123_Paris19.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230124_Paris20.png" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230124_Paris21.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230126_Strasbourg22.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230126_Strasbourg23.jpg" },
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230127_Paris24.jpg" },
  ];
const BELGIUM_images = [
    { url: process.env.PUBLIC_URL + "/gallery/BELGIUM/20230127_Brussel1.jpg" },
];
const NETHERLAND_images = [
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230117_Paris1.jpg" },
];
const SWISS_images = [
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230117_Paris1.jpg" },
];
const TURKIYE_images = [
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230117_Paris1.jpg" },
];
const GREECE_images = [
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230117_Paris1.jpg" },
];
const ITALY_images = [
    { url: process.env.PUBLIC_URL + "/gallery/FRANCE/20230117_Paris1.jpg" },
];

function Gallery() {
  const [category, setCategory] = useState(0);
  return (
    <>
        <div>
            <span>Welcome to the Gallery. Choose the Category what you want to see.</span>
            <select onChange={e => setCategory(Number.parseInt(e.target.value))}>
                <option value={0}>CHOOSE CATEGORY!</option>
                <option value={CATEGORY.FRANCE}>🇫🇷Paris, Colmar, Strasbourg</option>
                <option value={CATEGORY.BELGIUM}>🇧🇪Brussels</option>
                <option value={CATEGORY.NETHERLAND}>🇳🇱Amsterdam</option>
                <option value={CATEGORY.SWISS}>🇨🇭Bern, Interlaken, Jungfrau</option>
                <option value={CATEGORY.TURKIYE}>🇹🇷Istanbul, Cappadocia</option>
                <option value={CATEGORY.GREECE}>🇬🇷Santorini, Athens</option>
                <option value={CATEGORY.ITALY}>🇮🇹Rome, Venice</option>
            </select>
        </div>
        <GalleryBody>
            <div>
                {category === CATEGORY.NONE && <span> Choose the Category! </span>}
                {category === CATEGORY.FRANCE && <SimpleImageSlider width={1200} height={600} images={FRANCE_images} showBullets={true} showNavs={true}/>}
                {category === CATEGORY.BELGIUM && <SimpleImageSlider width={1200} height={600} images={BELGIUM_images} showBullets={true} showNavs={true}/>}
                {category === CATEGORY.NETHERLAND && <SimpleImageSlider width={1200} height={600} images={NETHERLAND_images} showBullets={true} showNavs={true}/>}
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
