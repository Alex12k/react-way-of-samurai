import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => {

    let newPostElement = React.createRef();

    let messageOnChange = () =>{
        let text = newPostElement.current.value;
        //console.log(text);
    }

    return (
         <div className={s.dialog}>
             {props.message}
         </div>
    )

}


export default Message;
