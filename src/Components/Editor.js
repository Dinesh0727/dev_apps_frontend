import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import "../styles/Editor.css";

export default function Editor({
  placeholdery,
  setValue,
  value,
  toolBarVisibility
}) {
  const editor = useRef(null);
  const [content, setContent] = useState(value);

    // console.log("The content in the form of string: " + content);

  const config = useMemo(
    () => ({
      innerHeight: "400rem",
      toolbar: toolBarVisibility,
      readonly: false,
      placeholder: placeholdery || "Start typings...",
      buttons: [
        "bold",
        "italic",
        "underline",
        "|",
        "ul",
        "ol",
        "|",
        "outdent",
        "indent",
        "|",
        "font",
        "fontsize",
        "brush",
        "paragraph",
        "|",
        "image",
        "table",
        "link",
        "|",
        "align",
        "undo",
        "redo",
        "|",
        {
          name: "insertCodeBlock",
          exec: (editor) => {
            editor.s.insertHTML("<pre><code></code></pre>");
          },
          tooltip: "Insert Code Block",
        },
      ],
      codemirror: {
        enable: true, // Enable CodeMirror for syntax highlighting
        mode: "javascript", // Set the default mode for syntax highlighting
        lineNumbers: true, // Enable line numbers in code block
      },
    }),
    [placeholdery]
  );

  return (
    <JoditEditor
      ref={editor}
      value={value}
      config={config}
      tabIndex={1}
      onBlur={(newContent) =>  {
        console.log("Value before update");
        
        setContent(newContent);
        setValue(newContent);

        console.log(value);
        
      }} 
    />
  );
}
