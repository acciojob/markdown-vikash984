import React from 'react';
import ReactMarkdown from 'react-markdown'; // ✅ Import library

const MarkdownEditor = ({ text, setText }) => {
  return (
    <div>
      <h1>UI Mockup</h1>

      {/* ✅ Markdown Input Area */}
      <textarea
        className='textarea'
        onChange={(e) => setText(e.target.value)}
        value={text}
      />

      {/* ✅ Live Markdown Preview */}
      <div className='preview'>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
