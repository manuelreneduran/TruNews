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
    <div data-test="component-textarea" className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-6">
          <form data-test="form">
                <textarea data-test="textarea" id="submit-form" className="form-control" onChange={(e) => changeHandler(e.target.value)}
                  cols={50}
                  rows={10}>
                </textarea>
              <div className="submit-button-container">
                <button data-test="button" id="submit-button" onClick={(e) => postHandler(e)}>Post</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}


export default TextArea;