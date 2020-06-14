import React,{useContext} from 'react'
import {GlobalContext} from '../context/globalState.js'
import './incomeExpense.css'

export const IncomeExpense = () => {
    const {transaction} = useContext(GlobalContext)

    const ammounts = transaction.map(transactions => transactions.ammount);
    const income = ammounts
    .filter(item => item > 0)
    .reduce((acc,item) => (acc += item),0)
    .toFixed(2)

    const expence = (ammounts.filter(item => item<0).reduce((acc,item) => (acc += item), 0)* -1).toFixed(2)
    return(
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expence</h4>
                <p className="money minus">{expence}</p>
            </div>
        </div>
    )
}