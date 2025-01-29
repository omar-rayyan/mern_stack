import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import deletePlayer from './deletePlayer';
import { Button, Space, Spin, Table, Card, Typography, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';

const { Title } = Typography;

const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then((res) => {
                setPlayers(res.data.Players);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [players]);

    const handleDelete = (playerId) => {
        deletePlayer(playerId);
        refreshPlayersList();
    };

    const refreshPlayersList = () => {
        navigate("/players/list");
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <Link 
                    to={`/players/${record._id}`}
                    className="text-blue-600 hover:text-blue-800"
                >
                    {text}
                </Link>
            ),
        },
        {
            title: 'Preferred Position',
            dataIndex: 'preferredPosition',
            key: 'preferredPosition',
        },
        {
            title: 'Actions',
            key: 'actions',
            align: 'right',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/players/${record._id}`}>
                        <Button 
                            icon={<EyeOutlined />} 
                            type="text"
                        />
                    </Link>
                    <Link to={`/players/${record._id}/update`}>
                        <Button 
                            icon={<EditOutlined />}
                            type="text"
                        />
                    </Link>
                    <Popconfirm
                        title="Delete player"
                        description="Are you sure you want to delete this player?"
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
                    Players List
                </Title>
                
                <Table
                    columns={columns}
                    dataSource={players}
                    loading={{
                        indicator: <Spin />,
                        spinning: loading
                    }}
                    rowKey="_id"
                    pagination={{
                        pageSize: 10,
                        showSizeChanger: true,
                        showTotal: (total) => `Total ${total} players`
                    }}
                />
            </Card>
        </div>
    );
};

export default PlayerList;