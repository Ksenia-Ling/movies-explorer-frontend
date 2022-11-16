import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css';

function NotFound() {

    const history = useHistory();

    return (
        <main className='page-not-found'>
            <h1 className='page-not-found__heading'>
                404
            </h1>
            <p className='page-not-found__text'>
                Страница не найдена
            </p>
            <button className='page-not-found__return-link'
            onClick={() => history.goBack()}>
                Назад
            </button>
        </main>
    );
}

export default NotFound;