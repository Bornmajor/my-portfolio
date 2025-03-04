import React, { useContext, useEffect,useState } from 'react'
import usePlaceholder from 'react-bootstrap/esm/usePlaceholder';
import { useParams } from 'react-router-dom';
import MyContext from '../context/context';
import { useLocation } from 'react-router-dom';

function Dribble() {
    const params = useParams();
    const {dribbbleData} = useContext(MyContext);
    const [filteredData, setFilteredData] = useState(null);

    const {pathname} = useLocation();

    useEffect(()=>{
        // Scroll to the top whenever the user navigates to a new page
        window.scrollTo(0, 0);
       
       },[pathname])
     
// Function to get project by id
const getProjectById = (id) => {
    return dribbbleData.filter(project => project.id === parseInt(id, 10))[0];
  };

 

  useEffect(() => {
    const data = getProjectById(params.dribbbleId);
    setFilteredData(data);
  }, [params.dribbbleId, dribbbleData]);

 if (!filteredData) {
    return <div>Loading...</div>;
  }

  console.log('Ok')
  return (
    <div className='container-dribble-page d-flex justify-content-center  '>
    <div className='d-flex  flex-column'>

    <h4>{filteredData.projectTitle}</h4>    
    <img src={filteredData.coverImg} className='cover-shot-img' alt={filteredData.projectTitle}/>  
   
       
     </div>    
     <div className='dribble-section-desc'> 
     <p className="dribbble-p-desc">{filteredData.description}</p>   
     <div className='shots-img-container d-flex flex-wrap' >
     {filteredData.shots.map((shot, index) => (
          <img key={index} src={shot} alt={`Shot ${index + 1}`} className='shots-img' />
        ))}
     </div>
     </div>
       
    </div>
    
  )
}

export default Dribble;