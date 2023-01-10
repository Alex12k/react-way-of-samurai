import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (

        <div className={s.item}>
            <img alt="avatar" src='https://img1.goodfon.ru/original/320x240/6/4d/avatar-neytiri-zoe-saldana-7414.jpg'/>
            {props.message}
            <div>   <span>like: {props.likesCount}</span>   </div>
        </div>
    )

}

export default Post;

