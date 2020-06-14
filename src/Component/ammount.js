import React, { useContext } from 'react'
import {GlobalContext} from '../context/globalState'
import './ammount.css'

export const Ammount = () => {
    const {transaction} = useContext(GlobalContext)
    const amounts = transaction.map(transactions => transactions.ammount)
    console.log(amounts)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    return(
    <div className="container">
        <h4>Your Balance</h4>
        <h1> ${total} </h1>
    </div>
    )
}