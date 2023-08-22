import {createContext, useReducer} from "react";
import AppReducer from './AppReducer'

//Initial state
const initialState= {
    transactions: [
        {id: 1, text: "Flower", amount: 200},
        {id: 2, text: "Cash", amount: 80},
        {id: 3, text: "Hobbie", amount: -30},
    ]
}

//Craate context
export const GlobalContext = createContext(initialState)

// Privider component
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)


    //Actions
    function deleteHistory(id) {
        dispatch({
            type: 'DELETE',
            payload: id
        })
    }

    function addHistory (transaction) {
        dispatch({
            type: 'ADD',
            payload: transaction
        })
    }
return(
<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteHistory,
    addHistory
}}>
    {children}
</GlobalContext.Provider>)

}




