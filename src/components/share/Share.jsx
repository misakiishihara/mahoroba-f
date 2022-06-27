import { Analytics, Face, Gif, Image } from '@mui/icons-material'
import axios from 'axios';
import React, { useContext, useRef } from 'react'
import { AuthContext } from '../../states/AuthContext';
import "./Share.css"

export default function Share() {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user} = useContext(AuthContext)
    const desc = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        };
        try {
            await axios.post("/posts", newPost);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className='shareTop'>
                <img 
                    src={
                        user.profilePicture 
                        ? PUBLIC_FOLDER + user.profilePicture 
                        : PUBLIC_FOLDER + "/person/noAvatar.png"
                    }
                    alt="" 
                    className='shareProfileImg'
                 />
                <input 
                    type="text" 
                    className='shareInput' 
                    placeholder=" What's happening ?"
                    ref={desc}
                >
                </input>
            </div>
            <hr className='shareHr'/>

            <form className='shareButtons' onSubmit={(e) => handleSubmit(e)}>
                <div className="shareOptions">
                    <label className="shareOption" htmlFor='file'>
                        <Image className='shareIcon' htmlColor='blue'/>
                        <span className='shareOptionText'>Image</span>
                        <input
                            type="file"
                            id="file"
                            accept=".png, .jpeg, .jpg"
                            style={{ display: "none" }}
                        >
                        </input>
                    </label>
                    <div className="shareOption">
                        <Gif className='shareIcon'/>
                        <span className='shareOptionText'>GIF</span>
                    </div>
                    <div className="shareOption">
                        <Face className='shareIcon' htmlColor='hotPink'/>
                        <span className='shareOptionText' >Feeling</span>
                    </div>
                    <div className="shareOption">
                        <Analytics className='shareIcon' htmlColor='red'/>
                        <span className='shareOptionText'>Vote</span>
                    </div>
                </div>
                <button className='shareButton' type='submit'>Share</button>
            </form>
        </div>
    </div>
  )
}
