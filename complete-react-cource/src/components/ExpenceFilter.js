import React, { useState } from 'react';

import "../components/ExpenceFilter.scss";

const ExpensesFilter = (props) => {
    const filterYear = (e) => {
        props.onChangeFilter(e.target.value);
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={filterYear}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;