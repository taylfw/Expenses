import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses({ expenses }) {
  return expenses.map((expense) => {
    return (
      <div className="expenses">
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      </div>
    );
  });
}

export default Expenses;
