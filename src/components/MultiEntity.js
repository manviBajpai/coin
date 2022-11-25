import {useState,useEffect,React} from "react";
import {Link} from 'react-router-dom';
import {Card,Row,Col,Input} from 'antd';
import millify from "millify";
  const MultiEntity=(props)=>{
    
    const[cryptos,setCrypto]=useState(props.cryptos?.data?.coins);
    const [search,setSearch]=useState('');
    
    useEffect(()=>{
     
      const filteredData=props.cryptos?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(search.toLowerCase())); 
     
      setCrypto(filteredData);
    },[cryptos,search]);
     if(cryptos.length == 0 ){
  return 'Loading......' ;
     }
     else{
    return(
    <>
    <div className="search-crypto">
      <Input placeholder=" Search Cryptocurrency" onChange={(e)=>setSearch(e.target.value)}/>
    </div>
             <Row style={{paddingLeft:'280px'}}gutter={[32,12]} className="crypto-card-container">
           
           
            {cryptos && cryptos?.map((currency)=>(
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
            </>)}
            
  }
  export default MultiEntity;