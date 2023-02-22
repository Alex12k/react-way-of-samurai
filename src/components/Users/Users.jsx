
import styles from './users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png';


let Users = (props) =>{

	// Это временное НЕ правильное решение и о нем будет 
	// говорится в следующем уроке

	if(props.users.length === 0){

		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{			
			props.setUsers(response.data.items);	
		});
	
	}


		return	<div>
			{
				props.users.map(u=>	<div key={u.id}>
					
					<div>

						<span>
							<img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
						</span>

						<span>
							{
							 u.followed ? 
									<button onClick={()=>{props.unfollow(u.id)}}>Unfollow </button> : 
									<button onClick={()=>{props.follow(u.id)}}>	Follow 	</button>	
							}
						</span>				
					</div>
					
					<span>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						
						<span>
							<div>{'u.location.country'}</div>
							<div>{'u.location.city'}</div>
						</span>	
					</span>				
				
				</div>)
			}
		</div>
}

export default Users;