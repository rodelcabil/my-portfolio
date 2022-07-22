import React from 'react'
import {Messages} from './message-elements'
import { Avatar } from 'antd'
import {format} from 'timeago.js'
import Delly from '../../images/chatbot_png.png'


const Message = ({own, message, user, mode}) => {
    
    const getInitials = () =>{
        return user?.firstname.charAt(0).toUpperCase() + user?.lastname.charAt(0).toUpperCase();
    }
    const Capitalize = (str) =>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <> 
        {(mode === 1) ? 
            <Messages>
             

                <div className={own ? 'msg own' : 'msg'}>
              
                   <div className='messageTop'> 
                       {user ? (user?.avatar ? <Avatar style={{minWidth: '40px'}} size={40} src={user.avatar}/> : <Avatar size={40} style={{minWidth: '40px', background: '#272F46'}} src={user.avatar}>{getInitials()}</Avatar>) :  <Avatar style={{minWidth: '40px', background: '#272F46'}} size={40}/> }
                        <span className="messageText">{Capitalize(message.text)}</span>
                    </div>
                
                    <span className="time">{format(message.createdAt)}</span>
                </div>

        
            </Messages> 
            :

            <Messages mode={2}>
              

                <div className={own ? 'msg own' : 'msg'}>
                    <div className='messageTop'> 
                        <Avatar  style={{display: own ? 'none' : 'flex', minWidth: '40px', backgroundColor: '#295074', padding: '5px' }} size={40} src={Delly}/>
                        <span className="messageText">{Capitalize(message.text)}</span>
                    </div>
                </div>

        
            </Messages>
        }
        </>
    )
}

export default Message
