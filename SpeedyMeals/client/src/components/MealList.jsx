import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import deleteMeal from './deleteMeal';
import { Button, Space, Spin, Table, Card, Typography, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';

const { Title } = Typography;

const MealList = () => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/meals')
            .then((res) => {
                setMeals(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [meals]);

    const handleDelete = (mealId) => {
        deleteMeal(mealId);
        refreshMealsList();
    };

    const refreshMealsList = () => {
        navigate("/meals/list");
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <Link 
                    to={`/meals/${record._id}`}
                    className="text-blue-600 hover:text-blue-800"
                >
                    {text}
                </Link>
            ),
        },
        {
            title: 'Prep Time',
            dataIndex: 'totalMinutes',
            key: 'totalMinutes',
        },
        {
            title: 'Actions',
            key: 'actions',
            align: 'right',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/meals/${record._id}`}>
                        <Button 
                            icon={<EyeOutlined />} 
                            type="text"
                        />
                    </Link>
                    <Link to={`/meals/${record._id}/upd                                icon={<SaveOutlined />}ate`}>
                        <Button 
                            icon={<EditOutlined />}
                            type="text"
                        />
                    </Link>
                    <Popconfirm
                        title="Delete meal"
                        description="Are you sure you want to delete this meal?"
                        onConfirm={() => handleDelete(record._id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button 
                            icon={<DeleteOutlined />} 
                            type="text"
                            danger
                        />
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <div style={{ padding: '24px' }}>
            <Card>
                <Title level={2} style={{ marginBottom: '24px' }}>
                    Meals List
                </Title>
                
                <Table
                    columns={columns}
                    dataSource={meals}
                    loading={{
                        indicator: <Spin />,
                        spinning: loading
                    }}
                    rowKey="_id"
                    pagination={{
                        pageSize: 10,
                        showSizeChanger: true,
                        showTotal: (total) => `Total ${total} meals`
                    }}
                />
            </Card>
        </div>
    );
};

export default MealList;