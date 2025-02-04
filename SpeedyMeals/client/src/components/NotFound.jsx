import {Link } from 'react-router-dom';
import {EyeOutlined} from '@ant-design/icons';
import { Button} from 'antd';
const NotFound = () => {
    return (
        <div>
            <Link to={'/meals/list'}>
                        <Button 
                            icon={<EyeOutlined/>}
                            type="primary"
                        >Go To Meals List</Button>
                    </Link>
            <h1>404 - Page Not Found</h1>
        </div>
    );
};

export default NotFound;