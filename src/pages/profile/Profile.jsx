import React from 'react'
import "./Profile.css"
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Timeline from '../../components/timeline/Timeline'
import Topbar from '../../components/topbar/Topbar'


export default function Profile() {
  return (
    <>
        <Topbar />
        <div className="profile">
            <Sidebar />
            <Timeline />
            <Rightbar />
        </div>
    </>
  )
}
