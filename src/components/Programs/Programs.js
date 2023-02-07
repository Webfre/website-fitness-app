import React from 'react';

import { Link } from 'react-router-dom';
import { FaCrown } from 'react-icons/fa';
import { AiFillCaretRight } from 'react-icons/ai';

import { programs } from '../../data';

import Card from '../../UI/Card';

import SectionHead from './SectionHead';

function Programs() {
  return (
    <section className='programs'>
      <div className='container programs__container'>
        <SectionHead icon={<FaCrown />} title='Программы' />
        <div className='progams__wrapper'>
          {
            programs.map(({ id, icon, title, info, path }) => {
              return (
                <Card
                  className='programs__program'
                  key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={path} className='btn sm'>
                    Узнать больше
                    <AiFillCaretRight />
                  </Link>
                </Card>
              );
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Programs;