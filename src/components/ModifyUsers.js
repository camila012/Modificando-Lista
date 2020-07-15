import React,{ Fragment, useState , useEffect} from 'react';
import {List,Avatar, Divider} from 'antd';
import { UserOutlined } from '@ant-design/icons';


const ModifyUsers = () => {
  
  const [list, usersList] = useState ([])
  
  
  
  
  useEffect(() => {
    
    const consultApi = async () => {
      const api = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await api.json()
      usersList(users)
    }
    
    
    
    
    consultApi()
  }, [])
  
  
  
  
  
  
  return ( 
    
    
    <Fragment> 
    
    <div>
    
    <Avatar size={64} icon={<UserOutlined />} />
    <List
    size="small"
    header={<div>Header</div>}
    />
    
    <ul>
    {list.users.map(item => (
        <li key={item.id}>
        {item.name} - {item.email} 
        </li>
        ))}
      </ul>

      <Divider orientation="left">Large Size</Divider>
      
      </div>
      </Fragment>
      );
      
      
      
    }
    export default ModifyUsers;





      
      
      
      
      
      
  
  
  
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    