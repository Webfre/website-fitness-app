import React, { useState } from 'react';

import { ImQuotesLeft } from 'react-icons/im';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

import { comments } from '../../data';

import Card from '../../UI/Card';
import SectionHead from '../Programs/SectionHead';

function Comment() {
  const [index, setIndex] = useState(1);
  const { name, job, quote, avatar } = comments[index];

  const prevCommentHandler = () => {
    setIndex(prev => prev - 1);
    if (index <= 0) {
      setIndex(comments.length - 1);
    }
  };

  const nextCommentHandler = () => {
    setIndex(prev => prev + 1);
    if (index >= comments.length - 1) {
      setIndex(0);
    }
  };

  return (
    <div className='comments'>
      <div className='container comments__container'>
        <SectionHead
          icon={<ImQuotesLeft />}
          title='Комментарии'
          className='comments__head'
        />
        <Card className='comment'>
          <div className='comment__avatar'>
            <img src={avatar} alt={name} />
          </div>
          <p className='comment__quote'>{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className='comment__title'>{job}</small>
        </Card>
        <div className='comments__btn-container'>
          <button
            className='comments__btn'
            onClick={prevCommentHandler}>
            <IoIosArrowDropleftCircle />
          </button>
          <button
            className='comments__btn'
            onClick={nextCommentHandler}>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comment;