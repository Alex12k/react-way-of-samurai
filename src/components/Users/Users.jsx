import styles from './users.module.css';


let Users = (props) =>{

	// Это временное НЕ правильное решение и о нем будет 
	// говорится в следующем уроке
	
	if(props.users.length === 0){
		props.setUsers(
				[
					{ 	id: 1,	
					photoUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/4079787/pub_605d73daa5f59d2919c8cbcc_605db0c8485bdb6e4a0a4b62/scale_1200',	
					followed: false, 
					fullName: 'Dmitry',	
					status: 'I am a boss', 
					location:{city: 'Minsk', country:'Belarus'} 
	  				},

					{ id: 2,	
					photoUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/4079787/pub_605d73daa5f59d2919c8cbcc_605db0c8485bdb6e4a0a4b62/scale_1200',	
					followed: true,	
					fullName: 'Sasha',	
					status: 'I am a boss too', 
					location:{city: 'Moscow', country:'Russian'} 
		  			},

					{ id: 3,	
					photoUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/4079787/pub_605d73daa5f59d2919c8cbcc_605db0c8485bdb6e4a0a4b62/scale_1200',	
					followed: false, 
					fullName: 'Andrew',	
					status: 'I am a boss too', 
					location:{city: 'Kiev', country:'Ukraine'} 
	  				}
				]
			)	
	}


		return	<div>
			{
				props.users.map(u=>	<div key={u.id}>
					

					<div>

						<span>
							<img src={u.photoUrl} className={styles.userPhoto}/>
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
							<div>{u.fullName}</div>
							<div>{u.status}</div>
						</span>
						
						<span>
							<div>{u.location.country}</div>
							<div>{u.location.city}</div>
						</span>	
					</span>				
				
				</div>)
			}
		</div>
}

export default Users;