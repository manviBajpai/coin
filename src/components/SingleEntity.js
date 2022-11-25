import {useState,React} from "react";
import {Link} from 'react-router-dom';
import {Card,Row,Col,Input} from 'antd';
import millify from "millify";
  const SingleEntity=(props)=>{
   
    return(<div>
             <Row style={{paddingLeft:'280px'}}gutter={[32,12]} className="crypto-card-container">

  {props.crypto && props.crypto.map((currency)=>(
                <Col xs ={24}sm={12}  lg={6} className="crypto-card" key={currency.uuid}>
                <Link to={`/crypto/${currency.uuid}`}>
                    <Card 
                     title={`${currency.rank}.${currency.name}`}
                     extra={<img className="crypto-image" src={currency.iconUrl}/>} hoverable>
                        <p>Price:{millify(currency.price)}</p>
                        <p>Market Cap:{millify(currency.marketCap)}</p>
                        <p>Daily:{millify(currency.change)}</p>
                    </Card>
                </Link>
            </Col>
            ))}
            </Row>
            </div>)
  }
  export default SingleEntity;