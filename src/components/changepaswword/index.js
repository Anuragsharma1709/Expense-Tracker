import React, { useState, useContext } from 'react'
import "./changePassword.css"
import { FiEyeOff, FiEye } from "react-icons/fi"
import { UserContext } from '../../App'



const ChangePassword = () => {

    const { user } = useContext(UserContext);
    console.log(user.user)
    const data = user.user
    const obj = Object.values(data)


    const [showPassword, setShowPassword] = useState(false)
    const tooglePassword = () => {
        setShowPassword(!showPassword)
    }

    const [resetPassword, setResetPassword] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    })
    const validateField = () => {
        const success = false
        if (resetPassword.newPassword !== resetPassword.confirmPassword)
            return { success, message: "password not match" }
        return { success: true, message: "password changed sucessfully" }
    }



    const changePassword = (e) => {
        e.preventDefault()
        const fieldsValidated = validateField()

        if (fieldsValidated.success) {

            const passwordExists = obj.includes(resetPassword.oldPassword)

            if (passwordExists) {

                console.log("submit")
                console.log(resetPassword)
                alert(fieldsValidated.message)
            } else {
                alert("enter correct old password ?")
            }

        } else {
            console.log(resetPassword)
            alert(fieldsValidated.message)
        }

    }

    return (
        <div className='setting'>
            <form onSubmit={changePassword}>
                <div className='setting_form'>
                    <h3>Change password</h3>
                    <label htmlFor='old password' >Old Password</label>
                    <div className='input_field'>
                        <input
                            type={(showPassword) ? "text" : "password"}
                            id='oldPassword'
                            placeholder='Old Password'
                            name='oldPassword'
                            autoComplete='off'
                            value={resetPassword.oldPassword}
                            onChange={(e) => setResetPassword(prev => ({ ...prev, oldPassword: e.target.value }))}
                        />
                        <i
                            onClick={tooglePassword}
                        > {!showPassword ? <FiEyeOff /> : <FiEye />}</i>
                    </div>
                    <label>New Password</label>
                    <div className='input_field'>
                        <input
                            placeholder='New Password'
                            type={(showPassword) ? "text" : "password"}
                            id='newPassword'
                            autoComplete='off'
                            value={resetPassword.newPassword}
                            onChange={(e) => setResetPassword(prev => ({ ...prev, newPassword: e.target.value }))}
                        />
                        <i
                            onClick={tooglePassword}
                        >{!showPassword ? <FiEyeOff /> : <FiEye />}</i>

                    </div>
                    <label>Confirm Password</label>
                    <div className='input_field'>

                        <input
                            placeholder='Confirm Password'
                            type={(showPassword) ? "text" : "password"}
                            id='confirmPassword'
                            autoComplete='off'
                            value={resetPassword.confirmPassword}
                            onChange={(e) => setResetPassword(prev => ({ ...prev, confirmPassword: e.target.value }))}

                        />
                        <i onClick={tooglePassword}>{!showPassword ? <FiEyeOff /> : <FiEye />}</i>

                    </div>
                    <button type='submit'>Change Password</button>
                </div>
            </form>

        </div>
    )
}

export default ChangePassword
