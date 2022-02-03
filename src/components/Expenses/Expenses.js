import "./Expenses.css";
import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const dropdownChangeHandler = (event) => {
    setFilteredYear(event.target.value);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          filter={dropdownChangeHandler}
        />
        {filteredExpenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          expenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })
        )}
      </Card>
    </div>
  );
}

export default Expenses;
