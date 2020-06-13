import React, { Fragment, useState, useContext} from 'react'
import {GlobalContext} from '../context/globalState'

export const Transaction = () => {
    const [text,setText] = useState('');
    const [ammount,setAmmount] = useState(0);


    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction= {
            id: Math.floor(Math.random()*10000000),
            text,
            ammount: +ammount
        }
        addTransaction(newTransaction)
    }

    return(
        <Fragment>
            <h3>Add new Transaction</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text..." />

                </div>
                <div>
                    <label htmlFor="ammount">Ammout <br />(negative - expense, positive - income)</label>
                    <input type="number" value={ammount} onChange={(e) => setAmmount(e.target.value)} placeholder="Enter ammount..." />
                </div>
                <button>Add Transaction</button>
            </form>
        </Fragment>
    )
}