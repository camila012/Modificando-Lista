import React,{ Fragment, useState , useEffect} from 'react';
import {Button, Tooltip, Avatar, Divider} from 'antd';
import { UserOutlined,SearchOutlined } from '@ant-design/icons';



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
    <div className="list">
    <ul>
    {list.map(item => (
      <li key={item.id}>
      <Divider orientation="left">Users</Divider>
      <Avatar style={{backgroundColor: '#3399ff' }} size={64} icon={<UserOutlined />} />
      <Tooltip title="Editar">
      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
      <li>
      {item.name} 
      </li>
      <li >
      {item.username} 
      </li>
      <li>
      {item.email} 
      </li>
      </li>
      ))}
      </ul>
      </div>
      </Fragment>
      );
    }
    export default ModifyUsers;
    
 
      
      
      
      
      
      
    
      
      
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    