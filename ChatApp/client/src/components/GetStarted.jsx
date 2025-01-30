import React, { useState } from "react";
import { Input, Button, Card, Typography } from "antd";
import './styles.css';

const { Text } = Typography;

const GetStarted = (props) => {
    const [name, setName] = useState("");

    const updateName = () => {
        props.onNameSet(name);
    }

    return (
        <Card title="Get started right now!" bordered={false} style={{ width: 400, margin: '0 auto' }}>
            <Text>I want to start chatting with the name...</Text>
            <br/><br/>
            <Input
                placeholder="My name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                onPressEnter={updateName}
                autoFocus
                style={{ marginBottom: '10px' }}
            />
            <Button type="primary" onClick={updateName} block>
                Start Chatting
            </Button>
        </Card>
    );
}

export default GetStarted;