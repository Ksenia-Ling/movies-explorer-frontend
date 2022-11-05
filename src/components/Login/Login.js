import React from 'react';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Login() {

    const { values, handleChange, errors } = useFormWithValidation({ email: '', password: '' });

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
                    className={`login__input ${errors.email !== '' ? "login__input_invalid" : ""
                        }`}
                    name="email"
                    id="login-email-input"
                    placeholder=""
                    minLength="4"
                    maxLength="40"
                    required
                    value={values.email}
                    onChange={handleChange}
                />
                <span className='login__error-span login__error-span_type_email'>{errors.email}</span>

                <label htmlFor="login-password-input"
                    className="login__input-label">Пароль</label>

                <input
                    type="password"
                    className={`login__input ${errors.password !== '' ? "login__input_invalid" : ""
                        }`}
                    name="password"
                    id="login-password-input"
                    placeholder=""
                    minLength="6"
                    maxLength="240"
                    required
                    value={values.password}
                    onChange={handleChange}
                />
                <span className='login__error-span login__error-span_type_password'>{errors.password}</span>

            </AuthForm>
        </main >
    );
}

export default Login;