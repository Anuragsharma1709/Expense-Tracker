import { add_expense, delete_expense } from "../action-types/expenses"

export const addExpense = (data) =>{
    console.log(data)
    return{
        type:add_expense,
        data
    };
}

export const deleteExpense = (data)=>{
    return{
        type: delete_expense,
        data
    }
}