import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import CustomCheckbox from '../customs/CustomCheckbox';
import CustomImageSlider from '../customs/CustomImageSlider';
import { BELGIUM_images, FRANCE_images, GREECE_images, ITALY_images, NETHERLANDS_images, SWISS_images, TURKIYE_images } from '../DATA/Gallery_URL';
import { selectCore } from '../store/slices/core';

export enum CATEGORY {
   NONE = 0,
   FRANCE = 1,
   BELGIUM = 2, NETHERLANDS = 3,
   SWISS = 4,
   TURKIYE = 5, GREECE = 6,
   ITALY = 7
};

interface IPropsGallery {
  isMobile : boolean;
}
function Gallery({ isMobile }: IPropsGallery) {
  const [category, setCategory] = useState(0);
  const [periodicChange, setPeriodicChange] = useState(false);
  const { windowSize } = useSelector(selectCore);

  const [galleryWidth, galleryHeight] = [windowSize[0], windowSize[1] * 560 / 1200 ];
  return (
    <>
        <GalleryHeader>
          <div>
            <span>Welcome to the Gallery. Choose the Category what you want to see.</span>
          </div>
          <div>
            <span>Gallery Category : </span>
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
          </div>
          <CheckBoxWrapper>
            <span>See a Slideshow : </span>
            <CustomCheckbox checked={periodicChange} onClickListener={() => {setPeriodicChange(!periodicChange)}}/>
          </CheckBoxWrapper>
        </GalleryHeader>
        <GalleryBody>
            <div>
                {category === CATEGORY.NONE && <span> Choose the Category! </span>}
                {category === CATEGORY.FRANCE && <CustomImageSlider _width={galleryWidth} _height={galleryHeight} images={FRANCE_images} showBullets={true} showNavs={true} slideShow={{ periodicChange: periodicChange ? 5000 : 99999 }}/>}
                {category === CATEGORY.BELGIUM && <CustomImageSlider _width={galleryWidth} _height={galleryHeight} images={BELGIUM_images} showBullets={true} showNavs={true} slideShow={{ periodicChange: periodicChange ? 5000 : 99999 }}/>}
                {category === CATEGORY.NETHERLANDS && <CustomImageSlider _width={galleryWidth} _height={galleryHeight} images={NETHERLANDS_images} showBullets={true} showNavs={true} slideShow={{ periodicChange: periodicChange ? 5000 : 99999 }}/>}
                {category === CATEGORY.SWISS && <CustomImageSlider _width={galleryWidth} _height={galleryHeight} images={SWISS_images} showBullets={true} showNavs={true} slideShow={{ periodicChange: periodicChange ? 5000 : 99999 }}/>}
                {category === CATEGORY.TURKIYE && <CustomImageSlider _width={galleryWidth} _height={galleryHeight} images={TURKIYE_images} showBullets={true} showNavs={true} slideShow={{ periodicChange: periodicChange ? 5000 : 99999 }}/>}
                {category === CATEGORY.GREECE && <CustomImageSlider _width={galleryWidth} _height={galleryHeight} images={GREECE_images} showBullets={true} showNavs={true} slideShow={{ periodicChange: periodicChange ? 5000 : 99999 }}/>}
                {category === CATEGORY.ITALY && <CustomImageSlider _width={galleryWidth} _height={galleryHeight} images={ITALY_images} showBullets={true} showNavs={true} slideShow={{ periodicChange: periodicChange ? 5000 : 99999 }}/>}
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
  > div {
    width: 100%;
  }
  > div:last-child {
    margin-top: 10px;
  }
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;

  > span {
    margin-right: 10px;
  }
`;

const GalleryBody = styled.div`
  width: 100%;
  height: 100%;
  min-height: 600px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Gallery;
