import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <label className='filter-checkbox'>
            <input class='filter-checkbox__input' type='checkbox' />
            <div class='filter-checkbox__switch'></div>
            <span class='filter-checkbox__label'>Короткометражки</span>
        </label>
    );
}

export default FilterCheckbox;