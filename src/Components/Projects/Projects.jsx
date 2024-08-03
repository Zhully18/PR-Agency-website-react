// src/Projects.js
import React from 'react';
import './Projects.css';
import { projects } from '../../data';

function Projects() {
  return (
    <div className="projects">
        <div className="project_header">
        <h2>Projects</h2>
        <p>We are proud to have worked with a diverse range of clients across various industries. <br />
         Here are some of the brands we have helped elevate.</p>
        </div>
        <div className="project_wrapper">
            {projects.map(({image, title, content}) => {
                return (
                <div className="project_container">
                    <div className="project_img_detail">
                        <img src={image} alt="" />
                    </div>
                    <div className="project_text_detail">
                        <h1>{title} </h1>
                        <p>{content} </p>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  );
}

export default Projects;
