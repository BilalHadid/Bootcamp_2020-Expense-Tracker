import React,{useContext} from 'react'
import {GlobalContext} from '../context/globalState.js'

export const IncomeExpense = () => {
    const {transaction} = useContext(GlobalContext)

    const ammounts = transaction.map(transactions => transactions.ammount);
    const income = ammounts
    .filter(item => item > 0)
    .reduce((acc,item) => (acc += item),0)
    .toFixed(2)

    const expence = (ammounts.filter(item => item<0).reduce((acc,item) => (acc += item), 0)* -1).toFixed(2)
    return(
        <div>
            <div>
                <h4>Income</h4>
                <p>{income}</p>
            </div>
            <div>
                <h4>Expence</h4>
                <p>{expence}</p>
            </div>
        </div>
    )
}