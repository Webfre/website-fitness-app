import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../../images/main_header.png';

function MainHeader() {
  return (
    <header className='main__header'>
      <div className='container main__header-container'>
        <div className='main__header-left'>
          <h4>#100DaysOfWorkOut</h4>
          <h1>Присоединяйтесь к Легендам Мира Фитнеса</h1>
          <p>
            Первый фитнес-клуб в России с уникальной системой тренировок, основанных на боевых искусствах.
          </p>
          <Link to='/plans' className='btn lg'>
            ВЫБРАТЬ КАРТУ
          </Link>
        </div>
        <div className='main__header-right'>
          <div className='main__header-circle'>
            <div className='main__header-image'>
              <img src={Image} alt='Main Header' />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;