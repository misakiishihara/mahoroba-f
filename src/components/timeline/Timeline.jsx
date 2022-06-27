import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import Post from '../post/Post'
import Share from '../share/Share'
import "./Timeline.css"
// import { Posts } from '../../dummyData'
import axios from "axios"
import { AuthContext } from '../../states/AuthContext';


export default function Timeline({ username }) {
  const [posts, setPosts] = useState([]);

  const {user} = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username 
      ? await axios.get(`/posts/profile/${username}`) //プロフィールの場合
      : await axios.get(`/posts/timeline/${user._id}`) //ホーム(タイムライン)の場合
      // console.log(response);
      setPosts(response.data);
    };
    fetchPosts();

  }, [username, user._id]);

  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (  
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  )
}
