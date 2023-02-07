import React from 'react';

import { Link } from 'react-router-dom';

import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

import Logo from '../../images/logo.png';

function Footer() {
  return (
    <footer>
      <div className='container footer__conainer'>
        <article>
          <Link to='/' className='logo'>
            <img src={Logo} alt='Footer Logo' />
          </Link>
          <p>
            Наши участники каждый день выкладывают истории с тренировок в Инстаграм и других социальных сетях, отмечают клуб и тренеров. Отзывы можно прочитать ниже.
            Всё это благодаря отзывчивости команды, профессионализму тренерского состава и заботе о комфорте и успехах участников со стороны руководства.
            Присоединяйтесь, разделите с нами радость здоровья и активной жизни!
          </p>
          <div className='footer__socials'>
            <a href='https://linked.com/' target='_blank' rel='noreferrer'>
              <FaLinkedin />
            </a>
            <a href='https://facebook.com/' target='_blank' rel='noreferrer'>
              <FaFacebookF />
            </a>
            <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
              <AiOutlineTwitter />
            </a>
            <a href='https://instagram.com/' target='_blank' rel='noreferrer'>
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Постоянные ссылки</h4>
          <Link to='/about'>О нас</Link>
          <Link to='/plans'>Планы</Link>
          <Link to='/trainers'>Наши тренеры</Link>
          <Link to='/gallery'>Галерея</Link>
          <Link to='/contact'>Контакты</Link>
        </article>
        <article>
          <h4>Идеи</h4>
          <Link to='/s'>Блог</Link>
          <Link to='/s'>Тематические исследования</Link>
          <Link to='/s'>События</Link>
          <Link to='/s'>Сообщества</Link>
          <Link to='/s'>Комментарии</Link>
        </article>
        <article>
          <h4>Связаться</h4>
          <Link to='/contact'>Связаться с нами</Link>
          <Link to='/s'>Поддержка</Link>
        </article>
      </div>
      <div className='footer__copyright'>
        <small>2022 Mukhametshin Roman &copy; Все права защищены</small>
      </div>
    </footer>
  );
}

export default Footer;