import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            //generate random id is not the prefect random can generate the some id
            id: Math.random().toString()
        };
        console.log(expenseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}
export default NewExpense;