import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import combi1 from "../../img/galeria1.jpeg"
import combi2 from "../../img/galeria2.jpg"
import combi3 from "../../img/galeria3.jpg"
import combi4 from "../../img/galeria4.jpeg"
import combi5 from "../../img/galeria5.jpg"
import combi6 from "../../img/galeria6.jpg"
import combi7 from "../../img/galeria7.jpeg"
import combi8 from "../../img/galeria8.jpg"
import combi9 from "../../img/galeria9.jpeg"
import combi10 from "../../img/galeria10.jpg"
import combi11 from "../../img/galeria11.jpg"


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 1000, height: 550, marginLeft: '450px' }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: { combi1 },
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: { combi2 },
    title: 'Burger',
  },
  {
    img: { combi3 },
    title: 'Camera',
  },
  {
    img: { combi4 },
    title: 'Coffee',
    cols: 2,
  },
  {
    img: { combi5 },
    title: 'Hats',
    cols: 2,
  },
  {
    img: { combi6 },
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: { combi7 },
    title: 'Basketball',
  },
  {
    img: { combi8 },
    title: 'Fern',
  },
  {
    img: { combi9 },
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: { combi10 },
    title: 'Tomato basil',
  },
  {
    img: { combi11 },
    title: 'Sea star',
  },
  {
    img: { combi1
     },
    title: 'Bike',
    cols: 2,
  },
];
