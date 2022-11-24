import React from 'react'
import { useSelector } from 'react-redux'
import { ExportToExcel } from '../downloadfile';
import './history.css'

const IncomeList = () => {
    const list = useSelector((state) => state.expenseReducer.expenseList)
    const fileName = "myfile";
    const newList = list.filter(list => list.type === "income")
    console.log(newList)


    return (
        <>
        <div className='inc-list'>
          Income List  
        </div>
        <div className='expense-list'>
            <div className='trans-heading'>Transactions</div>
            <div className='download-btn'>
                <ExportToExcel exceldata={list} fileName={fileName} />
            </div>
            {newList.length ? (
                newList.map((item) =>
                    <div className='content-box' key={item.createdAt}>

                        <div className='des'>
                            <h3>{item.description}</h3>
                            {/* <h4>{time}</h4> */}
                            <h5>{item.date}</h5>
                        </div>



                        <div className='right-list'>
                            <div>
                                <h3 className='list-amount'> ₹{item.amount} </h3>
                            </div>


                        </div>
                    </div>
                )
            ) : <div className='no-trans'>
                <h2>No Transaction yet !</h2>
            </div>}
        </div>
        </>
    )
}

export default IncomeList
