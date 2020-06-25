import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils'

function Balance(props) {
    const { transactions } = useContext(GlobalContext)
    const amount = transactions.map((each) => each.amount)
    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2)
    return (
        <div
            className={
                total === (0, 0).toFixed(2) ? '' : total < 0 ? 'minus' : 'plus'
            }
        >
            <h4>Your Balance</h4>
            <h1>${numberWithCommas(total)}</h1>
        </div>
    )
}

export default Balance
