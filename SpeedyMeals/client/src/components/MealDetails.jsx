import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import deleteMeal from './deleteMeal';
import './styles.css';
import { 
    Card, 
    Descriptions, 
    Button, 
    Space, 
    Spin, 
    Typography,
    Divider,
    Tag,
    Popconfirm,
    message 
} from 'antd';
import { 
    EditOutlined, 
    DeleteOutlined, 
    ArrowLeftOutlined,
    CalendarOutlined
} from '@ant-design/icons';

const { Title } = Typography;

const MealDetails = () => {
    const [meal, setMeal] = useState({name: "Loading...", totalMinutes: "Loading...", directions: "Loading...", ingredientOne: "Loading...", ingredientTwo: "Loading...", ingredientThree: "Loading..."});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/meals/' + id)
            .then((res) => {
                setMeal(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleDelete = (mealId) => {
        deletePlayer(mealId)
        navigate('/meals/list');
    };

    if (loading) {
        return (
            <div style={{ 
                padding: '50px', 
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh'
            }}>
                <Spin size="large" />
            </div>
        );
    }

    return (
        <div style={{ padding: '24px' }}>
            <Card
                title={
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Title level={2} style={{ margin: 0 }}>{meal.name}</Title>
                    </div>
                }
            >
                <Descriptions bordered column={1} size="large">
                    <Descriptions.Item 
                        label={
                            <Space>
                                Name
                            </Space>
                        }
                    >
                        <strong>{meal.name}</strong>
                    </Descriptions.Item>

                    <Descriptions.Item 
                        label={
                            <Space>
                                Total Minutes
                            </Space>
                        }
                    >
                        <strong>{meal.totalMinutes}</strong>
                    </Descriptions.Item>

                    <Descriptions.Item 
                        label={
                            <Space>
                                Directions
                            </Space>
                        }
                    >
                        <strong>{meal.directions}</strong>
                    </Descriptions.Item>

                    {meal.ingredientOne? (<Descriptions.Item 
                        label={
                            <Space>
                                Ingredient One
                            </Space>
                        }
                    >
                        <strong>{meal.ingredientOne}</strong>
                    </Descriptions.Item>) : <></>}

                    {meal.ingredientTwo? (<Descriptions.Item 
                        label={
                            <Space>
                                Ingredient Two
                            </Space>
                        }
                    >
                        <strong>{meal.ingredientTwo}</strong>
                    </Descriptions.Item>) : <></>}

                    {meal.ingredientThree? (<Descriptions.Item 
                        label={
                            <Space>
                                Ingredient Three
                            </Space>
                        }
                    >
                        <strong>{meal.ingredientThree}</strong>
                    </Descriptions.Item>) : <></>}
                    

                    <Descriptions.Item 
                        label={
                            <Space>
                                <CalendarOutlined />
                                Added On
                            </Space>
                        }
                    >
                        {new Date(meal.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </Descriptions.Item>
                </Descriptions>

                <Divider />

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                <Space>
                        <Button 
                            icon={<ArrowLeftOutlined />}
                            onClick={() => navigate('/meals/list')}
                        >
                            Back to List
                        </Button>
                        <Link to={`/meals/${id}/update`}>
                            <Button 
                                type="primary" 
                                icon={<EditOutlined />}
                            >
                                Edit Meal
                            </Button>
                        </Link>
                        <Popconfirm
                            title="Delete Meal"
                            description="Are you sure you want to delete this meal?"
                            onConfirm={() => handleDelete(id)}
                            okText="Yes"
                            cancelText="No"
                            okType="danger"
                        >
                            <Button 
                                danger
                                icon={<DeleteOutlined />}
                            >
                                Delete
                            </Button>
                        </Popconfirm>
                    </Space>
                </div>
            </Card>
        </div>
    );
};

export default MealDetails;