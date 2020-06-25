import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils'

function Transaction(props) {
    const sign = props.data.amount < 0 ? '-' : '+'
    const { deleteTransaction } = useContext(GlobalContext)

    return (
        <>
            <li className={sign === '-' ? 'minus' : 'plus'}>
                {props.data.text}
                <span>
                    {sign}${numberWithCommas(Math.abs(props.data.amount))}
                </span>
                <button
                    className="delete-btn"
                    onClick={(e) => deleteTransaction(props.data._id)}
                >
                    x
                </button>
            </li>
        </>
    )
}

export default Transaction
