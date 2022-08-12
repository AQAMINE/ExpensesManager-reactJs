import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../Ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
const Expenses = (props) => {
  const [filtredYear, setFiltredYear] = useState('2020');

  //Recive Selected Year Value From The Child Component Here Using Function 
  const filterChangeHandler = selectedYear => {
    setFiltredYear(selectedYear)
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filtredYear} onChangeFilter={filterChangeHandler}/>
        {props.items.map((item) => (
          <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
        ))}
      </Card>
    </div>
  );
}
export default Expenses;
