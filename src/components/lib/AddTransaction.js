import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExpense } from '../redux/actions/expenses'
import Balance from './Balance'

const AddTransaction = () => {

    const AddTransactionView = (props) => {
        const [amount, setAmount] = useState("")
        const [description, setDescription] = useState("")
        const [date, setDate] = useState("")
        const [type, setType] = useState('')

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
            if (amount === "" && description === "" && date === "" && type === "") {
                console.log("enter the value")
                return;
            }
            const data = {
                amount,
                description,
                date,
                type,
                createdAt: new Date()

            }
            dispatch(addExpense(data))
            props.setIsAddVisible()
        }




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
                <div className='radiobtn'>
                    <input
                        type='radio'
                        id='expense'
                        name='type'
                        onClick={() => setType('expense')}


                    />
                    <label htmlFor='expense'>Expense</label>
                    <input
                        type='radio'
                        id='income'
                        name='type'
                        onClick={() => setType('income')}
                    />
                    <label htmlFor='income'>Income</label>
                </div>
                <button onClick={addAmount} >
                    Add Transaction
                </button>
            </div>
        )

    }
    const [isAddVisible, setIsAddVisible] = useState(false)
    return (
        <>
            <div className='main-box'>
                <div className='container1'>
                    <div className='span'>
                        <span >Add Transaction</span>
                        <button className='addTransaction' onClick={() => setIsAddVisible(!isAddVisible)}>
                            {isAddVisible ? "cancel" : "Add"}
                        </button>
                    </div>
                    {isAddVisible && <AddTransactionView setIsAddVisible={setIsAddVisible} />}
                </div>
                <Balance />
            </div>
        </>
    )
}

export default AddTransaction
