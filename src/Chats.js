import React from 'react';
import Chat from './Chat';
import './Chats.css';

const Chats = () => {
    return (
        <div className='chats'>
           <Chat 
            name='Sarah'
            message='Hey! how are you 😍 '
            timestamp='35 minutes ago'
            profilePic='https://4.bp.blogspot.com/-yMuOcmwVdFI/UCGdKtMtYaI/AAAAAAAABCc/O-VzDg-DBrc/s1600/Sarah-Jessica-Parker-5.JPG'
           /> 
           <Chat 
            name='Ellen'
            message='Whats up 💘 ?'
            timestamp='55 minutes ago'
            profilePic='https://farm8.staticflickr.com/7136/7569839224_9003d67629_b.jpg'
           /> 
           <Chat 
            name='Sandra'
            message='Olá!'
            timestamp='3 days ago'
            profilePic='https://4.bp.blogspot.com/-MV5o4xO-FtA/UBm9B75g04I/AAAAAAAAHok/RUk_ipwVQJM/s1600/sandra-bullock-21890.jpg'
           /> 
           <Chat 
            name='Natasha'
            message='Hi 😍 '
            timestamp='1 week ago'
            profilePic='https://4.bp.blogspot.com/-GuXFqZUzFNM/Tm2zOU4p1LI/AAAAAAAADAE/8cnPwTE7dD8/s1600/skan382-natasha-yi.jpg'
           /> 
        </div>
    )
}

export default Chats
