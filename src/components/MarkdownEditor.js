import React, { useState, useEffect } from 'react';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  return (
      <textarea
        className="textarea"
        placeholder="Hello world"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div className="preview">
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
  );
};

export default MarkdownEditor;

