import React from 'react';
import {addPostActionCreater, updateNewPostTextActionCreater} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



let mapStateToProps = (state) =>{
	return {
		 posts: state.profilePage.posts,
		 newPosttext: state.profilePage.newPosttext
	}
}


let mapDispatchToProps = (dispatch) => {
	return{
		updateNewPostText: (text) => {       
			   let action  = updateNewPostTextActionCreater(text);         
			   dispatch(action);
			},
			addPost:() => {
				    dispatch( addPostActionCreater()  );
				}										
		}
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;