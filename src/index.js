import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
import PropTypes from 'prop-types';

function Tweet({tweet}) {
    return(
        <div className='tweet'>
            <Avatar hash={tweet.gravatar}/> 
            <div className='content'>
                <NameWithHandle author={tweet.author}/>
                <Time time={tweet.timestamp}/>
                <Message message={tweet.message}/> 
                <div className='buttons'>
                    <ReplyButton />
                    <RetweetButton count={tweet.retweets} />
                    <LikeButton count={tweet.likes}/>
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    );
}

function Avatar({hash}) {
    var url=`https://images.pexels.com/photos/${hash}`
    return(
        <img
        src={url}
        className='avatar'
        alt='avatar'/>
    );
}

Avatar.propTypes = {
    hash: PropTypes.string
};

function NameWithHandle({author}) {
    const {name, handle} = author
    return(
        <span className='name-with-handle'>
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    );
}
NameWithHandle.propTypes = {
    author:PropTypes.shape({
        name:PropTypes.string.isRequired,
        handle:PropTypes.string.isRequired
    }).isRequired
}

function Message({message}) {
    return(
        <div className="message">
           {message}
        </div>
    )
} 

Message.propTypes = {
    message: PropTypes.string.isRequired
};

const Time = ({time}) => {
    var timeString = moment(time).fromNow();
    return(
        <span className="time">{timeString}</span>
    )
};

Time.propTypes = {
    time:PropTypes.string.isRequired
};

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

const RetweetButton = ({count}) => {
    return(
    <span className="retweet-button">
        <i className="fa fa-retweet"/>
        {count > 0 && 
            <span className="retweet-count">
            {count}
        </span>}
    </span>
    );
};

RetweetButton.propTypes = {
    count: PropTypes.number
};

const LikeButton = ({count}) => {
    return(
    <span className="like-button">
        <i className="fa fa-heart"/>
        {count > 0 && 
        <span className="like-count">
            {count}
        </span>}
    </span>
    );
};

LikeButton.propTypes = {
    count:PropTypes.number
};

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);

const testTweet = {
    gravatar:'1571724/pexels-photo-1571724.jpeg?auto=compress&cs=tinysrgb&h=350',
    message:"robots dance on the tamborine",
    author: {
        name: 'Oli',
        handle: "oleeeeeeessia"
    },
    timestamp: 'Wed Nov 21 2018 14:29:44 GMT-0300',
    retweets: 3,
    likes:234
}

ReactDOM.render(
    <Tweet tweet={testTweet}/>,
    document.querySelector('#root')
);