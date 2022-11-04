import React from 'react';
import './Register.css';
import { Link } from "react-router-dom";
import logo from '../../images/Header/logo.svg';
import AuthForm from '../AuthForm/AuthForm';

function Register() {
    return (
        <main className='register'>
            <AuthForm
                heading="Добро пожаловать!"
                submitBtnText="Зарегистрироваться"
                route="/signin"
                message="Уже зарегистрированы?"
                linkText="Войти">

                <label htmlFor="register-name-input"
                    className="register__input-label">Имя</label>

                <input
                    type="text"
                    className="register__input"
                    name="name"
                    id="register-name-input"
                    placeholder=""
                    minLength="4"
                    maxLength="40"
                    required
                />
                <span className='register__error-span register__error-span_type_name'>Что-то пошло не так...</span>


                <label htmlFor="register-email-input"
                    className="register__input-label">E-mail</label>

                <input
                    type="email"
                    className="register__input"
                    name="email"
                    id="register-email-input"
                    placeholder=""
                    minLength="4"
                    maxLength="40"
                    required
                />
                <span className='register__error-span register__error-span_type_email'>Что-то пошло не так...</span>

                <label htmlFor="register-password-input"
                    className="register__input-label">Пароль</label>

                <input
                    type="password"
                    className="register__input"
                    name="password"
                    id="register-password-input"
                    placeholder=""
                    minLength="6"
                    maxLength="240"
                    required
                />
                <span className='register__error-span register__error-span_type_password'>Что-то пошло не так...</span>


            </AuthForm>
        </main >
    );
}

export default Register;