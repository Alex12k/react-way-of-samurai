
const FOLLOW				= 'FOLLWO';
const UNFOLLOW				= 'UNFOLLOW';
const SET_USERS			= 'SET_USERS';
const SET_CURRENT_PAGE 	= 'SET_CURRENT_PAGE';

// Изначально Reducer пустой
let initialState =	{
		users: [],
		pageSize: 5,
		totalUsersCount: 21,
		currentPage: 1,
}

const usersReducer = (state = initialState, action) => {

	switch(action.type){			

			case FOLLOW:				
				console.log('Вызван follow')
				return{	
					...state, 
					users: state.users.map(	u	=>	{
						if(u.id	===	action.userId){
							return {...u, followed: true}
						}
						return u;
					})
				}

			case UNFOLLOW:
				console.log('Вызван unfollow');
				return{	
					...state, 
					users: state.users.map(	u	=>	{
						if(u.id	===	action.userId){
							return {...u, followed: false}
						}
						return u;
					})
				}
			
			case SET_USERS: return	{	
				...state, users: [...state.users, ...action.users	]
				}
				
			case SET_CURRENT_PAGE: 		
				return {...state, currentPage: action.currentPage}
		

			default:
				return state;
	
	}
}


// Стрелочная функция возвращает объект
// AC - сокращение  ActionCreater

export const followAC 			= (userId) 			=>	({type: FOLLOW,				userId		})
export const unfollowAC			= (userId)			=>	({type: UNFOLLOW,				userId		})
export const setUsersAC			= (users)			=>	({type: SET_USERS,			users			})

export const setCurrentPageAC	= (currentPage)	=>	(
				console.log('из AC:', currentPage),
				{
					type: SET_CURRENT_PAGE,	
					currentPage
				}
			)


export default usersReducer;