import { Layout, Menu, Avatar, Typography, Row, Col, Popover, Space, Divider, Image, } from 'antd';
import { ArrowUpOutlined, LogoutOutlined, FileTextOutlined, UserOutlined, BellOutlined, } from '@ant-design/icons';

import { Link, withRouter } from 'react-router-dom'
import auth from '../Authentication/auth';

const Navbar = (props) => {

    return (
        <>
            <h1>Navbar</h1>
        </>
    );
};

export default withRouter(Navbar);