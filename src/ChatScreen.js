import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

const ChatScreen = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Natasha',
            image: 'https://4.bp.blogspot.com/-GuXFqZUzFNM/Tm2zOU4p1LI/AAAAAAAADAE/8cnPwTE7dD8/s1600/skan382-natasha-yi.jpg',
            message: 'Whats up <3'
        },
        {
            name: 'Natasha',
            image: 'https://4.bp.blogspot.com/-GuXFqZUzFNM/Tm2zOU4p1LI/AAAAAAAADAE/8cnPwTE7dD8/s1600/skan382-natasha-yi.jpg',
            message: 'How is it going?'
        },
        {
            message: 'Hi! how are you?'
        },
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput('');
    }


    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>YOU MATCHED WITH NATASHA ON 14/08/20</p>
            {messages.map(message => (
                message.name ?
                <div className='chatScreen__message'>
                    <Avatar 
                        className='chatScreen__image'
            src={message.image} >{message.name}</Avatar>
                    <p className='chatScreen__text'>{message.message}</p>
                </div> :
                <div className='chatScreen__message'>
                <p className='chatScreen__myText'>{message.message}</p>
            </div>
            ))}
            
                <form className='chatScreen__input'>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className='chatScreen__inputField' 
                        type='text' 
                        placeholder='Type a message...' />
                    <button onClick={handleSend} type='submit' className='chatScreen__inputButton'>SEND</button>
                </form>
            
        </div>
    )
}


export default ChatScreen
