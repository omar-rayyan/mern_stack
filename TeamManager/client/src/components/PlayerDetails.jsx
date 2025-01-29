import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import deletePlayer from './deletePlayer';
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
    UserOutlined,
    TrophyOutlined,
    CalendarOutlined
} from '@ant-design/icons';

const { Title } = Typography;

const PlayerDetails = () => {
    const [player, setPlayer] = useState({name: "Loading...", preferredPosition: "Loading..."});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/players/' + id)
            .then((res) => {
                setPlayer(res.data.Player);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleDelete = (playerId) => {
        deletePlayer(playerId)
        navigate('/players/list');
    };

    const getPositionColor = (position) => {
        const colors = {
            'Goalkeeper': 'gold',
            'Defender': 'blue',
            'Midfielder': 'green',
            'Forward': 'red',
            'Striker': 'volcano',
            'Winger': 'purple'
        };
        return colors[position] || 'default';
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
                        <UserOutlined style={{ fontSize: '24px' }} />
                        <Title level={2} style={{ margin: 0 }}>Player Details</Title>
                    </div>
                }
            >
                <Descriptions bordered column={1} size="large">
                    <Descriptions.Item 
                        label={
                            <Space>
                                <UserOutlined />
                                Name
                            </Space>
                        }
                    >
                        <strong>{player.name}</strong>
                    </Descriptions.Item>
                    
                    <Descriptions.Item 
                        label={
                            <Space>
                                <TrophyOutlined />
                                Preferred Position
                            </Space>
                        }
                    >
                        <Tag color={getPositionColor(player.preferredPosition)} style={{ fontSize: '14px', padding: '4px 8px' }}>
                            {player.preferredPosition}
                        </Tag>
                    </Descriptions.Item>

                    <Descriptions.Item 
                        label={
                            <Space>
                                <CalendarOutlined />
                                Added On
                            </Space>
                        }
                    >
                        {new Date(player.createdAt).toLocaleDateString('en-US', {
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
                            onClick={() => navigate('/players/list')}
                        >
                            Back to List
                        </Button>
                        <Link to={`/players/${id}/update`}>
                            <Button 
                                type="primary" 
                                icon={<EditOutlined />}
                            >
                                Edit Player
                            </Button>
                        </Link>
                        <Popconfirm
                            title="Delete Player"
                            description="Are you sure you want to delete this player?"
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

export default PlayerDetails;