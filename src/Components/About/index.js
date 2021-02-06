import React from "react";
import "./About.css"
import Footer from "../Footer"
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { FaPencilAlt, FaHtml5, FaCodeBranch } from 'react-icons/fa';

function About(){
    return(
    <div class="skills container is-centered">
     <h3>ABOUT</h3><hr/>
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-12">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <p class="title">Who I am</p>
                <p class="subtitle">Rutgers Alumna, IT professional, and aspiring Full Stack Developer located in the greater New York City Metropolitan Area.
                  I have many years of experience working as a System Administrator, Database
                  Administrator, and DevOps Engineer.</p>

              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">What I want</p>
                <p class="subtitle">I look forward to the day where I can work with a team of developers
                  to build and maintain a solid product. I know that I can be a strong asset to any
                  development or engineering team. I hope that you will stay awhile and check out some
                  of my work.</p>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="title">How I'll get there</p>
              <div class="content">
                <div class="row">

                <div class="column">
                <div class="box">
                  <div class="text-wrap has-text-centered">
                     <FaPencilAlt /><br />
                    <p class="is-size-4"> Design Skills</p>
                  </div>
                  <ul id="skills">
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe XD</li>
                    <li>Figma</li>
                    <li>Zepplin</li>
                  </ul>
                </div>
                </div>

                <div class="column">
                <div class="box">
                  <div class="text-wrap has-text-centered">
                    <FaHtml5 /><br />
                    <p class="is-size-4">Front End Skills</p>
                  </div>
                  <ul id="skills">
                    <li>HTML/CSS</li>
                    <li>Git/SVN</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>jQuery</li>
                  </ul>
                </div>
                </div>

                <div class="column">
                <div class="box">
                  <div class="text-wrap has-text-centered">
                    <FaCodeBranch /><br />
                    <p class="is-size-4"> Back End Skills</p>
                  </div>
                  <ul id="skills">
                    <li>AWS</li>
                    <li>Docker</li>
                    <li>MySQL</li>
                    <li>Node</li>
                    <li>SQL Server</li>
                  </ul>
                </div>
                </div>
                </div>

              </div>
            </div>
          </article>
          </div>
        </div>
      </div>
    </div>

    )
}

export default About