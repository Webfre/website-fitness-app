import React from 'react';

import { FaQuestion } from 'react-icons/fa';

import { faqs } from '../../data';

import SectionHead from '../Programs/SectionHead';

import Question from './Question';

function Questions() {
  return (
    <section className='ques'>
      <div className='container ques__container'>
        <SectionHead icon={<FaQuestion />} title='Часто задаваемые вопросы' />
        <div className='ques__wrapper'>
          {
            faqs.map(({ id, answer, question }) => {
              return <Question
                key={id}
                answer={answer}
                question={question} />;
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Questions;