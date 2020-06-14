import React from 'react';
import './App.css';
import './Component/component.css'
import { Ammount } from './Component/ammount.js';
import { IncomeExpense } from './Component/incomeExpense'
import {TransactionHistory } from './Component/transactionHistory'
import {Transaction} from './Component/addTransaction.js'
import {GlobalProvider} from './context/globalState'

function App() {
  
  return (
    <GlobalProvider className="App">
      <h3>Expence Tracker App</h3>
      <div className="container">
          <Ammount />
          <IncomeExpense />
          <TransactionHistory />
          <Transaction />
      </div>
      
    </GlobalProvider>
  );
}

export default App;
