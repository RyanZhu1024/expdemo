import React, { forwardRef } from 'react';
import ReactDOM from 'react-dom';
import MonacoEditor from 'react-monaco-editor';

const MaximizedEditor = forwardRef(({ content, onChange, onClose }, ref) => {
  return ReactDOM.createPortal(
    <div
      className="mask"
      style={{
        height: '100vh',
        width: '100vw',
        top: 0,
        position: 'absolute',
      }}
    >
      <div
        style={{
          boxShadow: '10px 5px 5px grey',
          position: 'absolute',
          left: '0px',
          top: '0px',
          transform: 'translate(50%, 50%)',
          zIndex: 100,
        }}
        ref={ref}
      >
        <MonacoEditor
          height={600}
          width={800}
          language="javascript"
          theme="vs-light"
          value={content}
          onChange={onChange}
        />
        <span style={{ cursor: 'pointer' }} onClick={onClose}>
          Close
        </span>
      </div>
    </div>,
    document.body
  );
});

export default MaximizedEditor;
