import React from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import logo from '../../images/Header/logo.svg';
import AuthForm from '../AuthForm/AuthForm';

function Login() {
    return (
        <main className='login'>
            <AuthForm
                heading="Рады видеть!"
                submitBtnText="Войти"
                route="/signup"
                message="Ещё не зарегистрированы?"
                linkText="Регистрация">

                <label htmlFor="login-email-input"
                    className="login__input-label">E-mail</label>

                <input
                    type="email"
                    className="login__input"
                    name="email"
                    id="login-email-input"
                    placeholder=""
                    minLength="4"
                    maxLength="40"
                    required
                />
                <span className='login__error-span login__error-span_type_email'>Что-то пошло не так...</span>

                <label htmlFor="login-password-input"
                    className="login__input-label">Пароль</label>

                <input
                    type="password"
                    className="login__input"
                    name="password"
                    id="login-password-input"
                    placeholder=""
                    minLength="6"
                    maxLength="240"
                    required
                />
                <span className='login__error-span login__error-span_type_password'>Что-то пошло не так...</span>


            </AuthForm>
        </main >
    );
}

export default Login;