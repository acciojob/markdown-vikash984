import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./styles.css";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  return (
    <div className="app">
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Hello world"
      />
      <div className="preview">
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
