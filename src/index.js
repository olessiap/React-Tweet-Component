import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
    return(
        <div className='tweet'>
            <Avatar/> 
            <div className='content'>
                <NameWithHandle/><Time/>
                <Message/> 
                <div className='buttons'>
                    <ReplyButton />
                    <RetweetButton />
                    <LikeButton />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    );
}

function Avatar() {
    return(
        <img
        src="https://www.gravatar.com/avatar/9ab982de687898f228e8cbe183f3a362"
        className='avatar'
        alt='avatar'/>
    );
}

function NameWithHandle() {
    return(
        <span className='name-with-handle'>
            <span className="name">Your Name</span>
            <span className="handle">@yourhandle</span>
        </span>
    );
}

function Message() {
    return(
        <div className="message">
            Message body goes here
        </div>
    )
} 

const Time = () => (
    <span className="time"> 3h ago</span>
);

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

const RetweetButton = () => (
    <i class="fa fa-retweet retweet-button"></i>
);

const LikeButton = () => (
    <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(
    <Tweet/>,
    document.querySelector('#root')
);