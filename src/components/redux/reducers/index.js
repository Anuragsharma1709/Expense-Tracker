import { combineReducers } from "redux";
import { expenseReducer} from "./expenses";
import { reducer } from "./loginReducer";

export const rootReducer = combineReducers({
    expenseReducer,reducer
})
