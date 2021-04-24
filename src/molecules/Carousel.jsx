import React, { useEffect, useState, createRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { invert, getAverageRGB } from '../utils/carouselHelper';
import img1 from '../assests/img1.jpg';
import img4 from '../assests/img4.jpg';
import img5 from '../assests/img5.jpg';
import img6 from '../assests/img6.jpg';

import styled from 'styled-components';
let imgArray = [img1, img4, img5, img6];
const CarouselWrapper = styled.div`
width:100%;
display:flex;
justify-content:center;
.carousel.carousel-slider .control-arrow{
  background:tomato;
  opacity:1;
  z-index:0;
}
.carousel-root{
  min-width:95%;
}
.carousel .slide{
  height:200px;
}

.carousel.carousel-slider .control-arrow:hover{
  opacity:1;
}
.imgText{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  font: 400 20px cookie, cursive;
  text-align: center;

}
`;
const DynamicColorText = styled.div`
color:${props => props.color};
// filter: invert(1);
font: 900 40px cookie, cursive;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

const DemoCarousel = () => {
  const [fontColor, setFontColor] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      imgArray.map((el, i) => {
        var rgb = getAverageRGB(document.getElementById(`a${i}`));
        let hexcolor = invert('rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')')
        console.log('rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')', hexcolor);
        setFontColor(state => [...state, hexcolor]);
      })
    }, 100);
  }, [])

  useEffect(() => {
    console.log(fontColor);
  }, [fontColor])

  return (
    <CarouselWrapper>

      <Carousel showThumbs={false} infiniteLoop={true} showStatus={false}>
        {imgArray.map((e, i) => {
          console.log('color is', fontColor[i] ? 'rgb(' + fontColor[i].r + ',' + fontColor[i].g + ',' + fontColor[i].b + ')' : 'no color yet')
          return (
            <div style={{ width: '94%',margin:'auto' }}><img src={e} style={{ objectFit: 'contain' }} alt='ve' id={`a${i}`} /><DynamicColorText color={fontColor[i] ? fontColor[i] : "#fff"}>this is slide {i + 1}</DynamicColorText></div>

          )
        })}
      </Carousel>
    </CarouselWrapper>
  );
}

export default DemoCarousel;