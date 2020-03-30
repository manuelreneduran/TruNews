import React from 'react';
import Axios from 'axios';

const TextArea = () => {

  const [value, setValue] = React.useState('');

  const postHandler = (e) => {
    Axios.post('/post', {title: value})
  }

  const changeHandler = (value) => {
    setValue(value);
  }

  return (
    <div data-test="component-textarea">
      <form className="submit-form flex-column" data-test="form">
        <textarea data-test="textarea" onChange={(e) => changeHandler(e.target.value)}id="submit-textarea"
        cols={100}
        rows={30}>
        </textarea>
        <div className="submit-button-container flex-row-flex-end">
          <button data-test="button" id="submit-button" onClick={(e) => postHandler(e)}>Post</button>
        </div>
      </form>
    </div>
  )
}


export default TextArea;