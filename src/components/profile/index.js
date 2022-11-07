import React, { useContext } from 'react'
import { UserContext } from '../../App';
import './profile.css'

const UserProfile = () => {
    const { user } = useContext(UserContext);
    const data = user.user
    console.log(data)
    return (
        <div className='user-profile'>
            <form >
                <div className='user-info' >
                    <img src='./images/img3.png' alt='' />
                </div>
                <div className='user-info' >
                    <label>Name</label>
                    <p>{data}</p>
                </div>
                <div className='user-info'>
                    <label>Email</label>
                    <p>{data}</p>
                </div>
                <div className='user-info'>
                    <label>Phone no.</label>
                    <p>{data}</p>
                </div>



            </form>
        </div>
    )
}

export default UserProfile
