import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <main className='page-not-found'>
            <h1 className='page-not-found__heading'>
                404
            </h1>
            <p className='page-not-found__text'>
            Страница не найдена
            </p>
            <Link className='page-not-found__return-link' to='/'>
        Назад
      </Link>
        </main>
    );
}

export default NotFound;