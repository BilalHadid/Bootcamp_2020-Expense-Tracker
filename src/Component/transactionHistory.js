import React, { Fragment } from 'react';

export const TransactionHistory = () =>{
    return(
        <Fragment>
            <h3>History</h3>
            <ul>
                <li>
                    Cash <span>-$400</span><button>x</button>
                </li>
            </ul>
        </Fragment>
    )
}