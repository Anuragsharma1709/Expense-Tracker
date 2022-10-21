import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Register from './components/registration';
import Header from './components/header'
import HomePage from './components/home'
import ExpenseHome from './components/lib';
import UserProfile from './components/profile'
import { createContext, useReducer } from 'react';
import { reducer, initialState } from './components/redux/reducers/loginReducer'


export const UserContext = createContext();

function App() {
  const [user, dispatch] = useReducer(reducer, initialState)
  console.log(user)
  return (
    <>
      <UserContext.Provider value={{ user, dispatch }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/expense' element={!user.login ? <Navigate replace to="/" /> : <ExpenseHome />} />
            <Route path='/profile' element={ user.login ? <UserProfile />: <Navigate replace to = '/'/>} />
            
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
      {/* <UserProfile /> */}

    </>
  );
}

export default App;
