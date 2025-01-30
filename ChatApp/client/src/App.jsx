import Chat from './components/Chat.jsx';
import GetStarted from './components/GetStarted.jsx';
import { useState } from 'react';
import { Layout, Typography } from "antd"
import './components/styles.css';

const { Header, Content } = Layout;
const { Text } = Typography;

function App() {
  const [name, setName] = useState("");

  const setChatName = ( newName ) => {
    setName( newName );
  }

  return (
    <div className="App">
      <Layout className="layout">
            <Header>
                <Text style={{ color: 'white', fontSize: '24px',  height: 200 }}>Chat System</Text>
            </Header>
            <Content style={{ padding: '20px' }}>
                {name ? (<Chat name={name}/>) : (<GetStarted onNameSet={ setChatName }/>)}
            </Content>
      </Layout>
    </div>
  )
}

export default App;