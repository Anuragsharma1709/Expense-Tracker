import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { addUsers, getUsers } from './api'
import './registration.css'
const Register = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    })
    const validateField = () => {
        const regEx = /^[a-zA-Z0-9_.-]{3,}@[a-zA-Z.]{2,7}$/
        const success = false

        const email = userData.email
        if (userData.name === "")
            return { success, message: "Please fill the name." }

        if ((userData.name.length <= 2) || (userData.name.length > 20))
            return { success, message: "Name length should be between 2 and 20." }

        if (!isNaN(userData.name))
            return { success, message: "Name contains only charcaters." }

        if (userData.email === '')
            return { success, message: "Please enter email." }

        if ((email.match(regEx)))
            return { success, message: "invalid email." }

        return true
    }

    const saveUserData = async (e) => {
        e.preventDefault();
        console.log(userData)
        
        const users = await getUsers()
        console.log(users)
        
        const fieldsValidated = validateField();
        if (!fieldsValidated?.success) {
            const emailExists = users.some(x => x.email === userData.email)
            if (!emailExists){
                 addUsers(userData)
                 alert("resgistered successfully")
            }
            else
                alert("Email already exists!")
        } else {
            alert(fieldsValidated.message)

        }
    }

    return (
        <div className="login">
            <div className='login-container'>
                <div className='left-side'>
                    <h2>Register</h2>

                    <form action="" onSubmit={saveUserData} >

                        <div className='content'>
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                autoComplete='off'
                                value={userData.name}
                                onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}

                            />
                        </div>
                        <div className='content'>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                autoComplete='off'
                                value={userData.email}
                                onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}

                            />

                        </div>
                        <div className='content'>
                            <label htmlFor="phone">Phone no</label>
                            <input
                                type="number"
                                name="phone"
                                id="phone"
                                autoComplete='off'
                                value={userData.phone}
                                onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}

                            />
                        </div>
                        <div className='content'>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete='off'
                                value={userData.password}
                                onChange={(e) => setUserData(prev => ({ ...prev, password: e.target.value }))}

                            />
                        </div>

                        <button type='submit' className='btn'>Register</button>
                    </form>
                    <div className='footer'>
                        <h4> Already have an Account? <Link to='/'>Sign In</Link> </h4>

                    </div>
                </div>
                <div className='right-side'>
                    <div className='right-image'>
                        <img src='./images/img2.png' id='img' alt='' />

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Register
