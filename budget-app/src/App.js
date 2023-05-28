import React, { useState } from 'react';

const App = () => {
  const [expenses, setExpenses] = useState({
    Groceries: 0,
    Restaurants: 0,
    Coffee: 0,
    Alcohol: 0,
    Transit: 0,
    Entertainment: 0,
    Health: 0,
    Clothes: 0,
    Travel: 0,
  });

  const [newExpense, setNewExpense] = useState('');

  const handleExpenseChange = (event) => {
    setNewExpense(parseFloat(event.target.value));
  };

  const handleAddExpense = (category) => {
    console.log("category", category)
    setExpenses((prevExpenses) => ({
      ...prevExpenses,
      [category]: prevExpenses[category] + newExpense
    }));

    setNewExpense('');
  };

  const getTotalExpenses = () => {
    const total = Object.values(expenses).reduce((accumulator, value) => accumulator + value, 0);
    return total.toFixed(2);
  };

  return (
    <div>
      <h1>Budget App</h1>
      <div>
        <h2>Categories</h2>
        <ul>
          <li>
          Groceries: ${expenses.Groceries.toFixed(2)}
            <button onClick={() => handleAddExpense('Groceries')}>Add Expense</button>
          </li>
          <li>
          Restaurants: ${expenses.Restaurants.toFixed(2)}
            <button onClick={() => handleAddExpense('Restaurants')}>Add Expense</button>
          </li>
          <li>
          Coffee: ${expenses.Coffee.toFixed(2)}
            <button onClick={() => handleAddExpense('Coffee')}>Add Expense</button>
          </li>
          <li>
          Alcohol: ${expenses.Alcohol.toFixed(2)}
            <button onClick={() => handleAddExpense('Alcohol')}>Add Expense</button>
          </li>
          <li>
          Transit: ${expenses.Transit.toFixed(2)}
            <button onClick={() => handleAddExpense('Transit')}>Add Expense</button>
          </li>
          <li>
          Entertainment: ${expenses.Entertainment.toFixed(2)}
            <button onClick={() => handleAddExpense('Entertainment')}>Add Expense</button>
          </li>
          <li>
          Health: ${expenses.Health.toFixed(2)}
            <button onClick={() => handleAddExpense('Health')}>Add Expense</button>
          </li>
          <li>
          Clothes: ${expenses.Clothes.toFixed(2)}
            <button onClick={() => handleAddExpense('Clothes')}>Add Expense</button>
          </li>
          <li>
          Travel: ${expenses.Travel.toFixed(2)}
            <button onClick={() => handleAddExpense('Travel')}>Add Expense</button>
          </li>
        </ul>
      </div>
      <div>
        <h2>Add Expense</h2>
        <input type="number" value={newExpense} onChange={handleExpenseChange} />
      </div>
      <div>
        <p>{getTotalExpenses()}</p>
      </div>
    </div>
  );
};

export default App;
