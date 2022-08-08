import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../Ui/Card';
const ExpenseItem = (props) => {
    
    return (
        <Card className='expense-item '>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={() => console.log('Wotking')}>Change Title</button>
        </Card>
    );
}
export default ExpenseItem;
