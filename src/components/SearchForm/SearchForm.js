import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
import './SearchForm.css';
import searchIco from '../../images/SearchForm/find.svg'

function SearchForm() {
    return (
        <section className='search-form'>
            <form className='search-form__form'>
                <input className='search-form__input'
                    placeholder='Фильм' />
                <button className='search-form__submit-button'
                    type='submit'>
                    <img className='search-form__icon'
                        src={searchIco}
                        alt='иконка поиска' />
                </button>
            </form>
            <FilterCheckbox />
        </section>
    );
}

export default SearchForm;