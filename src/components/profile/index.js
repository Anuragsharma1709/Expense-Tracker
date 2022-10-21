import React,{useContext} from 'react'
import { UserContext } from '../../App';
import { getUsers } from '../registration/api'
import './profile.css'

const UserProfile = () => {
    const { user } = useContext(UserContext);
    const data = user.user
    console.log(data)
    return (
        <div className='user-profile'>
            <form >
                <div className='user-info' >
                    <img src='./images/img3.png' alt=''/>
                </div>
                <div className='user-info' >
                    <label>Name</label>
                    <p>{data.name}</p>
                </div>
                <div className='user-info'>
                    <label>Email</label>
                    <p>{data.email}</p>
                </div>
                <div className='user-info'>
                    <label>Phone no.</label>
                    <p>{data.phone}</p>
                </div>
                
                <div className='user-info'>
                    <label>Occupation</label>
                    <p>abc</p>
                </div>

            </form>
        </div>
    )
}

export default UserProfile
