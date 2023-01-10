const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {

    _state: {
        
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likeCount: 12 },
                { id: 2, message: 'It\'s my first post', likeCount: 11 },
                { id: 3, message: 'BlaBla', likeCount: 3 },
                { id: 4, message: 'Da da', likeCount: 174 },
            ],

            newPostText: 'it-kamasutra.com'

        },

        dialogsPage: {

            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your it-kamasutra?' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' }
            ],

            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' }
            ]

        },

        sidebar: {}
    },  
    
    
    _callSubscriber() {    // Уведомить подписчика
        console.log('State changed');
    },

    getState(){
        return this._state;
    },
    
    subscribe(observer) {
        this._callSubscriber = observer; // Патерн наблюдатель Observer
    },

    dispatch(action){ //{type: 'ADD-POST'}        
        
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
    
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        
        else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }        
    }
          
}


// Стрелочная функция возвращает объект
export const addPostActionCreater = () => ({type: ADD_POST})

// Стрелочная функция возвращает объект
export const updateNewPostTextActionCreater = (text) => ({   
        type: UPDATE_NEW_POST_TEXT,
        newText: text  
})


export default store;
window.store = store;


// Далее будем внедрять очень важный OOP объект Store