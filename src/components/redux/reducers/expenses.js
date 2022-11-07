import { add_expense, delete_expense } from "../action-types/expenses"

const initialState = {
    expenseList: []
}
export const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case add_expense: {
            return {
                ...state,
                expenseList: [...state.expenseList, action.data]
            }
        }

        case delete_expense: {
            const updatedList = state.expenseList.filter((e) => e.time !== action.time)
            return {
                ...state,
                expenseList: updatedList
            }
        }

        default: return state
    }
}

