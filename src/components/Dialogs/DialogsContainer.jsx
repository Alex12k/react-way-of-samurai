import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { sendMessageCreater, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


 
const DialogsContainer = () => {
   
    return <StoreContext.Consumer> 
        {
            (store) => {

                let state = store.getState().dialogsPage;

                let onSendMessageClick  =  () => {
                    store.dispatch(sendMessageCreater());
                } 
            
                let onNewMessageChange  =  (body) => {       
                    store.dispatch(updateNewMessageBodyCreator(body));
                }   

                return <Dialogs 
                    updateNewMessageBody={onNewMessageChange} 
                    onSendMessage={onSendMessageClick}                
                    dialogsPage={state}
                />}
            
        }

        </StoreContext.Consumer>    
        
    
}

export default DialogsContainer;
