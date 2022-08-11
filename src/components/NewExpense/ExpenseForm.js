import { useState } from 'react';
import ExpenseDate from '../Expenses/ExpenseDate';
import './ExpenseForm.css';

const ExpenseForm = () => {
    // const [entredTitle, setentredTitle] = useState('');
    // const [entredAmount, setEntredAmount] = useState(0.01);
    // const [entredDate, setEntredDate] = useState(new Date(2021, 5, 12));

    const [userInput, setUserInput] = useState({
        entredTitle: '',
        entredAmount:'',
        entredDate: ''
    });

    const titleChangeHandler = event => {

        //to gard  the prv values
        setUserInput((prevState) => {
            return {...prevState, entredTitle: event.target.value};
        })
    };
    const amountChangeHandler = event => {
        // setUserInput({
        //     ...userInput,
        //     entredAmount: event.target.value,
        // })
        
        //to gard  the prv values
        setUserInput(prevState => {
            return {...prevState, entredAmount: event.target.value};
        });
    };
    const dateChangeHandler = event => {
        // setUserInput({
        //     ...userInput,
        //     entredDate: event.target.value,
        // });

        ////to gard  the prv values
        setUserInput(prevState => {
            return {...prevState, entredDate: event.target.value};
        });
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.entredTitle,
            amount: userInput.entredAmount,
            date: new Date(userInput.entredDate)
        }
        console.log(expenseData);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={ userInput.entredTitle } onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' value={ userInput.entredAmount } step='0.01' onChange={ amountChangeHandler } />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2022-01-01' value={ userInput.entredDate } max='2023-12-31' onChange={ dateChangeHandler }/>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    );
}
export default ExpenseForm;