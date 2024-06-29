// App.js
import React, { useState } from 'react';
import Header from './Components/Header';
import ExpenseList from './Components/Expense-list';
import AddExpenseForm from './Components/AddingExpenses';
  
function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Header />
      <AddExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
