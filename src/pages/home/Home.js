import React from 'react';

import MainHeader from '../../components/MainHeader/MainHeader';
import Programs from '../../components/Programs/Programs';
import Questions from '../../components/Questions/Questions';
import Values from '../../components/Values/Values';
import Comment from '../../components/Comment/Comment';
import './home.scss';

function Home() {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <Questions />
      <Comment />
    </>
  );
}

export default Home;