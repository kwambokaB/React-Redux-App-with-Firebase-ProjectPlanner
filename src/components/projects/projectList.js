import React from 'react';
import ProjectSummary from './projectSummary';
import {Link} from 'react-router-dom'

const Projectlist =({projects})=>{
    return(
    <div>
      {projects && projects.map(project => {
        return(
          <Link to={'/project/' + project.id} key={project.id}>
        <ProjectSummary project={project} key={project.id}/>
          </Link>
        );
      })} 
    </div>
    );       
}
export default Projectlist;