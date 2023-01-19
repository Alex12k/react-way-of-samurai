
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {

		dialogs: [
			 { id: 1, name: 'Dimych' },
			 { id: 2, name: 'Andrey' },
			 { id: 3, name: 'Sveta' },
			 { id: 4, name: 'Sasha' },
			 { id: 5, name: 'Viktor' },
			 { id: 6, name: 'Valera' }
		],

		messages: [
			 { id: 1, message: 'Hi' },
			 { id: 2, message: 'How is your it-kamasutra?' },
			 { id: 3, message: 'Yo' },
			 { id: 4, message: 'Yo' },
			 { id: 5, message: 'Yo' }
		],

		newMessageBody: '',
  
}


const dialogsReducer = (state = initialState, action) => {

	
	switch(action.type){
			case UPDATE_NEW_MESSAGE_BODY:
				state.newMessageBody  =   action.body;
				return state;
			
			case SEND_MESSAGE:
				// Назначим уникальный ID поста (Мое решение, присвоения уникального ID)
				let message_id = state.messages.length+1;
				
				let body = state.newMessageBody;
				state.newMessageBody = '';
				state.messages.push({ id: message_id, message: body });	
			
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