// import React, { useState } from 'react'
import AddTransaction from './AddTransaction'
import './expenseHome.css'
// import UserProfile from './UserProfile'
import History from '../history'
const ExpenseHome = () => {
    // const [transaction, setTransaction] = useState([])
    
    return (
        <>
            {/* <Navbar /> */}
            <div className='userdashboard'>
                {/* <div className='user'>

                    <UserProfile />
                </div> */}


                <div className='container'>
                    
                    {/* <AddTransaction transaction= {transaction} /> */}
                    
                    <AddTransaction  />
                    <History/>
                </div>
            </div>
        </>
    )
}

export default ExpenseHome
