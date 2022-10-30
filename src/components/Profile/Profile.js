import React from 'react';
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
    return (
        <main className='profile'>
            <Header />
            <h1 className='profile__heading'>Привет, Ксения!</h1>
            <form className='profile__form'>
                <div className='profile__form-input'>
                    <p className='profile__input-title'>
                        Имя
                    </p>
                    <input className='profile__input'
                        placeholder='Введите имя'
                        value='Ксения'
                        name='name'
                        required
                    />
                </div>
                <div className='profile__form-input'>
                    <p className='profile__input-title'>
                        E-mail
                    </p>
                    <input className='profile__input'
                        placeholder='Введите e-mail'
                        value='oestara91@gmail.com'
                        name='email'
                        type='email'
                        required
                    />
                </div>
            </form>
            <button className='profile__btn profile__btn_edit'>
                Редактировать
            </button>
            <button className='profile__btn profile__btn_logout'>
                Выйти из аккаунта
            </button>
        </main>
    );
}

export default Profile;