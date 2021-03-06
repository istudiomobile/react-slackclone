import React, { Fragment } from 'react';
import { Segment, Comment } from "semantic-ui-react";
import firebase from '../../firebase';
import soundfile from '../../assets/filling-your-inbox.mp3';

import MessagesHeader from './MessagesHeader';
import MessageForm from './MessageForm';
import Message from './Message';


class Messages extends React.Component {

    state = {
        messagesRef: firebase.database().ref('messages'),
        messages: [],
        messagesLoading: true,
        channel: this.props.currentChannel,
        user: this.props.currentUser
    }

    componentDidMount() {
        const { channel, user} = this.state;

        if(channel && user) {
            this.addListeners(channel.id);
        }

        this.audio = new Audio(soundfile);

    }

    addListeners = channelId => {
        this.addMessageListener(channelId);
    }



    addMessageListener = channelId => {
        let loadedMessages = [];
        this.state.messagesRef.child(channelId).on('child_added', snap => {
            loadedMessages.push(snap.val());
            this.setState({
                messages: loadedMessages,
                messagesLoading: false
            });
            this.audio.play();
        });
    }

    displayMessages = messages => (
        messages.length > 0 && messages.map(message => (
            <Message
                key={message.timestamp}
                message={message}
                user={this.state.user}
            />
        ))
    )

    render() {

        const { messagesRef, messages, channel, user } = this.state;

        return(
            <Fragment>
                <MessagesHeader />
                <Segment>
                    <Comment.Group className="messages">
                        { this.displayMessages(messages) }
                    </Comment.Group>
                </Segment>
                <MessageForm
                    messagesRef={ messagesRef }
                    currentChannel={channel}
                    currentUser={user}
                />
            </Fragment>
        )
    }
}

export default Messages;