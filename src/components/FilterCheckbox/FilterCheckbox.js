import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <div className='filter-checkbox'>
            <label htmlFor='checkbox' className='filter-checkbox__label'>
                Короткометражки
            </label>
            <input
                className='filter-checkbox__checkbox'
                type='checkbox'
                id='checkbox'
            />
        </div>
    );
}

export default FilterCheckbox;