import React from 'react';

import { GiCutDiamond } from 'react-icons/gi';

import { values } from '../../data';

import Card from '../../UI/Card';
import Image from '../../images/values.jpg';
import SectionHead from '../Programs/SectionHead';

function Values() {
  return (
    <section className='values'>
      <div className='container values__container'>
        <div className='values__left'>
          <div className='values__image'>
            <img src={Image} alt='Values' />
          </div>
        </div>
        <div className='values__right'>
          <SectionHead icon={<GiCutDiamond />} title='Ценности' />
          <p>
            <b>Lifestyle </b><br />
            Нас всегда интересует новое, то, что происходит сейчас и что будет дальше. Мы всегда стараемся быть на шаг впереди, чутко следуя моде, культуре, тенденциям и желаниям наших клиентов.
            BGym — не просто компания, это общность людей, опирающихся на успехи друг друга. Мы ценим человечность и командный подход на всех уровнях.
          </p>
          <div className='values__wrapper'>
            {
              values.map(({ id, icon, title, desc }) => {
                return <Card key={id} className='values__value'>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </Card>;
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;