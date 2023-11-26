import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({ onSaveExpenseData }) => {

    const [enteredTitle, setEnteredTitle] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const [enteredAmount, setEnteredAmount] = useState('')

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const [enteredDate, setEnteredDate] = useState('');
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        onSaveExpenseData(expenseData)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" name="" id="" onChange={titleChangeHandler}
                        value={enteredTitle} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0.01" step="0.01" name="" id="" onChange={amountChangeHandler}
                        value={enteredAmount} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2023-11-24" max="2024-11-24" onChange={dateChangeHandler}
                        value={enteredDate} />
                </div>

                <div className="new-expense__actions">
                    <button type="submit">Add expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm