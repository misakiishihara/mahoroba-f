import React from 'react'
import "./Rightbar.css"
import { Users } from "../../dummyData"
import Online from '../online/Online'

export default function Rightbar({ profile }) {
    
    const HomeRightbar = () => {
      return (
        <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="eventContainer">
          <img src="assets/star.png" alt="" className='starImg' />
          <span className='eventText'><b>only followers event !</b></span>
        </div>
        <img src="assets/ad.jpeg" alt="" className='eventImg' />
        <h4 className='rightbarTitle'>friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id}  /> 
          ))}     
        </ul>
        <p className='promotionTitle'>PR</p>
        <img 
        src="assets/promotion/promotion1.jpeg" 
        alt="" 
        className='rightbarPromotionImg'
         />
         <p className='promotionName'>Shopping</p>
         <img 
        src="assets/promotion/promotion2.jpeg" 
        alt="" 
        className='rightbarPromotionImg'
         />
         <p className='promotionName'>Shopping2</p><img 
        src="assets/promotion/promotion3.jpeg" 
        alt="" 
        className='rightbarPromotionImg'
         />
         <p className='promotionName'>Shopping3</p>
      </div>
    </div>
    )
    const ProfileRightbar = () => {
      return (
        <></>
      )
    }
      }
      return (
        <div></div>
      
      
      )
};
