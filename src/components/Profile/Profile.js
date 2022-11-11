import { React, useState } from 'react';
import './Profile.css';
import Header from '../Header/Header';

function Profile() {

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <main className='profile'>
            <Header
                isLoggedIn={isLoggedIn}
            />
            <div className='profile__container'>
                <h1 className='profile__heading'>Привет, Ксения!</h1>
                <form className='profile__form'>
                    <div className='profile__form-input'>
                        <p className='profile__input-title'>
                            Имя
                        </p>
                        <input className='profile__input'
                            placeholder='Введите имя'
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
                            name='email'
                            type='email'
                            required
                        />
                    </div>
                </form>
                <button className='profile__btn profile__btn_type_edit'>
                    Редактировать
                </button>
                <button className='profile__btn profile__btn_type_logout'>
                    Выйти из аккаунта
                </button>
            </div>
        </main>
    );
}

export default Profile;