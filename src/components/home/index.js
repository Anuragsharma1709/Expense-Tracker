import React, { useContext, useEffect, useState } from 'react'
import './home.css'
import { Link, useNavigate } from 'react-router-dom'
import { addUsers, getUsers } from '../registration/api'
import { UserContext } from '../../App'

const HomePage = () => {

    const {user, dispatch} = useContext(UserContext);

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
  
    const navigate = useNavigate()
    const loginUser = async (e) => {
        e.preventDefault()
        const users = await getUsers();

        const userExists = users.some(data => data.email === userData.email && data.password === userData.password)
        if (userExists ) {
         const data = users.filter(data => data.email === userData.email && data.password === userData.password)
            // const data = {
            //     login: true
            // }

// debugger;
            dispatch({type:'user_login', payload:{login:true, user:data[0]}})

                navigate('/expense')

        }
        else {
            alert("wrong email or password")
        }

    }
    return (
        <>

            <div className='home'>
                <div className='div1'>
                    <h2>Welcome !</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio. Praesent libero.<br></br>
                        Sed cursus ante dapibus diam. Sed nisi.
                        Nulla quis sem at nibh elementum imperdiet.<br></br> Duis sagittis ipsum.
                        Praesent mauris.Fusce nec tellus sed augue semper porta.

                    </p>
                </div>
                <div className='div2'>
                    <h2>Login</h2>
                    <form onSubmit={loginUser}>
                        <input
                            type='text'
                            name='email'
                            id='email'
                            placeholder='Enter your email'
                            value={userData.email}
                            onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
                        />
                        <input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Enter your password'
                            value={userData.password}
                            onChange={(e) => setUserData(prev => ({ ...prev, password: e.target.value }))}

                        />
                        <button type='submit' className='btn'>Sign in</button>

                    </form>
                    <p>Don't have an account ?</p>
                    <Link to='/register'>Register here</Link>


                </div>

            </div>
        </>
    )
}

export default HomePage
