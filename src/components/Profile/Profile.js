import { React, useContext } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Profile({ isLoggedIn, onEditProfile, onLogout }) {
    const currentUser = useContext(CurrentUserContext);

    const { values, handleChange, errors } = useFormWithValidation({ name: '', email: '' });

    function handleSubmit(evt) {
        evt.preventDefault();
        onEditProfile(values);
    }

    return (
        <main className='profile'>
            <Header
                isLoggedIn={isLoggedIn}
            />
            <div className='profile__container'>
                <h1 className='profile__heading'>Привет, {currentUser.name}</h1>
                <form className='profile__form'
                    onSubmit={handleSubmit}>
                    <div className='profile__form-input'>
                        <p className='profile__input-title'>
                            Имя
                        </p>
                        <input className={`profile__input ${errors.name !== '' ? "profile__input_invalid" : ""
                        }`}
                            placeholder='Введите имя'
                            name='name'
                            required
                            value={values.name}
                            onChange={handleChange}
                        />
                        <span className='profile__error-span profile__error-span_type_name'>{errors.name}</span>


                    </div>
                    <div className='profile__form-input'>
                        <p className='profile__input-title'>
                            E-mail
                        </p>
                        <input className={`profile__input ${errors.email !== '' ? "profile__input_invalid" : ""
                        }`}
                            placeholder='Введите e-mail'
                            name='email'
                            type='email'
                            required
                            value={values.email}
                            onChange={handleChange}
                        />
                        <span className='profile__error-span profile__error-span_type_name'>{errors.email}</span>


                    </div>
                </form>
                <button className='profile__btn profile__btn_type_edit'
                type='submit'>
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