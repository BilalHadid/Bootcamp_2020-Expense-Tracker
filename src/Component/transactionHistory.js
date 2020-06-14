import React, { Fragment, useContext } from 'react';
import {GlobalContext} from '../context/globalState'
import {Transactionaction} from './Transaction'


export const TransactionHistory = () =>{
    const {transaction} = useContext(GlobalContext)
    return(
        <Fragment>
            <h3>History</h3>
            <ul className="list">
                {transaction.map(transactions => (<Transactionaction key={transactions.id} transactions={transactions}/>))}
                
            </ul>
        </Fragment>
    )
}