
import styles from './users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png';
import React from 'react';



class Users extends React.Component{
	
		constructor(props){			
			super(props);

			// Но на самом деле ajax запросы делаются не в конструкторе
			axios.get("https://social-network.samuraijs.com/api/1.0/users")
					.then(response=>{			
								this.props.setUsers(response.data.items);	
						});	
		}

		

		render(){
			return	<div>
	
				{
				this.props.users.map(u=>	<div key={u.id}>
					
					<div>

						<div>
							<img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
						</div>

						<div>
							{
							 u.followed ? 
									<button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow </button> : 
									<button onClick={()=>{this.props.follow(u.id)}}>	Follow 	</button>	
							}
						</div>	

					</div>
					
					<div>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						
						<span>
							<div>{'u.location.country'}</div>
							<div>{'u.location.city'}</div>
						</span>	
					</div>				
				
					</div>)
				}
			</div>
		}
}



export default Users;