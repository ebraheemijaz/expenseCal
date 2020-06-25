import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState = {
    transactions: [],
    loading: true,
    error: null,
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    async function getTransactions() {
        try {
            const res = await axios.get('./api/v1/transactions')
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data,
            })
        } catch (error) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: error.response.data.error,
            })
        }
    }

    async function deleteTransaction(id) {
        try {
            const res = await axios.delete(`./api/v1/transactions/${id}`)
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id,
            })
        } catch (error) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: error.response.data.error,
            })
        }
    }

    async function addTransaction(data) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        try {
            const res = await axios.post(`./api/v1/transactions`, data, config)
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data,
            })
        } catch (error) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: error.response.data.error,
            })
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                error: state.error,
                loading: state.loading,
                transactions: state.transactions,
                getTransactions: getTransactions,
                deleteTransaction: deleteTransaction,
                addTransaction: addTransaction,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
