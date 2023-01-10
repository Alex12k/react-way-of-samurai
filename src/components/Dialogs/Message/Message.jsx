import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => {

    let newPostElement = React.createRef();

    let messageOnChange = () =>{
        let text = newPostElement.current.value;
        //console.log(text);
    }

    let addPost = () =>{
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
         <div className={s.dialog}>
             <textarea onChange={messageOnChange} ref={newPostElement}  value={props.newMessageText}></textarea>

             <button onClick={addPost}>Send</button>
             {props.message}
         </div>
    )

}


export default Message;
