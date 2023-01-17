
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


const dialogsReducer = (state, action) => {

	switch(action.type){
			case UPDATE_NEW_MESSAGE_BODY:
				state.newMessageBody  =   action.body;
				return state;
			
			case SEND_MESSAGE:
				let body = state.newMessageBody;
				state.newMessageBody = '';
				state.messages.push({ id: 6, message: body });	
			
			default:
				return state;

	}
}


// Стрелочная функция возвращает объект
export const sendMessageCreater = () => ({type: SEND_MESSAGE})

// Стрелочная функция возвращает объект
export const updateNewMessageBodyCreator = (body) => ({   
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body 
})

export default dialogsReducer;