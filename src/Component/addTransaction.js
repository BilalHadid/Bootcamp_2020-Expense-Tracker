import React, { Fragment, useState} from 'react'

export const Transaction = () => {
    const [Text,setText] = useState('');
    const [Ammout,setAmmount] = useState(0);
    return(
        <Fragment>
            <h3>Add new Transaction</h3>
            <form>
                <div>
                    <label htmlFor="text">Text</label>
                    <input type="text" value={Text} onChange={(event) => setText(event.target.value)} placeholder="Enter Text..." />

                </div>
                <div>
                    <label htmlFor="ammount">Ammout <br />(negative - expense, positive - income)</label>
                    <input type="number" value={Ammout} onChange={(event) => setAmmount(event.target.value)} placeholder="Enter ammount..." />
                </div>
                <button>Add Transaction</button>
            </form>
        </Fragment>
    )
}