import '../components/ExpenceItem.scss';
import ExpenceDate from './ExpenceDate';

function ExpenceItem(props) {
    return (
        <div className='expenceitem' >
            <ExpenceDate date={props.date} />
            <p className='expenceitem__title'>{props.title}</p>
            <span className='expenceitem__rate'>{props.rate}</span>
        </div>
    )
}

export default ExpenceItem;