import React, { useState } from 'react';
import styled from "styled-components";
import CustomImageSlider from '../customs/CustomImageSlider';
import { BELGIUM_images, FRANCE_images, GREECE_images, ITALY_images, NETHERLANDS_images, SWISS_images, TURKIYE_images } from './Gallery_URL';

export enum CATEGORY {
   NONE = 0,
   FRANCE = 1,
   BELGIUM = 2, NETHERLANDS = 3,
   SWISS = 4,
   TURKIYE = 5, GREECE = 6,
   ITALY = 7
};

function Gallery() {
  const [category, setCategory] = useState(0);
  const [periodicChange, setPeriodicChange] = useState(false);

  return (
    <>
        <GalleryHeader>
            <span>Welcome to the Gallery. Choose the Category what you want to see.</span>
            <select onChange={e => setCategory(Number.parseInt(e.target.value))}>
                <option value={0}>CHOOSE CATEGORY!</option>
                <option value={CATEGORY.FRANCE}>🇫🇷 Paris, Colmar, Strasbourg ({FRANCE_images.length})</option>
                <option value={CATEGORY.BELGIUM}>🇧🇪 Brussels, Antwerpen ({BELGIUM_images.length})</option>
                <option value={CATEGORY.NETHERLANDS}>🇳🇱 Amsterdam ({NETHERLANDS_images.length})</option>
                <option value={CATEGORY.SWISS}>🇨🇭 Bern, Interlaken, Jungfrau ({SWISS_images.length})</option>
                <option value={CATEGORY.TURKIYE}>🇹🇷 Istanbul, Cappadocia ({TURKIYE_images.length})</option>
                <option value={CATEGORY.GREECE}>🇬🇷 Santorini, Athens ({GREECE_images.length})</option>
                <option value={CATEGORY.ITALY}>🇮🇹 Rome, Vatican, Venice ({ITALY_images.length})</option>
            </select>
            <input type="checkbox" checked={periodicChange} onChange={e => setPeriodicChange(e.target.checked)}/>
        </GalleryHeader>
        <GalleryBody>
            <div>
                {category === CATEGORY.NONE && <span> Choose the Category! </span>}
                {category === CATEGORY.FRANCE && <CustomImageSlider width={1200} height={600} images={FRANCE_images} showBullets={true} showNavs={true} periodicChange={periodicChange}/>}
                {category === CATEGORY.BELGIUM && <CustomImageSlider width={1200} height={600} images={BELGIUM_images} showBullets={true} showNavs={true} periodicChange={periodicChange}/>}
                {category === CATEGORY.NETHERLANDS && <CustomImageSlider width={1200} height={600} images={NETHERLANDS_images} showBullets={true} showNavs={true} periodicChange={periodicChange}/>}
                {category === CATEGORY.SWISS && <CustomImageSlider width={1200} height={600} images={SWISS_images} showBullets={true} showNavs={true} periodicChange={periodicChange}/>}
                {category === CATEGORY.TURKIYE && <CustomImageSlider width={1200} height={600} images={TURKIYE_images} showBullets={true} showNavs={true} periodicChange={periodicChange}/>}
                {category === CATEGORY.GREECE && <CustomImageSlider width={1200} height={600} images={GREECE_images} showBullets={true} showNavs={true} periodicChange={periodicChange}/>}
                {category === CATEGORY.ITALY && <CustomImageSlider width={1200} height={600} images={ITALY_images} showBullets={true} showNavs={true} periodicChange={periodicChange}/>}
            </div>
        </GalleryBody>
    </>
  );
}

const GalleryHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  select {
    margin-top: 10px;
    padding: 3px 5px 3px 5px;
    border-radius: 5px;
    width: 50%;
  }
`;

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

  /* Modal Shadow */
  -webkit-box-shadow: 0 10px 12px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 10px 12px rgba(0, 0, 0, 0.3);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
`;

export default Gallery;
