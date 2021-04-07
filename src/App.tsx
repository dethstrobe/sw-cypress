import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface RedditApi {
  data: {
    children: {
      data: {
        title: string;
        thumbnail: string;
        id: string;
      };
    }[];
  };
}

function App() {
  const [cats, setCats] = useState<RedditApi>();
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <button
        onClick={() => {
          fetch('https://www.reddit.com/r/catsareliquid.json')
            .then((res) => res.json())
            .then(setCats);
        }}
      >
        Get Cats
      </button>

      {cats &&
        cats.data.children.map(({ data: { thumbnail, title, id } }) => (
          <img key={id} src={thumbnail} alt={title} />
        ))}
    </div>
  );
}

export default App;
