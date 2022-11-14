import React, { useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
import './SearchForm.css';
import searchIco from '../../images/SearchForm/find.svg'

function SearchForm({ onCheckBoxToggle, checkBox, request, setRequest, onChange, onSubmit }) {


    useEffect(() => {
        setRequest(request);
    }, [request, setRequest]);

    return (
        <section className='search-form'>
            <form className='search-form__form'
                onSubmit={onSubmit}>
                <input className='search-form__input'
                    placeholder='Фильм'
                    value={request || ''}
                    onChange={onChange}
                    required />
                <button className='search-form__submit-button'
                    type='submit'>
                    <img className='search-form__icon'
                        src={searchIco}
                        alt='иконка поиска' />
                </button>
            </form>
            <div className='search-form__switch'>
                <FilterCheckbox
                    checkBox={checkBox}
                    onCheckboxToggle={onCheckBoxToggle}
                />
            </div>
        </section>
    );
}

export default SearchForm;