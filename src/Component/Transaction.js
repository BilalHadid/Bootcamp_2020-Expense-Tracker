import React from 'react';

export const Transactionaction = ({transactions}) => {

    const sign = transactions.ammount < 0 ? '-':'+';
    return(
        <li>
         {transactions.text} <span>{sign}${Math.abs(transactions.ammount)}</span><button>x</button>
    </li>
    )
    
}