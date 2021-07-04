import React from 'react';
import './style.css';
import Header from './Header';
import Body from './Body';
import Music from './Music';

export default function App() {
  return (
    <div className="app">
      <Header className="main_header" />
      <Body className="main_body" />
      <Music className="main_music" />
    </div>
  );
}
