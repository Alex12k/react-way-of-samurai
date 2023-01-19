import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
 
            <MyPostsContainer 
                    store={props.store} 
                    //posts={props.profilePage.posts}
                    //newPostText={props.profilePage.newPostText}
                    //dispatch={props.dispatch}
                />

        </div>
    )
}

export default Profile;