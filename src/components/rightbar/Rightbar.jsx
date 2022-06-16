import React from 'react'
import "./Rightbar.css"
import { Users } from "../../dummyData"
import Online from '../online/Online'

export default function Rightbar({ profile }) {
    
    const HomeRightbar = () => {
      return (
      <>
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
      </>
    )
    }

    const ProfileRightbar = () => {
      return (
        <>
          <h4 className='rightbarTitle'>User Info</h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <sapn className="rightbarInfoKey">City:</sapn>
              <sapn className="rightbarInfoKey">Tokyo</sapn>
            </div>
            <h4 className='rightbarTitle'>Friends</h4>
            <div className="rightbarFollowings">
              <div className="rightbarFollowing">
                <img 
                src="assets/person/1.jpeg"
                alt="" 
                className='rightbarFollowingImg'
                />
                <span className="rightbarFollowingName">Misaki</span>
              </div>
              <div className="rightbarFollowing">
                <img 
                src="assets/person/2.jpeg"
                alt="" 
                className='rightbarFollowingImg'
                />
                <span className="rightbarFollowingName">ブチャラティ</span>
              </div>
              <div className="rightbarFollowing">
                <img 
                src="assets/person/3.jpeg"
                alt="" 
                className='rightbarFollowingImg'
                />
                <span className="rightbarFollowingName">グイード・ミスタ</span>
              </div>
              <div className="rightbarFollowing">
                <img 
                src="assets/person/4.jpeg"
                alt="" 
                className='rightbarFollowingImg'
                />
                <span className="rightbarFollowingName">空条承太郎</span>
              </div>
              <div className="rightbarFollowing">
                <img 
                src="assets/person/5.jpeg"
                alt="" 
                className='rightbarFollowingImg'
                />
                <span className="rightbarFollowingName">ポルナレフ</span>
              </div>
            </div>
          </div>
        </>
      )
    }

      return (
        <div className='rightbar'>
          <div className="rightbarWrapper">
            {profile ? <ProfileRightbar /> : <HomeRightbar />}
          </div>
        </div>
      )
};
