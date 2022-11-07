import React from 'react'
import './history.css'
import { useSelector } from 'react-redux'
import moment from 'moment/moment';
import { ExportToExcel } from '../downloadfile';

const History = () => {
  const list = useSelector((state) => state.expenseReducer.expenseList)
  const time = moment(list.createdAt).fromNow()
  const fileName = "myfile";
  return (
    <div className='expense-list'>
      <div className='trans-heading'>Transactions</div>
      <div className='download-btn'>

        <ExportToExcel exceldata={list} fileName={fileName} />
      </div>
      {list.length ? (
        list.map((item) =>
          <div className='content-box' key={item.createdAt}>

            <div className='des'>
              <h3>{item.description}</h3>
              {/* <h4>{time}</h4> */}
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
  )
}

export default History
