import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';
import logo from '../../images/Header/logo.svg';

function AuthForm({ heading, children, submitBtnText, route, message, linkText }) {
    return (
        <section className='auth-form'>
            <div className='auth-form__container'>
                <Link to='/'
                    className="auth-form__home-link">
                    <img
                        className="auth-form__logo"
                        src={logo}
                        alt="лого 'Movie Explorer'" />
                </Link>
                <h1 className='auth-form__heading'>
                    {heading}
                </h1>

                <form className='auth-form__form'>

                    {children}

                    <button
                        type="submit"
                        className="auth-form__submit-button">
                        {submitBtnText}
                    </button>
                </form>
                <div className="auth-form__link-container">
                    <p className="auth-form__message">
                        {message}
                    </p>
                    <Link to={route}
                        className="auth-form__link">
                        {linkText}
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AuthForm;