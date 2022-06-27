import React, { useContext } from 'react'
import { Chat, Notifications, Search } from "@mui/icons-material"
import "./Topbar.css"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../states/AuthContext'

export default function Topbar() {
    const {user} = useContext(AuthContext)
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">Mahoroba</span>
            </Link>
        </div>
        <div className="topbarCenter">
            <div className="searchBar">
                <Search className="searchIcon" />
                <input 
                type="text" 
                className="searchInput"
                placeholder="search"
             />
            </div>
        </div>
        <div className="topbarRight">
           <div className='topbarItemIcons'>
            <div className="topbarIconItem">
                <Chat />
                <span className='topbarIconBadge'>1</span>
            </div>
            <div className="topbarIconItem">
                <Notifications />
                <span className='topbarIconBadge'>2</span>
            </div>
            <Link to={`/profile/${user.username}`}>
            <img
                src={
                user.profilePicture 
                ? PUBLIC_FOLDER + user.profilePicture 
                : PUBLIC_FOLDER + "/person/noAvatar.png"} 
                alt="" 
                className='iconImage'
            />
            </Link>
        </div> 
        </div>
    </div>
  )
}
