import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
//import { sendMessageCreater, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

 
 
const Dialogs = (props) => {
 
    let state = props.dialogsPage;

    let dialogsElements     = state.dialogs.map(     d => <DialogsItem name={d.name} id={d.id} key={d.id}/> );
    let messagesElements    = state.messages.map(    m => <Message message={m.message} key={m.id}/>         );
    let newMessageBody      = state.newMessageBody;
    

    /*  Вопрос как sendMessage попадает в props 
        и почему она называется sendMessage
    */
    let onSendMessageClick  =  () => {
        props.sendMessage();
    } 

    let onNewMessageChange  =  (e) => {
       let body = e.target.value;
       props.updateNewMessageBody(body); 
    } 
    
    

    return (

        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>

                <div>
                    {messagesElements}
                </div>

                <div>
                    <div>
                        <textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter you messege'></textarea></div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>
            </div>


        </div>

    )
}

export default Dialogs;
