// 1. Import React and react dom
import { default as React, default as ReactDOM } from 'react';

// 2.get a reference to the div with ID root
const ele = document.getElementById('root');

// 3. Tell react  to take control of that element
const root = ReactDOM.createRoot(ele);

// 4. Create component
function App() {
  return <h1>Hi there</h1>;
}

// 5. SHow the component on the screen
root.render(<App />);
