import React from 'react';
import './App.css';
import Icon from './components/Icon.js';
import SkillsIconContainer from './components/SkillsIconContainer.js';
import LanguageIconContainer from './components/LanguageIconContainer.js';
import FlatironIcon from './flatiron-icon.svg';
import CCRIIcon from './ccri-icon.svg';

function App() {
  return (
    <>
      <header className="header">
        <div className="logo-text">
          Stephen
          <br/>
          McBride
        </div>
        <nav className="nav_links">
          <ul>
            <li>
              <a href="#work">WORK</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#education">EDUCATION</a>
            </li>
            <li>
              <a href="#resume">RESUME</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
            <li>
              <a href="https://medium.com/@stephenmcbride" target="_blank">BLOG</a>
            </li>
          </ul>
        </nav>
      </header>
      <div id="intro" className="wrapper">
        <h1>
          Hi, I'm Stephen!
        </h1>
        <br/>
        <p>
          I'm a full stack web developer that has experience developing applications, specializing in Ruby on Rails and React/Redux. 
        </p>
      </div>

      <div id="skills" className="wrapper">
        <h1>
          Skills
        </h1>
        <br/>
        <p>
          I have experience developing applications with:
          <br/>
          <SkillsIconContainer/>
          <br/>
          The languages I specialize in are:
          <br/>
          <LanguageIconContainer/>
        </p>
      </div>

      <div id="work" className="wrapper">
        <h1>
          Work
        </h1>
        <br/>
        <p>
        <br/>
          <b>Corkboard</b>
          <a href="https://github.com/smcbride1/corkboard-frontend" target="_blank"><p>Source</p></a>
          <iframe className="vimeo-iframe" src="https://player.vimeo.com/video/460274264" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          <br/>
          <br/>
          <b>Musiquiz</b>
          <a href="https://github.com/smcbride1/musiquiz" target="_blank"><p>Source</p></a>
          <iframe className="vimeo-iframe" src="https://player.vimeo.com/video/449365150" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          <br/>
          <br/>
          <b>Menu Info</b>
          <a href="https://github.com/smcbride1/menu-info" target="_blank"><p>Source</p></a>
          <iframe className="vimeo-iframe" src="https://player.vimeo.com/video/438165561" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </p>
      </div>

      <div id="education" className="wrapper">
        <h1>
          Education
        </h1>
        <br/>
        <p>
          <Icon icon={FlatironIcon}/>
          <b>Flatiron School</b>
          <br/>
          2020
          <br/>
          Software Engineering Online
          <br/>
          <br/>
          <Icon icon={CCRIIcon}/>
          <b>Community College of Rhode Island</b>
          <br/>
          2015-2019
          <br/>
          Associates in Fine Art
          <br/>
        </p>
      </div>

      <div id="resume" className="wrapper">
        <h1>
          Resume
        </h1>
        <a href="https://docs.google.com/document/d/e/2PACX-1vS1GJflYix6zYITl-z1nG6TVPqh8ctP2qoN6XFzZZV6cUkFFMrVucK1pL01YcpQEDLEjcgUNu7yq7eZ/pub" target="_blank"><p>Link</p></a>
        <br/>
        <br/>
        <iframe class="resume" src="https://docs.google.com/document/d/e/2PACX-1vS1GJflYix6zYITl-z1nG6TVPqh8ctP2qoN6XFzZZV6cUkFFMrVucK1pL01YcpQEDLEjcgUNu7yq7eZ/pub?embedded=true"></iframe>
      </div>

      <div id="contact" className="wrapper">
        <h1>
          Contact
        </h1>
        <br/>
        <p>
          <b>Email</b>
          <br/>
          <a href="mailto:stevemcbride3@gmail.com">stevemcbride3@gmail.com</a>
        </p>
      </div>

      {/* <div id="blog" className="wrapper">
        <h1>
          Blog
        </h1>
        <br/>
        <div id="medium-widget"></div>
        <script src="https://medium-widget.pixelpoint.io/widget.js"></script>
        <script src="./medium-widget-init.js"></script>
      </div> */}
    </>
  );
}

export default App;
