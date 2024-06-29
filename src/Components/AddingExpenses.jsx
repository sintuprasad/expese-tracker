// AddExpenseForm.js
import React, { useState } from 'react';

const AddExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({ description, amount });
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Add New Expense</h2>
      <div className="flex items-center mb-4">
        <label htmlFor="description" className="mr-4">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
          required
        />
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor="amount" className="mr-4">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        Add Expense
      </button>
    </form>
  );
};

export default AddExpenseForm;
