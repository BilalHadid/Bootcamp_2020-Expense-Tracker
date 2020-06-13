import React,{useContext} from 'react';
import {GlobalContext} from '../context/globalState'

export const Transactionaction = ({transactions}) => {
    const {deleteTransaction} = useContext(GlobalContext)

    const sign = transactions.ammount < 0 ? '-':'+';
    return(
        <li className={transactions.ammount < 0? 'minus': 'plus'}>
         {transactions.text} <span>{sign}${Math.abs(transactions.ammount)}</span>
         <button onClick={() => deleteTransaction(transactions.id)}>x</button>
    </li>
    )
    
}