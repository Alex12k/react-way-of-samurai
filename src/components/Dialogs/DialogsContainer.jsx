import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { sendMessageCreater, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


 
const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick  =  () => {
        props.store.dispatch(sendMessageCreater());
    } 

    let onNewMessageChange  =  (body) => {       
        props.store.dispatch(updateNewMessageBodyCreator(body));
    } 
    
    return <Dialogs 
                updateNewMessageBody={onNewMessageChange} 
                onSendMessage={onSendMessageClick}                
                dialogsPage={state}
            />
    
}

export default DialogsContainer;
