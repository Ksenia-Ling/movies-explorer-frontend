import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ checkBox, onCheckboxToggle }) {

    return (
        <label className='filter-checkbox'>
            <input className='filter-checkbox__input'
                type='checkbox'
                checked={checkBox}
                onChange={onCheckboxToggle} />
            <div className='filter-checkbox__switch'></div>
            <span className='filter-checkbox__label'>Короткометражки</span>
        </label>
    );
}

export default FilterCheckbox;