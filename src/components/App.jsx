import React from 'react';
import '../App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>Hi, I'm Aiden. I'm a web developer based in San Diego, CA.</p>
        </section>
        <section>
          <h2>My Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Java Script</li>
          </ul>
        </section>
        <section>
          <h2>My Work</h2>
          <p>Currently learning React.</p>
        </section>
      </main>
      <footer>
        <p>Copyright © 2023</p>
      </footer>
    </div>
  );
}

export default App;