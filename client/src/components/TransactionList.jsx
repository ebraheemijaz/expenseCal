import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

function TransactionList(props) {
    const { transactions, getTransactions } = useContext(GlobalContext)
    useEffect(() => {
        getTransactions()
    }, [])
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((each) => (
                    <Transaction data={each} key={each._id} />
                ))}
            </ul>
        </>
    )
}

export default TransactionList
