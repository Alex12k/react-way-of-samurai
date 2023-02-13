// import React from 'react';
// import s from './Dialogs.module.css';
// import DialogsItem from "./DialogItem/DialogsItem";
// import Message from "./Message/Message";

import { sendMessageCreater, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
 


let mapStateToProps = (state) =>{
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: () => {
            dispatch(sendMessageCreater());
        },

        sendMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
