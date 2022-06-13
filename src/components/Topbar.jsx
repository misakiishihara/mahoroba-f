import React from 'react'

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className='logo'>Mahoroba</span>
        </div>
        <div className="topbarCenter">
            <div className="searchBar">
                <input 
                type="text" 
                className='searchInput'
                placeholder='search' />
            </div>
        <div className="topberRight">
            <div className="topbarIconItem">
                1
            </div>
            <div className="topbarIconItem">
                2
            </div>
            <img src="/assets/person/1.jpeg" alt="" className='iconImage'/>
        </div>
        </div>
    </div>
  )
}
