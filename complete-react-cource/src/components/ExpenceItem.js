import '../components/ExpenceItem.scss';
import Card from './Card';
import ExpenceDate from './ExpenceDate';

function ExpenceItem(props) {
    console.log(props);
    return (
        <Card className='expenceitem' >
            <ExpenceDate date={props.date} />
            <p className='expenceitem__title'>{props.title}</p>
            <span className='expenceitem__rate'>{props.rate}</span>
        </Card>
    )
}

export default ExpenceItem;