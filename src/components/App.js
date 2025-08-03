import React, { useEffect, useState } from 'react'
import "../styles/App.css"
import MarkdownEditor from './MarkdownEditor'

const App = () => {
    const[text,setText]  = useState();
    
    useEffect(()=>{
     
    },[text]);
  return (
    <div className='app'>
   <MarkdownEditor text={text} setText={setText}></MarkdownEditor>

    </div>
  )
}

export default App
