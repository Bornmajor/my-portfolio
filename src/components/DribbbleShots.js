import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import SkeletonCard from './SkeletonCard';
import { Link, useNavigate } from 'react-router-dom';
import MyContext from '../context/context';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import HorizontalScrollable from './HorizontalScrollable';


const DribbbleShots = () => {


 const {dribbbleData} = useContext(MyContext);
const [show, setShow] = useState(false);
const [activeImgUrl,setActiveImgUrl] = useState("");
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


    const [shots,setShots] = useState([]);
    const [n,setN] = useState('');

    // useEffect(()=>{
    //     fetchDribbbleShots();
    // },[n]);

    const sortedDribbbleData = dribbbleData.sort((a, b) => b.id - a.id)



    const fetchDribbbleShots = async() =>{
        try{
         //fetching  access token
         const response = await axios.post('https://dribbble.com/oauth/token', {
            grant_type: 'client_credentials',
            client_id: 'c9e48cbbeae7da7b7eb1c4bfa00cd70b3b71f84b36e1a125a8f75e0f1fdc3a21',
            client_secret: '3c492a7206953f7c4df85f262debd6af2382190947ed6c517601b15deefbaf59',
          });
          if (response.status === 200) {
            const { access_token } = response.data;

            const res = await axios.get('https://api.dribbble.com/v2/user/shots',{
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                },
            });

             setShots(res.data);
             setN('Ok');
           
          } else {
            throw new Error(`Error getting Dribbble token: ${response.status}`);
          }

        

        }catch(err){
            console.log(err);

        }
    }

    const scrollBlogRight = () =>{

        const  scrollableDiv = document.getElementById('shotsScrollBar');
          scrollableDiv.scrollLeft += 250;
    
    
      }
    
      const scrollLeftRight= () =>{
        const scrollableDiv = document.getElementById('shotsScrollBar');
        // Scroll distance in pixels
        scrollableDiv.scrollLeft -= 250;
    
       
      }
  return (
    <>
    
       <div>
    <h1 className="text-center title">UX projects</h1>

  
    <HorizontalScrollable buttonBackgroundColor="#f1f1f1">
    {dribbbleData.length !== 0 ?
        sortedDribbbleData.map((item) =>{
        return(
         <div className='dribbble-card' onClick={() => {
          handleShow()
          setActiveImgUrl(item.coverImg);
          }}>

          <Link 
          
          // to={"/dribbble/"+item.id} 
           >
          <img src={item.coverImg}  />  
            <p className="dribbble-title">{item.projectTitle}</p>
          </Link>
       
         </div>
        

        )
        } )
    :
    <SkeletonCard numCards={10}/>}

    </HorizontalScrollable>
     
     <div className='d-flex justify-content-center'>
      <a className="btn btn-success my-3" href='https://dribbble.com/osbornmaja'>More UX designs</a>
     </div>
    
   
</div> 

      <Modal show={show} onHide={handleClose}>
      {/* <Modal.Header  closeButton style={{position:'absolute',top:10}}>   </Modal.Header> */}
        <Modal.Body style={{padding:0}} >
          <img src={activeImgUrl} width='100%'/>
        </Modal.Body>
     
      </Modal>
    </>


  )
}

export default DribbbleShots