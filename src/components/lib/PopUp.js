import React, { useState } from 'react'
import { GrAdd } from "react-icons/gr";
import Modal from 'react-modal'
import { addExpense } from '../redux/actions/expenses'
import { useDispatch } from 'react-redux'
import './expenseHome.css';


const PopUp = () => {
    const [show, setShow] = useState(false)
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
            setShow(!show)
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
                        // value={type}
                        onClick={() => setType('expense')}


                    />
                    <label htmlFor='expense'>Expense</label>
                    <input
                        type='radio'
                        id='income'
                        name='type'
                        // value={type}
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
    return (
        <div>
            <div className='modal-class'>
                <Modal isOpen={show}
                    ariaHideApp={false}
                    className='modal-box'>
                    <div className='modal-btn'>
                        <div className='heading'>
                            <h2>ADD INCOME<span>/</span>EXPENSE</h2>
                        </div>
                        <div className='close-btn'>
                            <button onClick={() => setShow(false)}>X</button>
                        </div>
                    </div>
                    <AddTransactionView />
                </Modal>
            </div>
            <div className='icon-button' onClick={() => setShow(!show)}>
                <GrAdd />
            </div>
        </div>
    )
}

export default PopUp
