import React from 'react';
import MarkdownEditor from './components/MarkdownEditor';
import './App.css';

const App = () => {
  return (
    <div className="app">
      {/* Do not remove the main container */}
      <MarkdownEditor />
    </div>
  );
};

export default App;
