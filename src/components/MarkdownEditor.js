import React from 'react'

const MarkdownEditor = (props) => {
    const{text,setText}  = props;
  return (
    <div>
      <h1>UI Mockup</h1>
        <textarea  className='textarea' onChange={(e)=>setText(e.target.value)}></textarea>

        <div className='preview'><h1>{text} </h1> </div>
        
    </div>
  )
}

export default MarkdownEditor
