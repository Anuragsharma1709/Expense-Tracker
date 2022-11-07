import './expenseHome.css'
import History from '../history'
import PopUp from './PopUp'
import { useSelector } from 'react-redux'

const ExpenseHome = () => {

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
        <>
            <div className='switch'>
                <div className='switch-holder'>
                    <button className='inc-button'>INCOME</button>
                    <p className="money inc">+ Rs {inc} </p>
                </div>
                <div className='switch-holder'>
                    <button className='exp-button'>EXPENSE</button>
                    <p className="money exp"> Rs{exp} </p>

                </div>
                <div className='switch-holder'>
                    <button className='bal-button'>Balance</button>
                    <p className="money inc">+ Rs {inc - exp} </p>
                </div>

            </div>

            <div className='container'>
                <History />
            </div>
            <PopUp />
        </>
    )
}

export default ExpenseHome
