import React from 'react';


import { MdEmail } from 'react-icons/md';
import { SlSocialVkontakte } from 'react-icons/sl';
import { IoLogoWhatsapp } from 'react-icons/io';
import { TbBrandTelegram } from 'react-icons/tb';

import HeaderImage from '../../images/header_bg_2.jpg';
import Header from '../../components/Header/Header';

import './contact.scss';

function Contact() {
  return (
    <>
      <Header title='УЗНАТЬ БОЛЬШЕ' image={HeaderImage}>
        Оставьте заявку, чтобы узнать о фитнес-клубах BGym,
        стоимости абонементов и тренировках или записаться на тур по клубу
      </Header>
      <section className='contact'>
        <div className='container contact__container'>
          <div className='contact__wrapper'>
            <a href='mailto:romain.muhametschin@yandex.ru' target='_blank' rel='noreferrer'><MdEmail /></a>
            <a href='https://vk.com/id367096719' target='_blank' rel='noreferrer'><SlSocialVkontakte /></a>
            <a href='https://skobelkin.ru/whatsapp/79999797138?text=Hello+World!' target='_blank' rel='noreferrer'><IoLogoWhatsapp /></a>
            <a href='https://t.me/+79999797138' target='_blank' rel='noreferrer'>
              <TbBrandTelegram />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;