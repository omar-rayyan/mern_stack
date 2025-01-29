import PlayerForm from './components/PlayerForm.jsx';
import PlayerList from './components/PlayerList.jsx';
import PlayerDetails from "./components/PlayerDetails.jsx";
import NotFound from "./components/NotFound.jsx";
import { Routes, Route, Outlet, Link, useLocation } from 'react-router-dom';
import { Layout, Menu, Typography, theme, Button } from 'antd';
import { 
    UserOutlined, 
    PlusCircleOutlined,
    UnorderedListOutlined,
    HomeOutlined 
} from '@ant-design/icons';
import './components/styles.css';

const { Header, Content } = Layout;
const { Title } = Typography;

const AppLayout = () => {
    const location = useLocation();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const getSelectedKey = () => {
        if (location.pathname.includes('/list')) return 'list';
        if (location.pathname.includes('/addPlayer')) return 'add';
        return '';
    };

    return (
        <div style={{ padding: '16px 16px 0' }}>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                    marginBottom: '16px',
                    padding: '0 16px',
                }}
            >
                <Link to="/players/list" style={{ marginRight: '24px' }}>
                    <Title level={3} style={{ margin: '0', color: '#1890ff' }}>
                        <HomeOutlined /> Team Manager
                    </Title>
                </Link>
                
                <Menu
                    mode="horizontal"
                    selectedKeys={[getSelectedKey()]}
                    style={{ 
                        flex: 1, 
                        minWidth: 0,
                        justifyContent: 'flex-end',
                        border: 'none'
                    }}
                >
                    <Menu.Item key="list" icon={<UnorderedListOutlined />}>
                        <Link to="/players/list">Players List</Link>
                    </Menu.Item>
                    <Menu.Item key="add" icon={<PlusCircleOutlined />}>
                        <Link to="/players/addPlayer">Add Player</Link>
                    </Menu.Item>
                </Menu>
            </Header>

            <Content
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 'calc(100vh - 152px)',
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Outlet />
            </Content>
        </div>
    );
};

function App() {
  return (
      <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
          <Routes>
              <Route path="/players" element={<AppLayout />}>
                  <Route path="list" element={<PlayerList />} />
                  <Route path="addPlayer" element={<PlayerForm />} />
                  <Route path=":id" element={<PlayerDetails />} />
                  <Route path=":id/update" element={<PlayerForm />} />
              </Route>
              <Route path="*" element={<NotFound />} />
          </Routes>
      </Layout>
  );
}

export default App;