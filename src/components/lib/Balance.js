import React from 'react'
import { useSelector } from 'react-redux'
import './expenseHome.css'
const Balance = () => {
    const list = useSelector((state) => state.expenseReducer.expenseList)
    let inc = 0;
    let exp = 0;

    list.map((e) => {
        if (e.type === 'income') {
            inc = inc + Number(e.amount)
        } if (e.type === 'expense') {
            exp = exp + Number(e.amount)
        }
        return console.log(inc, exp)
    })

    return (
        <div>
            <h4>Your Balance</h4>
            <h1>Rs {inc - exp} </h1>

            <div className="inc-exp-container">
                <div>
                    <h4>INCOME</h4>
                    <p className="money inc">+ Rs {inc} </p>
                </div>
                <div>
                    <h4>EXPENSE</h4>
                    <p className="money exp"> Rs{exp} </p>
                </div>
            </div>
        </div>
    )
}

export default Balance
