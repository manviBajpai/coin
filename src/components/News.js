import React, { useState } from "react";
import {Select,Typography,Row,Col,Card, Avatar} from 'antd';
import demoImage from '../images/cryptocurrency.png';
import {useGetCryptoNewsQuery} from '../Services/cryptoNewsApi';
import moment from "moment";
import {useGetCryptosQuery} from '../Services/cryptoApi';
const {Text,Title}=Typography;
const {Option}=Select;
const News =({simplified})=>{
    const [newsCategory,setNewsCategory]=useState('Cryptocurrency')
    const {data}= useGetCryptosQuery(100);
    const {data:cryptoNews}=useGetCryptoNewsQuery({newsCategory,count:simplified?3:6})

    return (
        <Row  style={{paddingLeft:'280px'}}gutter={[24 , 24]}>
            {!simplified && (
                <Col span={24}>
                 <Select
                    showSearch
                    className="select-news"
                    placeholder="Select a news Category"
                    optionFilterProp="children"
                    onChange={(value)=>setNewsCategory(value)}
                    filterOption={(input,option)=>option.children.toLowerCase().indexOf(input.toLowerCase())>=0}
                 >
                            <Option value="Crytocurrency"></Option>
                            {data?.data?.coins?.map((coin)=><Option value={coin.name}>{coin.name}</Option>)}
                 </Select>
                </Col>
            )

            }
            {cryptoNews&&cryptoNews.value.map((news,i)=>(
                <Col xs ={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target ="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                 <Title className="news-title" level={4}>{news.name}</Title>
                                 <img style={{maxWidth:'200px',maxHeight:'100px'}}src= {news?.image?.thumbnail?.contentUrl||demoImage}alt="news"/>
                                 </div>
                                 <p>
                                    {news.description>100
                                    ?`${news.description.substring(0,1000)}...`
                                    :news.decription}
                                 </p>
                                 <div className="provider-container">
                                    <div>
                                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl||demoImage} alt="News"></Avatar>
                                        <Text className="provider-name">{news.provider[0]?.name}</Text>
                                    </div>
                                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                                 
                            </div>
                        </a>

                    </Card>
                    </Col>
            ))}
            </Row>
    )
}
export default News;