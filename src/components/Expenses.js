import "./Expenses.css";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

function Expenses({ expenses }) {
  return expenses.map((expense) => {
    return (
      <Card className="expenses">
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      </Card>
    );
  });
}

export default Expenses;
