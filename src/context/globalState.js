import React ,{createContext, useReducer} from 'react';
import {AppReducer} from './appReducer.js'

const initialState = {
    transaction: [
        {id:1,text: "Bilal",ammount: 40},
        
        
    ]
}
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer,initialState)
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
      function addTransaction(transaction){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    return(
        <GlobalContext.Provider value={{
            transaction: state.transaction,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}