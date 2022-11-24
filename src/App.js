import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Register from './components/registration';
import Header from './components/header'
import HomePage from './components/home'
import ExpenseHome from './components/lib';
import UserProfile from './components/profile'
import { createContext, useReducer } from 'react';
import { reducer, initialState } from './components/redux/reducers/loginReducer'
import IncomeList from './components/history/incomeList';
import ExpenseList from './components/history/expenseList';
import Sidebar from './components/Sidebar';
import ChangePassword from './components/changepaswword';




export const UserContext = createContext();

function App() {
  const [user, dispatch] = useReducer(reducer, initialState)
  console.log(user.user)
  // window.localStorage.setItem("loginInfo", JSON.stringify(user.login))
  // window.localStorage.setItem("userInfo", JSON.stringify(user.user))


  return (
    <>
      <UserContext.Provider value={{ user, dispatch }}>
        <BrowserRouter>
          {!user.login && <Header />}
          {!user.login &&
            <Routes>
              <Route path='/' element={!user.login && <HomePage />} />
              <Route path='/register' element={<Register />} />
            </Routes>}
          {user.login &&
            <Sidebar>
              <Routes>
                <Route path='/expense' element={!user.login ? <Navigate replace to="/" /> : <ExpenseHome />} />
                <Route path='/profile' element={user.login ? <UserProfile /> : <Navigate replace to='/' />} />
                <Route path='/incomeList' element={user.login ? <IncomeList /> : <Navigate replace to='/' />} />
                <Route path='/expenseList' element={user.login ? <ExpenseList /> : <Navigate replace to='/' />} />
                <Route path='/setting' element={user.login ? <ChangePassword /> : <Navigate replace to='/' />} />
              </Routes>
            </Sidebar>
          }
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
