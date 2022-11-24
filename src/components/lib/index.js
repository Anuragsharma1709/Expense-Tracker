import './expenseHome.css'
import History from '../history'
import PopUp from './PopUp'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Charts from '../charts'

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
        return {inc,exp}
    })

    return (
        <div className='main-cont'>
            <div className='switch'>
                <div className='switch-holder'>
                    <button
                        className='inc-button'
                    >
                        <Link className='inc-link' to="/incomeList">INCOME</Link>
                    </button>
                    <p className="money inc">+ Rs {inc} </p>
                </div>
                <div className='switch-holder'>
                    <button
                        className='exp-button'
                    >
                        <Link className='exp-link' to='/expenseList'>EXPENSE</Link>
                    </button>
                    <p className="money exp"> - Rs {exp} </p>

                </div>
                <div className='switch-holder'>
                    <button className='bal-button'>Balance</button>
                    <p className="money inc"> Rs {inc - exp} </p>
                </div>
            </div>
            <Charts/>
            <History />
            <PopUp />
        </div>
    )
}

export default ExpenseHome
