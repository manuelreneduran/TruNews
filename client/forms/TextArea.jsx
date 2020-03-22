import React from 'react';

const TextArea = ({ changeHandler, postHandler }) => {
  return (
    <>
      <form className="submit-form flex-column">
        <textarea onChange={(e) => changeHandler(e.target.value)}id="submit-textarea"
        cols={100}
        rows={30}>
        </textarea>
        <div className="submit-button-container flex-row-flex-end">
          <button id="submit-button" onClick={(e) => postHandler(e)}>Post</button>
        </div>
      </form>
    </>
  )
}

export default TextArea;