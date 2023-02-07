import React from 'react';


import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

import { trainers } from '../../data';
import HeaderImage from '../../images/header_bg_5.jpg';
import Header from '../../components/Header/Header';

import Trainer from '../../components/Trainer/Trainer';
import './trainers.scss';

function Trainers() {
  return (
    <>
      <Header title='ТРЕНЕРЫ КЛУБА' image={HeaderImage}>
        Обучение навыками боевых искусств. <br />
        Развитие таких качеств и навыков, как: баланс, координация, гибкость, функциональная подготовка, сила духа
      </Header>
      <section className='trainers'>
        <div className='container trainers__container'>
          {
            trainers.map(({ id, image, name, job, socials }) => {
              return <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={
                  [
                    { icon: <BsInstagram />, link: socials[0] },
                    { icon: <AiOutlineTwitter />, link: socials[1] },
                    { icon: <FaFacebookF />, link: socials[2] },
                    { icon: <FaLinkedinIn />, link: socials[3] },
                  ]
                } />;
            })
          }
        </div>
      </section>
    </>
  );
}

export default Trainers;