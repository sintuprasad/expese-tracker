// ExpenseList.js
import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Expenses</h2>
      <ul className="bg-white shadow-md rounded-md p-4">
        {expenses.map((expense, index) => (
          <li key={index} className="flex justify-between items-center border-b py-2">
            <span>{expense.description}</span>
            <span>{expense.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
