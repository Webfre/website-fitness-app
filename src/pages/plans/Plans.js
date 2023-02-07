import React from 'react';

import { plans } from '../../data';

import Header from '../../components/Header/Header';
import HeaderImage from '../../images/header_bg_4.jpg';
import Card from '../../UI/Card';
import './plans.scss';

function Plans() {
  return (
    <>
      <Header title='ВЫБОР КАРТЫ' image={HeaderImage}>
        У нас есть несколько предложений по сроку и наполнению. Все актуальные цены вы можете посмотреть здесь.
      </Header>
      <section className='plans'>
        <div className='container plans__container'>
          {
            plans.map(({ id, name, desc, price, features }) => {
              return <Card key={id} className='plan'>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`${price} руб.`}</h1>
                <h4>Feature</h4>
                {
                  features.map(({ feature, available }, index) => {
                    return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>;
                  })
                }
                <button className='btn lg'>Выберите план</button>
              </Card>;
            })
          }
        </div>
      </section>
    </>
  );
}

export default Plans;