import {useState,React} from "react";
import {Link} from 'react-router-dom';
import {Card,Row,Col,Input} from 'antd';
import millify from "millify";
import SingleEntity from "./SingleEntity";
import MultiEntity from "./MultiEntity";
import {useGetCryptosQuery} from '../Services/cryptoApi';
function Cryptocurrency({simplified}){
    var cryptoData;
      const count = simplified?10:100;
    const {data:cryptoList,isFetching}= useGetCryptosQuery(count);
    const [cryptos,setCrypto]=useState(cryptoList?.data?.coins);
  if(isFetching)
  return 'Loading......' ;
      if (count==10) {
        cryptoData= cryptos.slice(0,10);
    return <SingleEntity crypto ={cryptoData}/>  ;
  }
  return <MultiEntity cryptos = {cryptoList} />;
}



export default Cryptocurrency;