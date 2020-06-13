import React ,{createContext, useReducer} from 'react';
import AppReducer from './appReducer.js'

const initialState = {
    transaction: [
        {id:1,text: "Bilal",ammount: 40},
        {id:2,text: "Hadid",ammount: -60},
        {id:3,text: "Qasim",ammount: 80},
        {id:4,text: "Usama",ammount: -50}
    ]
}
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer,initialState)

    return(
        <GlobalContext.Provider value={{
            transaction: state.transaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}