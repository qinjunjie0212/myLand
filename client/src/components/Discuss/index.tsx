import React from 'react';
import './index.css';
import moment from 'moment'

interface Comment {
  id: number;
  userpic: string;
  username: string;
  desc: string;
  createdAt: string;
}

type DiscussProps = {
    comment: Comment;
  };

const Discuss: React.FC<DiscussProps>  = ({ comment }) => {
    // console.log(comment);
    
  return (
    <div className='discussCard'>
      <div className='left'>
        <img className='userPic' src={comment.userpic} alt='' />
      </div>
      <div className='right'>
        <span className='userName'>{comment.username}</span>
        <div className='commentBox'>{comment.desc}</div>
        <div className='date'>{moment(comment.createdAt).fromNow()}</div>
      </div>
    </div>
  );
};

export default Discuss;