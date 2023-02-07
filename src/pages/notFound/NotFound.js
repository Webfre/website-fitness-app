import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.scss';

function NotFound() {
  return (
    <section>
      <div className='container notfound__container'>
        <h2>Кажется, стоит потренироваться в поиске нужной страницы еще разок!</h2>
        <Link to='/' className='btn'>На главную</Link>
      </div>
    </section>
  );
}

export default NotFound;