import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './App.css'; // Import your custom CSS

const defaultMarkdown = `# Welcome to My Markdown Previewer!
## This is a Sub-heading

Here is a [link](https://www.freecodecamp.org) to freeCodeCamp.

Inline code example: \`const x = 5;\`

\`\`\`javascript
// This is a code block
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

- This is a list item
- Another list item

> This is a blockquote.

![Markdown Logo](https://markdown-here.com/img/icon256.png)

**This text is bold.**

This is a new line.  
This line is after a line break. 
`;

function App() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    // Set default markdown
    setMarkdown(defaultMarkdown);
  }, []);

  // Set options for marked
  marked.setOptions({
    breaks: true, // Enable line breaks
  });

  return (
    <div className="app">
      <div className="editor-container">
        <h2>Editor</h2>
        <textarea
          id="editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          rows="10"
        />
      </div>
      <div className="preview-container">
        <h2>Preview</h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
}

export default App;
