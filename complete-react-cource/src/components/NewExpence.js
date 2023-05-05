// import ExpenceDate from "./ExpenceDate";
import Form from "./Form";

const NewExpence = (props) => {
    const saveExpencedata = (enteredExpenceData) => {
        const enteredData = {
            ...enteredExpenceData,
            id: Math.random().toString()
        }
        props.onAddExpence(enteredData);
    }
    return (
        <Form onSaveExpenceData={saveExpencedata} />
    )
}

export default NewExpence;