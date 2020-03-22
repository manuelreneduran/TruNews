import React, { useState } from 'react';
import Axios from 'axios';


const Submit = () => {
  const [value, setValue] = useState('');

  const postHandler = (e) => {
    Axios.post('/post', {title: value})
  }

  return (
    <div className="submit flex-column-center-center">
      <form className="submit-form flex-column">
        <textarea onChange={(e) => setValue(e.target.value)}id="submit-textarea"
        cols={100}
        rows={30}>
        </textarea>
        <div className="submit-button-container flex-row-flex-end">
          <button id="submit-button" onClick={(e) => postHandler(e)}>Post</button>
        </div>
      </form>
    </div>
  )
}

export default Submit;
