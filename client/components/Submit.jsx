import React, { useState } from 'react';
import Axios from 'axios';
import TextArea from '../forms/TextArea.jsx';


const Submit = () => {
  const [value, setValue] = useState('');

  const postHandler = (e) => {
    Axios.post('/post', {title: value})
  }

  const changeHandler = (value) => {
    setValue(value);
  }

  return (
    <div className="submit flex-column-center-center">
      <TextArea postHandler={postHandler} changeHandler={changeHandler}/>
    </div>
  )
}

export default Submit;
