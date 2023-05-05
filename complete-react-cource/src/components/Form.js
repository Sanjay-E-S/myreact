import { useState } from 'react';
import '../components/Form.scss';

const Form = (props) => {
    const [enteredTitle, setTitle] = useState('');
    const [enteredDate, setDate] = useState('');
    const [enteredAmount, setAmount] = useState('');

    // const [userinput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredDate: '',
    //     enteredAmount: '',
    // });

    // const titleHandler = (e) => {
    //     // setUserInput({
    //     //     ...userinput,
    //     //     enteredTitle: e.target.value,
    //     // });
    //     setTitle(e.target.value);
    // }
    // const dateHandler = (e) => {
    //     // setUserInput({
    //     //     ...userinput,
    //     //     enteredDate: e.target.value,
    //     // });
    //     setDate(e.target.value);
    // }
    // const amountHandler = (e) => {
    //     // setUserInput({
    //     //     ...userinput,
    //     //     enteredAmount: e.target.value,
    //     // });
    //     setAmount(e.target.value);
    // }

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredData = {
            title: enteredTitle,
            rate: enteredAmount + '$',
            date: new Date(enteredDate)
        };
        props.onSaveExpenceData(enteredData);
        setAmount('');
        setTitle('');
        setDate('');
    }

    return (
        <div className='formouter' >
            <form onSubmit={submitHandler} >
                <div className='formitem'>
                    <label>Date</label>
                    <input className="forminput" value={enteredDate} type="date" min={'2023-01-01'} max={'2023-12-31'} onChange={(e) => setDate(e.target.value)}></input>
                </div>
                <div className='formitem'>
                    <label>Title</label>
                    <input className="forminput" value={enteredTitle} type="text" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='formitem'>
                    <label>Amount</label>
                    <input className="forminput" value={enteredAmount} type="text" onChange={(e) => setAmount(e.target.value)}></input>
                </div>
                <button type='submit' className='submitbtn'>Submit</button>
            </form>
        </div >
    )
}

export default Form;