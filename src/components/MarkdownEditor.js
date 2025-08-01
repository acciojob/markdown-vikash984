import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('# Hello **World**');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  return (
    <div className="app">
      <textarea
        className="textarea"
        placeholder="Hello world"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div className="preview">
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
