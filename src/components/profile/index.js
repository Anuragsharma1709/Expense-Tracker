import React, { useContext } from 'react'
import { UserContext } from '../../App';
import './profile.css'

const UserProfile = () => {
    const { user } = useContext(UserContext);
    const data = user.user
    console.log(data)

    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = e => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className='user-profile'>
            <form >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        ref={imageUploader}
                        style={{
                            display: "none"
                        }}
                    />
                    <div
                        style={{
                            height: "60px",
                            width: "60px",
                            border: "1px dashed black"
                        }}
                        onClick={() => imageUploader.current.click()}
                    >
                        <img
                            ref={uploadedImage}
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "absolute"
                            }}
                        />
                    </div>
                    Click to upload Image
                </div>
                <div className='user-info' >
                    <label>Name</label>
                    {/* <p>{data.name}</p> */}
                </div>
                <div className='user-info'>
                    <label>Email</label>
                    {/* <p>{data.email}</p> */}
                </div>
                <div className='user-info'>
                    <label>Phone no.</label>
                    {/* <p>{data.phone}</p> */}
                </div>



            </form>
        </div>
    )
}

export default UserProfile
