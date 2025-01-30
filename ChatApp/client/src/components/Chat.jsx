import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { Input, Button, Card, Typography } from "antd";
import './styles.css';

const { Text } = Typography;

const socket = io.connect("http://localhost:8000");

const Chat = (props) => {
    const [message, setMessage] = useState("");
    const [messagesReceived, setMessagesReceived] = useState([]);
    const {name} = props;
    const messageContainerRef = useRef(null);

    const sendMessage = () => {
        if (message.trim().length > 0) {
            socket.emit("sendMessage", { user: name, message: message });
            setMessagesReceived([...messagesReceived, {user: name, message:message}]);
            setMessage('');
        }
    };

    useEffect(() => {
        socket.on("receiveMessage", (data) => {
            setMessagesReceived((prevMessages) => [...prevMessages, data]);
        })

        // Cleanup to avoid duplicate listeners
        return () => {
            socket.off("receiveMessage");
        };
    }, [])

    useEffect(() => {
        if (messageContainerRef.current) {
          messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
      }, [messagesReceived]);

    return (
        <Card title="Messages" bordered={false} style={{ width: 600, margin: '0 auto' }}>
            <div ref={messageContainerRef} style={{ height: '400px', overflowY: 'auto', marginBottom: '16px', padding: '8px' }}>
                {messagesReceived.map((msg, index) => (
                    <div key={index} style={{ marginBottom: '8px' }}>
                        <strong>{msg.user}: </strong>{msg.message}
                    </div>
                ))}
            </div>
            <Input
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onPressEnter={sendMessage}
                style={{ marginBottom: '10px' }}
                autoFocus
            />
            <Button type="primary" onClick={sendMessage} block>
                Send Message
            </Button>
        </Card>
    );
}

export default Chat;