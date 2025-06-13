
import React from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="App">
      <h1>My Profile</h1>
      <ProfileCard
        name="Mitchelle"
        image="/Public/mitchelle.jpg"
        bio="I'm a creative and driven web developer with a passion for building responsive, user-friendly websites and applications. I specialize in front-end development using HTML, CSS, JavaScript, and Bootstrap, and I’m experienced in backend development with Node.js, Express, and MySQL."
      />
    </div>
  );
}

export default App;
