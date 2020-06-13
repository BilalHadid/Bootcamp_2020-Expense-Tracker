import React, { useContext } from 'react'
import {GlobalContext} from '../context/globalState'

export const Ammount = () => {
    const {transaction} = useContext(GlobalContext)
    const amounts = transaction.map(transactions => transactions.ammount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    return(
    <div>
        <h4>Your Balance</h4>
        <h1> ${total} </h1>
    </div>
    )
}