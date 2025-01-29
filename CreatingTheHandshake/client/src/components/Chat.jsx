import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Input, Button, Card, Typography, Layout } from "antd";
import './styles.css';

const { Header, Content } = Layout;
const { Text } = Typography;

const socket = io.connect("http://localhost:8000");

const Chat = () => {
    const [message, setMessage] = useState("");
    const [messageReceived, setMessageReceived] = useState("");

    const sendMessage = () => {
        socket.emit("sendMessage", { message: message });
        setMessage("");
    }

    useEffect(() => {
        socket.on("receiveMessage", (data) => {
            setMessageReceived(data.message);
        });
    }, [socket]);

    return (
        <Layout className="layout">
            <Header>
                <Text style={{ color: 'white', fontSize: '24px' }}>Chat System</Text>
            </Header>
            <Content style={{ padding: '20px' }}>
                <Card title="Chat" bordered={false} style={{ width: 400, margin: '0 auto' }}>
                    <Input
                        placeholder="Type a message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onPressEnter={sendMessage}
                        style={{ marginBottom: '10px' }}
                    />
                    <Button type="primary" onClick={sendMessage} block>
                        Send Message
                    </Button>
                    <div style={{ marginTop: '20px' }}>
                        <Text strong>Message:</Text>
                        <Card bordered={false} style={{ marginTop: '10px' }}>
                            {messageReceived}
                        </Card>
                    </div>
                </Card>
            </Content>
        </Layout>
    );
}

export default Chat;