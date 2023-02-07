import React from 'react';

import Header from '../../components/Header/Header';
import HeaderImage from '../../images/header_bg_3.jpg';
import './gallery.scss';

function Gallery() {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  return (
    <>
      <Header title='НАША ГАЛЕРЕЯ' image={HeaderImage}>
        Для любителей единоборств проходят групповые тренировки по боксу, джиу джитсу, кикбоксингу или популярному во всем мире ММА.
      </Header>

      <section className='gallery'>
        <div className='container gallery__container'>
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`${index + 1}`} />
              </article>;
            })
          }
        </div>
      </section>
    </>
  );
}

export default Gallery;