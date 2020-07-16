import React, { Fragment, useState } from 'react';
import {Select, AutoComplete, Input} from 'antd';


const { Option } = Select;
const { TextArea } = Input;

const Comments = () => {
  const [error,sendError] = useState(false)
  
  
  const [comments,commentaryUser] = useState({
    city:'city',
    commentary:'commentary'
  })
  
  
  const updatestate = e => {
    commentaryUser({
      ...comments,
      [e.target.name] : e.target.value
    })
  }
  
  const {city,commentary} = comments;
  
  const send = e => {
    e.preventDefault();
    
    if (city.trim() === ''||commentary.trim() === '') {
      sendError(true);
      return;
    }
    sendError(false)
  }
  return ( 
    
    <Fragment>
    {error ? <p className="error">TODOS LOS CAMPOS SON OBLIGATORIOS</p> : null }
    
    <form
    onSubmit={send}
    >
    <div className="footer">
    <div className="city"> 
    <h2>recommendation</h2>
    <h3>city</h3>
    <Select
    name="city"
    value={city}
    onChange={updatestate}
    showSearch
    style={{ width: 200 }}
    placeholder="Select a city"
    optionFilterProp="children"
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    >
    <Option value="Medellin">Medellin</Option>
    <Option value="Bogotá">Bogotá</Option>
    <Option value="Barranquilla">Barranquilla</Option>
    </Select>
    
    </div> 
    <div className="comments">
    <h2>commentary</h2>
    <AutoComplete
    style={{ width: 200 }}
    >
    <TextArea
    placeholder="comments"
    className="custom"
    style={{ height: 50 }}
    name="commentary"
    value={commentary}
    onChange={updatestate }
    />
    </AutoComplete>
    </div> 
    <button
    type="submit"
    className="button"
    >Enviar</button>
    </div>
    </form>    
    </Fragment>
    );
  }
  
  export default Comments;