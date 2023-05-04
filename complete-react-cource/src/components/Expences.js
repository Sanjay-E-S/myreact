import React, { useState } from "react";
import ExpenceItem from "./ExpenceItem";
import ExpensesFilter from "./ExpenceFilter";

const Expences = (props) => {
    const [filerYear, setFilterYear] = useState('2019');
    const filterChangeHandler = (e) => {
        setFilterYear(e);
    }
    console.log(filerYear);
    return (
        <div className="cardouter">
            <ExpensesFilter selected={filerYear} onChangeFilter={filterChangeHandler} />
            {props.items.map((Expence, index) => <ExpenceItem key={index} title={Expence.title} date={Expence.date} rate={Expence.rate} />)}
            {/* <ExpenceItem
                title={props.items[0].title}
                date={props.items[0].date}
                rate={props.items[0].rate}
            ></ExpenceItem> */}
        </div >
    );
}

export default Expences;