import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import { useParams, useNavigate, Link } from "react-router-dom";
import { 
    Form, 
    Input, 
    Button, 
    Card, 
    Typography, 
    Select,
    message 
} from 'antd';
import { 
    UserOutlined, 
    TrophyOutlined,
    SaveOutlined,
    ArrowLeftOutlined
} from '@ant-design/icons';

const { Title } = Typography;

const initialState = {
    name: "",
    nameError: "",
    preferredPosition: "",
    preferredPositionError: "",
};

const positions = [
    'Goalkeeper',
    'Defender',
    'Midfielder',
    'Forward',
    'Striker',
    'Winger',
    'Center Back',
    'Full Back',
    'Defensive Midfielder',
    'Attacking Midfielder'
].map(pos => ({ label: pos, value: pos }));

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FIELD":
            return {
                ...state,
                [action.field]: action.value,
                [`${action.field}Error`]: action.error || "",
            };
        case "RESET":
            return initialState;
        default:
            return state;
    }
};

const PlayerForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { id } = useParams();
    const [form] = Form.useForm();
    const isSubmitTrigger = !id;
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSubmitTrigger) {
            axios.get(`http://localhost:8000/api/players/${id}`)
                .then((response) => {
                    const playerData = response.data.Player;
                    dispatch({ type: "SET_FIELD", field: "name", value: playerData.name });
                    dispatch({ type: "SET_FIELD", field: "preferredPosition", value: playerData.preferredPosition });
                    form.setFieldsValue({
                        name: playerData.name,
                        preferredPosition: playerData.preferredPosition
                    });
                })
                .catch((error) => console.log(error));
        }
    }, [id, isSubmitTrigger]);

    const onFinish = (values) => {
        const url = isSubmitTrigger 
            ? "http://localhost:8000/api/players/create"
            : `http://localhost:8000/api/players/update/${id}`;
        
        const method = isSubmitTrigger ? 'POST' : 'PATCH';

        fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then(() => {
                message.success(`Player successfully ${isSubmitTrigger ? 'created' : 'updated'}`);
                navigate("/players/list");
            })
            .catch(error => {
                message.error('Failed to save player');
                const errorResponse = error.response?.data?.errors;
                if (errorResponse) {
                    Object.keys(errorResponse).forEach(key => {
                        form.setFields([{
                            name: key,
                            errors: [errorResponse[key].message],
                        }]);
                    });
                }
            });
    };

    return (
        <div style={{ padding: '24px' }}>
            <Card>
                <Title level={2} style={{ marginBottom: '24px' }}>
                    {isSubmitTrigger ? "Add New Player" : "Edit Player"}
                </Title>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={state}
                >
                    <Form.Item
                        name="name"
                        label="Player Name"
                        rules={[
                            { required: true, message: 'Please enter the player name' },
                            { min: 3, message: 'Name must be at least 3 characters' }
                        ]}
                    >
                        <Input 
                            prefix={<UserOutlined className="site-form-item-icon" />} 
                            placeholder="Enter player name"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item
                        name="preferredPosition"
                        label="Preferred Position"
                        rules={[
                            { required: true, message: 'Please select a position' },
                        ]}
                    >
                        <Select
                            showSearch
                            placeholder="Select position"
                            options={positions}
                            size="large"
                            prefix={<TrophyOutlined />}
                        />
                    </Form.Item>

                    <Form.Item>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                            <Button 
                                type="primary" 
                                htmlType="submit"
                                icon={<SaveOutlined />}
                                size="large"
                            >
                                {isSubmitTrigger ? 'Create Player' : 'Update Player'}
                            </Button>
                            <Button 
                                onClick={() => navigate("/players/list")}
                                icon={<ArrowLeftOutlined />}
                                size="large"
                            >
                                Back to List
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default PlayerForm;