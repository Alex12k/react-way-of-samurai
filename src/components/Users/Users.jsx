
import styles from './users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png';
import React from 'react';



class Users extends React.Component{

	
		componentDidMount(){			

			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
					.then(response=>{			
						this.props.setUsers(response.data.items);	
						this.props.setTotalUsersCount(response.data.totalCount);	
				});	
			}
		

		onPageChanged = (pageNumber) => {		
				this.props.setCurrentPage(pageNumber);

				axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
				.then(response=>{			
					this.props.setUsers(response.data.items);	
				});	

		}


		render(){

			let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
			
			let pages = [];
			for (let i = 1; i <= pagesCount; i++){
				pages.push(i);
			}
		

			return	<div>

				{ console.log(pages) }

				<div className ={styles.pagination}>
					{	pages.map(p=>{
							return <span key={p} className={this.props.currentPage === p ? styles.selectedPage : ''}						
								onClick={(e)=>{	this.onPageChanged(p);	}}>{p}</span>
					})}				
				</div>
				{
				this.props.users.map(u => <div key={u.id}>
					
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