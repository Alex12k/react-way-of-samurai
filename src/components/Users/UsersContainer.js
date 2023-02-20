import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";

// Функция которая принимает весь глобальный State всего приложения 
//	и возвращает объект только с теми данными которые нам реально из State нужны
let mapStateToProps =(state)=>{
	return {
		users: state.usersPage.users
	}

}
// Функция служит для того, чтобы передавать дочерней репрезентационной компоненте,
//	через props колбеки, которые репрезентационная компонента сможет вызывать
let mapDispatchToProps =(dispatch)=>{
		return{

			follow:	(userId) =>	{
				dispatch(followAC(userId));
			},
			unfollow:	(userId) =>	{
				dispatch(unfollowAC(userId));
			},
			setUsers: (users)	=>	{
				dispatch(setUsersAC(users));
			}

		}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)