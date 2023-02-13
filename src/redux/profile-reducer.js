
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState =	{
		posts: [
			 { id: 1, message: 'Hi, how are you?', likeCount: 12 },
			 { id: 2, message: 'It\'s my first post', likeCount: 11 },
			 { id: 3, message: 'BlaBla', likeCount: 3 },
			 { id: 4, message: 'Da da', likeCount: 174 },
		],
		newPostText: 'it-kamasutra.com'
}

const profileReducer = (state = initialState, action) => {

	// Назначим уникальный ID поста (Мое решение, присвоения уникального ID)
	let post_id = state.posts.length+1;

	switch(action.type){			
			case ADD_POST:	{				
				let newPost = {
					id: post_id,
					message: state.newPostText,
					likeCount: 0
			 	 };
				 
				let stateCopy = {...state};
			  	stateCopy.posts = [...state.posts];
				stateCopy.posts.push(newPost);
			  	stateCopy.newPostText = '';
				return stateCopy;
			}		
			case UPDATE_NEW_POST_TEXT:	{
			
				let stateCopy = {...state};
				stateCopy.newPostText = action.newText;
				return stateCopy;
			}
			default:
				return state;
	
	}
}


// Стрелочная функция возвращает объект
export const addPostActionCreater = () => ({type: ADD_POST})

// Стрелочная функция возвращает объект
export const updateNewPostTextActionCreater = (text) => ({   
        type: UPDATE_NEW_POST_TEXT,
        newText: text  
})


export default profileReducer;