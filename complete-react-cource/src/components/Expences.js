import React, { useState } from "react";
import ExpenceItem from "./ExpenceItem";
import ExpensesFilter from "./ExpenceFilter";

const Expences = (props) => {
    const [filterYear, setFilterYear] = useState('2019');
    const filterChangeHandler = (e) => {
        setFilterYear(e);
    }
    const filteredExpence = props.items.filter(expence => {
        return expence.date.getFullYear().toString() === filterYear;
    })
    console.log(filterYear);
    return (
        <div className="cardouter">
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
            {filteredExpence.length === 0 ? (<p className="card">No Expence Found</p>) : filteredExpence.map((Expence, index) => (<ExpenceItem key={index} title={Expence.title} date={Expence.date} rate={Expence.rate} />))}
            {/* {filteredExpence.map((Expence, index) => (<ExpenceItem key={index} title={Expence.title} date={Expence.date} rate={Expence.rate} />))} */}
            {/* <ExpenceItem
                title={props.items[0].title}
                date={props.items[0].date}
                rate={props.items[0].rate}
            ></ExpenceItem> */}
        </div >
    );
}

export default Expences;