import { React, useContext, useEffect } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Profile({ isLoggedIn, onEditProfile, onLogout }) {

    const { values, setValues, handleChange, errors, resetForm, isValid, setIsValid } = useFormWithValidation({ name: '', email: '' });
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setValues({
            name: currentUser.name,
            email: currentUser.email
        });
    }, [currentUser]);

    useEffect(() => {
        if (values.name === currentUser.name && values.email === currentUser.email) {
            setIsValid(false)
        }
    }, [currentUser, setIsValid, values]);

    function handleSubmit(evt) {
        evt.preventDefault();
        onEditProfile(values);
        setIsValid(true);
        resetForm({
            name: currentUser.name,
            email: currentUser.email,
        }, {}, true);
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
                            value={values.name || ''}
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
                            value={values.email || ''}
                            onChange={handleChange}
                        />
                        <span className='profile__error-span profile__error-span_type_name'>{errors.email}</span>
                    </div>
                    <button className='profile__btn "profile__btn_type_edit'
                        // <button className={`profile__btn ${!isValid ? "profile__btn_type_edit_disabled" : "profile__btn_type_edit"}`}
                        type='submit'
                        disabled={!isValid}>
                        Редактировать
                    </button>
                </form>
                <button className='profile__btn profile__btn_type_logout'
                    onClick={onLogout}>
                    Выйти из аккаунта
                </button>
            </div>
        </main>
    );
}

export default Profile;