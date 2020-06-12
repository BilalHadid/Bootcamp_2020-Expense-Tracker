import React from 'react';
import './App.css';
import { Ammount } from './Component/ammount.js';
import { IncomeExpense } from './Component/incomeExpense'
import {TransactionHistory } from './Component/transactionHistory'
import {Transaction} from './Component/addTransaction.js'

function App() {
  
  return (
    <div className="App">
      <h3>Expence Tracker App</h3>
      <Ammount />
      <IncomeExpense />
      <TransactionHistory />
      <Transaction />
      
    </div>
  );
}

export default App;
