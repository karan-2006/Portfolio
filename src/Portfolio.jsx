import React, { useState } from 'react';
import proImg from './assets/Ceramics.jpg'
import fiJet from './assets/Jet.jpg'
import watDrop from './assets/Water-drop.jpg'


function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'POTTERY',
      description: 'DESIGNING',
      image: proImg,
      link: 'https://your-project-link.com',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        title: 'FIGHTER JET',
        description: 'DESIGNING',
        image: fiJet,
        link: 'https://your-project-link.com',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        title: 'Pottery Project',
        description: 'Designing',
        image: watDrop,
        link: 'https://your-project-link.com',
        content:'',
      },
      {
        title: 'Pottery Project',
        description: 'Designing',
        image: watDrop,
        link: 'https://your-project-link.com',
        content:'',
      },
    // Add more projects here
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container-fluid">
        <center>
            <h3 className="display-3 text-primary">Portfolio</h3>
            <h6 className="display-6 text-secondary">See My Works - Lorem ipsum dolor</h6>
            <hr className="w-25" />
        </center>
        {/* ... button section ... */}

        <div className="container-fluid">
            <div className="row">
                {projects.map((project, index) => (
                <div className="col" key={index}>
                    <div className="card text-bg-dark" onClick={() => handleProjectClick(project)}>
                        <img src={project.image} style={{ width: '100%', height: '200px' }} className="card-img" alt={project.title} />
                        <div className="card-img-overlay bg-dark bg-opacity-75 w-75 h-75 mt-4 ms-5">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text text-warning">{project.description}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>

        {selectedProject && (
            <div className="modal show" style={{ display: 'block' }}>
                <div className="modal-dialog">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <h5 className="modal-title">{selectedProject.title}</h5>
                            <button type="button" className="btn-close btn-close-white" onClick={handleModalClose} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <img src={selectedProject.image} style={{ width: '100%', height: '200px' }} className="modal-img" alt={selectedProject.title} />
                                </div>
                                <div className="col">
                                    <blockquote>
                                        <p className='text-warning'>{selectedProject.description}</p>
                                        <h6 className='text-secondary py-3'>{selectedProject.content}</h6>
                                        <button type="button" className='btn btn-outline-light'>
                                            <a className='text-decoration-none' href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                                                View Project
                                            </a>
                                        </button>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
}

export default Portfolio;