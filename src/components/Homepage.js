import React from "react";
import millify from "millify";
import {Typography,Row,Col,Statistic} from 'antd';
import {Link } from 'react-router-dom';
import { useGetCryptosQuery } from "../Services/cryptoApi";

import {Cryptocurrency,News} from '../components';
const {Title} = Typography;
function Homepage(){
    const { data,isFetching}=useGetCryptosQuery(10);
  
  const globalData=data?.data?.stats;
  if(isFetching)
  return 'Loading....'
    return(
        <>
          {/*<Title level={2} className="heading">Global Crypto Stats</Title>*/}
          
        <Title style = {{ color:'#000000',textAlign:'left',paddingLeft:'280px'}} level = {2} className = "heading">Global crypto stats</Title>
    <Row>
      <Col span ={12}><Statistic title="Total Cryptocurrencies" value={globalData.total} style={{paddingLeft:'280px'}} ></Statistic></Col>
      <Col span ={12}><Statistic title="Total Exchanges" value={millify(globalData.totalExchanges)} style={{paddingLeft:'280px'}} ></Statistic></Col>
      <Col span ={12}><Statistic title="Total Market Cap" value={millify(globalData.totalMarketCap)}  style={{paddingLeft:'280px'}} ></Statistic></Col>
      <Col span ={12}><Statistic title="Total 24h Volume" value={millify(globalData.total24hVolume)}  style={{paddingLeft:'280px'}} ></Statistic></Col>
           <Col span ={12}><Statistic title="Total Markets" value={millify(globalData.totalMarkets)}  style={{paddingLeft:'280px'}} ></Statistic></Col>
    </Row>
    <div className="home-heading-container">
      <Title level={2} style={{paddingLeft:'280px'}} className="home-title">Top 10 crypto in world</Title>
       <Title level={3} className="show-more"><Link to = "/Cryptocurrency">Show More</Link></Title>
    </div>
    <Cryptocurrency simplified/>
        <div className="home-heading-container">
      <Title level={2} style={{paddingLeft:'280px'}} className="home-title">Latest crypto news</Title>
       <Title level={3} className="show-more"><Link to = "/news">Show More</Link></Title>
    </div>
    <News simplified/>
        </>

    );
};
export default Homepage;