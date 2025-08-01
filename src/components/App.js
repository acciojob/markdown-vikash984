import React from 'react';
import MarkdownEditor from './MarkdownEditor';
import './App.css';

const App = () => {
  return (
    <div className="app"> {/* ✅ Main container as required by Cypress */}
      {/* Do not remove the main container */}
      <MarkdownEditor />
    </div>
  );
};

export default App;
