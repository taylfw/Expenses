import "./Expenses.css";
import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const dropdownChangeHandler = (event) => {
    console.log(event.target.value);
    setFilteredYear(event.target.value);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          filter={dropdownChangeHandler}
        />
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
