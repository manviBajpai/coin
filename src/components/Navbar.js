import React from "react";
import {Link} from 'react-router-dom';
import { HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined } from "@ant-design/icons";
import {Button,Typography,Avatar,Menu} from 'antd';

import cryptoImage from '../images/cryptocurrency.png';
function Navbar(){
return(
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={cryptoImage} size="large"/>
            <Typography.Title level={2} className="logo">
                <Link to="/">CryptoShastra</Link>

            </Typography.Title>
        </div>
    <Menu theme = "dark">
    <Menu.Item icon={<HomeOutlined/>}>
        <Link to="/">
            Home
        </Link>
    </Menu.Item>
    <Menu.Item icon={<FundOutlined/>}>
        <Link to="/Cryptocurrency">
            Cryptocurrencies
        </Link>
    </Menu.Item>
    <Menu.Item icon={<MoneyCollectOutlined/>}>
        <Link to="/exchanges">
            Exchnages
        </Link>
    </Menu.Item>
    <Menu.Item icon={<BulbOutlined/>}>
        <Link to="/news">
            News
        </Link>
    </Menu.Item>
    
</Menu>
    </div>
);
};
export default Navbar;