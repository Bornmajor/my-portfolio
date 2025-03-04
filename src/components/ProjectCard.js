import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({id,title,github_url,coverImg,type,desc}) => {
return (
<Link key={id} to={`/project/${id}`} className="card-link">
<div href={github_url} className='img-link'>
<img src={coverImg}  className="img_item"  style={{maxWidth:'350px'}} alt={type} />
<p className="project-overlay-title text-truncate">{title}</p>
</div>

{/* <div className='project-details'>
<p className="project-title text-truncate">{title}</p>
<p className="project-desc text-truncate">{desc}</p>  
<span>
    <Link to={`/project/${id}`}>
        <i class="fas fa-external-link-alt" style={{fontSize:'25px',color:'#198754'}}></i>
        </Link>
    </span>
</div> */}

</Link> 
);
}

export default ProjectCard;
