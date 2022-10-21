import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExpense } from '../redux/actions/expenses'

const AddTransaction = () => {
    const AddTransactionView = (props) => {
        const [amount, setAmount] = useState("")
        const [description, setDescription] = useState("")
        const [date, setDate] = useState("")
        const dispatch = useDispatch()

        const handleAmount = (e) => {
            setAmount(e.target.value)
        }

        const handleDescription = (e) => {
            setDescription(e.target.value)
        }

        const handleDate = (e) => {
            setDate(e.target.value)
        }

        const addAmount = () => {
            if (amount === "" && description === "" && date === "") {
                console.log("enter the value")
                return;
            }
            const data = {
                amount,
                description,
                date,
                createdAt: new Date()
                
            }
            dispatch(addExpense(data))
            props.setIsAddVisible()
        }

        useEffect(() => {
            console.log(amount)
        }, [amount])


        return (
            <div className='box'>
                <input
                    placeholder='amount'
                    type='text'
                    name='amount'
                    onChange={handleAmount}
                />
                <input
                    type="text"
                    placeholder='Description'
                    value={description}
                    name='description'
                    onChange={handleDescription}
                />
                <input
                    type="date"
                    value={date}
                    onChange={handleDate}

                />


                {/* <div className='radiobtn'>
                    <input
                        type='radio'
                        id='expense'
                        name='type'
                        value="EXPENSE"
                        // onChange={(e)=>setData({type:e.target.value})}
                        checked = {type === "EXPENSE"}

                    />
                    <label htmlFor='expense'>Expense</label>
                    <input
                        type='radio'
                        id='income'
                        name='type'
                        value="INCOME"
                        // onChange={(e)=>setData({type:e.target.value})}
                        checked = {type === "EXPENSE"}

                        />
                    <label htmlFor='income'>Income</label>
                </div> */}
                <button onClick={addAmount} >
                    Add Transaction
                </button>
            </div>
        )

    }
    const [isAddVisible, setIsAddVisible] = useState(false)
    return (
        <div className='container1'>
            <div className='span'>
                <span >Add Transaction</span>
                <button className='addTransaction' onClick={() => setIsAddVisible(!isAddVisible)}>
                    {isAddVisible ? "cancel" : "Add"}
                </button>
            </div>
            {isAddVisible && <AddTransactionView setIsAddVisible={setIsAddVisible} />}


        </div>
    )
}

export default AddTransaction
