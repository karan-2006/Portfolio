
import React, { useState } from 'react';
import proImg from './assets/Ceramics.jpg';
import fiJet from './assets/Jet.jpg';
import liTem from './assets/List.jpg'
import watDrop from './assets/Water-drop.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';


function Portfolio() {
  const [filter, setFilter] = useState('');
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
        title: 'TO DO LIST',
        description: 'WEBSITES',
        image: liTem,
        link: 'https://your-project-link.com',
        content:'',
      },
      {
        title: 'Pottery Project',
        description: 'WEBSITES',
        image: watDrop,
        link: 'https://your-project-link.com',
        content:'',
      },
  ];

  const filteredProjects = projects.filter((project) =>
    project.description.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilter = (filterValue) => {
    setFilter(filterValue);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  return (
    
    <div className="container-fluid position-relative col-xs pt-1 col-lg pt-3" id="portfolio">
        <center className=' col-xs pt-1 col-lg pt-5'>
            <h3 className="display-3 text-primary">Portfolio</h3>
            <h6 className="display-6 text-success col-xs fs-6 col-lg fs-3">See My Works - Lorem ipsum dolor</h6>
            <hr className="w-25" />
            <div className="container-fluid col-xs d-flex ">
                <button className='btn btn-outline-danger col-xs ms-1 my-1 col-lg ms-2 my-2' type="button" onClick={() => handleFilter('')}>ALL</button>
                <button className='btn btn-outline-danger col-xs m-1 col-lg m-2' type="button" onClick={() => handleFilter('DESIGNING')}>DESIGNING</button>
                <button className='btn btn-outline-danger col-xs me-1 my-1 col-lg me-2 my-2' type="button" onClick={() => handleFilter('WEBSITES')}>WEBSITES</button>
            </div>
        </center>
        <div className="container-fluid">
            <div className="row">
                {filteredProjects.map((project, index) => (
                <div className="col-xs py-2 col-12 col-lg col-3" key={index}>
                    <div className="card text-bg-dark" onClick={() => handleProjectClick(project)}>
                        <img src={project.image} style={{ width: '100%', height: '200px' }} id='project' className="card-img" alt={project.title} />
                        <div id='overlay' className="card-img-overlay bg-dark bg-opacity-75 col-xs m-2 m-2 w-75  col-lg w-75 h-75 mt-4 ms-5">
                            <h5 className="card-title text-info">{project.title}</h5>
                            <p className="card-text text-warning">{project.description}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
        {selectedProject && (
            <div className="modal bg-dark bg-opacity-75 show" style={{ display: 'block' }}>
                <div  className="modal-dialog col-xs m-5">
                    <div className="modal-content bg-black">
                        <div className="modal-header">
                            <h5 className="modal-title text-info">{selectedProject.title}</h5>
                            <button type="button" className="btn-close btn-close-white" onClick={handleModalClose} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-xs col-1 col-lg col-6">
                                    <img src={selectedProject.image} style={{ width: '100%', height: '200px' }} className="modal-img" alt={selectedProject.title} />
                                </div>
                                <div className="col-xs col-6 col-lg col-6">
                                    <blockquote>
                                        <p className='text-warning'><FontAwesomeIcon icon={faFolder} className='px-1'/>{selectedProject.description}</p>
                                        <h6 className='text-secondary col-xs pb-1 col-lg py-1'>{selectedProject.content}</h6>
                                        <button type="button" className='btn btn-outline-danger'>
                                            <a className='text-decoration-none text-light' href={selectedProject.link} target="_blank" rel="noopener noreferrer">
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