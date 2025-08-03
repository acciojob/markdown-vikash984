import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import MarkdownEditor from './MarkdownEditor';

const App = () => {
  const [text, setText] = useState(""); // ✅ initialize with empty string

  useEffect(() => {
    // You could perform side effects here if needed in future
  }, [text]);

  return (
    <div className='app'>
      <MarkdownEditor text={text} setText={setText} />
    </div>
  );
};

export default App;
