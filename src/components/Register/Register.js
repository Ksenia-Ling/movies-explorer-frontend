import React from 'react';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Register() {

    const { values, handleChange, errors } = useFormWithValidation({ name: '', email: '', password: '' });
 
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
                    className={`register__input ${
                        errors.name !== '' ? "register__input_invalid" : "" 
                    }`}
                    name="name"
                    id="register-name-input"
                    placeholder=""
                    minLength="4"
                    maxLength="40"
                    required
                    value={values.name}
                    onChange={handleChange}
                />
                <span className='register__error-span register__error-span_type_name'>{errors.name}</span>


                <label htmlFor="register-email-input"
                    className="register__input-label">E-mail</label>

                <input
                    type="email"
                    className={`register__input ${
                        errors.name !== '' ? "register__input_invalid" : "" 
                    }`}
                    name="email"
                    id="register-email-input"
                    placeholder=""
                    minLength="4"
                    maxLength="40"
                    required
                    value={values.email}
                    onChange={handleChange}
                />
                <span className='register__error-span register__error-span_type_email'>{errors.email}</span>

                <label htmlFor="register-password-input"
                    className="register__input-label">Пароль</label>

                <input
                    type="password"
                    className={`register__input ${
                        errors.name !== '' ? "register__input_invalid" : "" 
                    }`}
                    name="password"
                    id="register-password-input"
                    placeholder=""
                    minLength="6"
                    maxLength="240"
                    required
                    value={values.password}
                    onChange={handleChange}
                />
                <span className='register__error-span register__error-span_type_password'>{errors.password}</span>

            </AuthForm>
        </main >
    );
}

export default Register;