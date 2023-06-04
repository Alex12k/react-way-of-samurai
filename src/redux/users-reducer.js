
const FOLLOW				= 'FOLLWO';
const UNFOLLOW				= 'UNFOLLOW';
const SET_USERS			= 'SET_USERS';
const SET_CURRENT_PAGE 	= 'SET_CURRENT_PAGE';
const SET_TOTTAL_USERS_COUNT = 'SET_TOTTAL_USERS_COUNT';

// Изначально Reducer пустой
let initialState =	{
		users: [],
		pageSize: 5,
		totalUsersCount: 0,
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
				...state, users: action.users	
				}
				
			case SET_CURRENT_PAGE: 		
				return {...state, currentPage: action.currentPage}

			case SET_TOTTAL_USERS_COUNT: 		
				return {...state, totalUsersCount: action.count}


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

export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTTAL_USERS_COUNT, count: totalUsersCount })			


export default usersReducer;