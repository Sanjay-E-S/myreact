import React, { useState } from 'react';
import '../components/ExpenceItem.scss';
import Card from './Card';
import ExpenceDate from './ExpenceDate';

const ExpenceItem = (props) => {

    // const [title, setTitle] = useState(props.title);

    // let title = props.title;

    // const clickHandler = () => {
    //     setTitle('updated')
    // }
    return (
        <Card className='expenceitem' >
            <ExpenceDate date={props.date} />
            <p className='expenceitem__title'>{props.title}</p>
            <span className='expenceitem__rate'>{props.rate}</span>
            {/* <button onClick={clickHandler}>Click</button> */}
        </Card>
    )
}

export default ExpenceItem;