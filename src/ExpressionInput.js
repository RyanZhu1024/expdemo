import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import posed from 'react-pose';
import MaximizedEditor from './MaximizedEditor';

const monacoRef = React.createRef();

const PosedEditor = posed(MaximizedEditor)();
const ExpressionInput = ({ width }) => {
  const [content, setContent] = useState('');
  const [editor, setEditor] = useState(false);
  const [containerHeight, setContainerHeight] = useState(20);
  const [maximiseEditor, setMaximiseEditor] = useState(false);
  const onEditorDidMount = (editor, monaco) => {
    editor.onDidFocusEditorWidget(function() {
      setEditor(true);
      setContainerHeight(100);
      editor.layout();
    });
    editor.onDidBlurEditorWidget(() => {
      setEditor(false);
      setContainerHeight(20);
      editor.layout();
    });

    // monaco.languages.registerCompletionItemProvider('javascript', {
    //   provideCompletionItems: (model, position) => {
    //     const suggestions = [];
    //     // add completion items
    //     return {
    //       suggestions,
    //     };
    //   },
    //   triggerCharacters: ['.'],
    // });
  };
  const handleChangeValue = value => setContent(value);
  return (
    <div
      style={{
        boxShadow: '10px 5px 5px red',
        margin: 10,
        height: containerHeight,
        position: 'relative',
        zIndex: editor ? 10 : 0,
      }}
    >
      <MonacoEditor
        ref={monacoRef}
        width={width}
        language="javascript"
        theme="vs-light"
        value={content}
        onChange={handleChangeValue}
        editorDidMount={onEditorDidMount}
      />
      <span
        onClick={() => setMaximiseEditor(true)}
        style={{ cursor: 'pointer' }}
      >
        +
      </span>
      {maximiseEditor ? (
        <PosedEditor
          content={content}
          onChange={handleChangeValue}
          onClose={() => setMaximiseEditor(false)}
        />
      ) : null}
    </div>
  );
};

export default ExpressionInput;
