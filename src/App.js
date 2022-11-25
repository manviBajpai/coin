import { Link } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import './App.css';
import 'antd/dist/antd.min.css';

import {Layout,Typography,Space} from 'antd';
import {Navbar ,Exchanges,Homepage,CryptoDetails,Cryptocurrency,News} from './components';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar/>
        </div>
        <div className='main'>
      <Layout>
        <div className='routes'>
          <Switch>
            <Route exact path ="/">
              <Homepage/>
            </Route>
            <Route  exact path ="/exchanges">
              <Exchanges/>
            </Route>
            
                <Route exact path ="/cryptocurrency">
              <Cryptocurrency/>
            </Route>
             <Route exact path ="/crypto/:coinId">
              <CryptoDetails/>
            </Route>
             <Route exact path ="/news">
              <News/>
            </Route>
          
          </Switch>
        </div>
      </Layout>
        
    
      <div className='footer' level={5} >
        <Typography.Title style={{color:'#FFFFFF',textAlign:'center'}}>
          CryptoShastra<br/>
          All Rights not Reserved...
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to = "/exchanges">Exchanges</Link>
          <Link to ="/news">News</Link>
        </Space>
      </div>
        </div>
    </div>
  );
}

export default App;
