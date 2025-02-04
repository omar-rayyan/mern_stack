import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import { useParams, useNavigate } from "react-router-dom";
import { 
    Form, 
    Input, 
    Button, 
    Card, 
    Typography, 
    message 
} from 'antd';
import { 
    SaveOutlined,
    EyeOutlined,
    ArrowLeftOutlined
} from '@ant-design/icons';

const { Title } = Typography;

const initialState = {
    name: "",
    nameError: "",
    preferredPosition: "",
    preferredPositionError: "",
};

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

const MealForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { id } = useParams();
    const [form] = Form.useForm();
    const isSubmitTrigger = !id;
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSubmitTrigger) {
            axios.get(`http://localhost:8000/api/meals/${id}`)
                .then((response) => {
                    const mealData = response.data;
                    dispatch({ type: "SET_FIELD", field: "name", value: mealData.name });
                    dispatch({ type: "SET_FIELD", field: "totalMinutes", value: mealData.totalMinutes });
                    dispatch({ type: "SET_FIELD", field: "directions", value: mealData.directions });
                    dispatch({ type: "SET_FIELD", field: "directions", value: mealData.ingredientOne });
                    dispatch({ type: "SET_FIELD", field: "directions", value: mealData.ingredientTwo });
                    dispatch({ type: "SET_FIELD", field: "directions", value: mealData.ingredientThree });
                    form.setFieldsValue({
                        name: mealData.name,
                        totalMinutes: mealData.totalMinutes,
                        directions: mealData.directions,
                        ingredientOne: mealData.ingredientOne,
                        ingredientTwo: mealData.ingredientTwo,
                        ingredientThree: mealData.ingredientThree,
                    });
                })
                .catch((error) => console.log(error));
        }
    }, [id, isSubmitTrigger]);

    const onFinish = (values) => {
        const url = isSubmitTrigger 
            ? "http://localhost:8000/api/meals/create"
            : `http://localhost:8000/api/meals/update/${id}`;
        
        //const method = isSubmitTrigger ? 'post' : 'patch';
        if (isSubmitTrigger) {
        axios.post(url, values)
            .then(() => {
                message.success(`Meal successfully ${isSubmitTrigger ? 'created' : 'updated'}`);
                navigate("/meals/list");
            })
            .catch(error => {
                message.error('Failed to save meal');
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
        } else {
            axios.patch(url, values)
            .then(() => {
                message.success(`Meal successfully ${isSubmitTrigger ? 'created' : 'updated'}`);
                navigate("/meals/list");
            })
            .catch(error => {
                message.error('Failed to save meal');
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
        }
    };

    return (
        <div style={{ padding: '24px' }}>
            <Card>
                <Title level={2} style={{ marginBottom: '24px' }}>
                    {isSubmitTrigger ? "Add New Meal" : "Edit Meal"}
                </Title>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={state}
                >
                    <Form.Item
                        name="name"
                        label="Meal Name"
                    >
                        <Input 
                            placeholder="Enter meal name"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item
                        name="totalMinutes"
                        label="Total Minutes"
                    >
                        <Input
                            placeholder="Enter total minutes"
                            size="large"
                            type="number"
                        />
                    </Form.Item>
                    
                    <Form.Item
                        name="directions"
                        label="Directions"
                    >
                        <Input 
                            placeholder="Enter directions"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item
                        name="ingredientOne"
                        label="Ingredient One"
                    >
                        <Input 
                            placeholder="Enter ingredient one (Optional)"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item
                        name="ingredientTwo"
                        label="Ingredient Two"
                    >
                        <Input 
                            placeholder="Enter ingredient two (Optional)"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item
                        name="ingredientThree"
                        label="Ingredient Three"
                    >
                        <Input 
                            placeholder="Enter ingredient three (Optional)"
                            size="large"
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
                                {isSubmitTrigger ? 'Create Meal' : 'Update Meal'}
                            </Button>
                            {!isSubmitTrigger? (<Button 
                                onClick={() => navigate(`/meals/${id}`)}
                                icon={<EyeOutlined />}
                                size="large"
                            >
                                View Meal Details
                            </Button>) : <></>}
                            <Button 
                                onClick={() => navigate("/meals/list")}
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

export default MealForm;