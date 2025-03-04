import { createContext, useState } from "react";

const MyContext = createContext();

export const MyContextProvider = (props) =>{

    const projectData = [
    {
    id:1,
    projectTitle:"Polling system",
    description:"This web-based application enables users to create interactive and dynamic polling platforms. Users can set up polls by adding various candidates or options, allowing participants to cast their votes. The system then collects and analyzes the votes, providing insightful analytics and ranking the candidates based on the collected data. This platform is ideal for conducting surveys, elections, and opinion polls, offering real-time results and detailed insights to enhance decision-making processes.",
    projectType:"website",
    shots:[

    ],
    coverImg:"https://cdn.dribbble.com/userupload/15490054/file/original-7603226626dcaa4ac536cbfeb41609e6.png",
    github_url: "https://github.com/Bornmajor/polling-system",
    features:[],
    technologies:[],
    video_url:"",
    },
    {
    id:2,
    projectTitle:"Video sharing platform",
    description:"Video sharing application built with php which is intergrated with vimeo api (for hosting videos) and img-bb (for hosting pictures/thumbnails)",
    projectType:"website",
    shots:[

    ],
    coverImg:"https://cdn.dribbble.com/userupload/15490124/file/original-5f6c3e5bf5ca966b5ea751e9ef9a2f57.png",
    github_url: "https://github.com/Bornmajor/video-sharing-web-app",
    features:[],
    technologies:[],
    video_url:"",
    },
    {
    id:3,
    projectTitle:"The Ultimate websocket App",
    description:"This project illustrates how to use WebSocket in Hypertext Processor (PHP). It's a simple chat/messaging app that demonstrates the benefits of WebSocket over traditional polling, where the HTTP protocol remains open, allowing real-time updates without the need for constant refreshing.",
    projectType:"website",
    shots:[

    ],
    coverImg:"https://cdn.dribbble.com/userupload/15490186/file/original-53a5c3a14575266bb2046e306c93aff8.png",
    github_url: "https://github.com/Bornmajor/ultimate-websocket-app",
    features:[],
    technologies:[],
    video_url:"",
    },
    {
    id:4,
    projectTitle:"Video optimization app",
    description:"This web application optimizes video streams to ensure smooth playback for users. It is powered by Adaptive Bitrate (ABR) algorithms, which dynamically adjust video quality based on the user's network conditions and device capabilities, delivering an optimal viewing experience.",
    projectType:"website",

    coverImg:"https://cdn.dribbble.com/userupload/15490262/file/original-7d10fc6f40b596e043c1333fd0b86945.png",
    github_url: "https://github.com/Bornmajor/optivideo",
    features:[],
    technologies:[],
    video_url:"",
    },
    {
    id:5,
    projectTitle:"Multichoice exams system",
    description:"The Multichoice Exam System is a web-based application that allows examiners to create and manage exams with multiple choice questions.",
    projectType:"website",

    coverImg:"https://cdn.dribbble.com/userupload/15490298/file/original-11b316faaa90792c59984c7d76470fe1.png",
    github_url: "https://github.com/Bornmajor/Online-mulitple-choice-quiz-system",
    features:[],
    technologies:[],
    video_url:"",
    },
    {
    id:6,
    projectTitle:"Offline cloud data sync app",
    description:"This project demonstrates how to build an Android cloud application with offline data persistence capabilities, similar to Google Keep and WhatsApp. The application utilizes a real-time database that ensures data is persistently stored locally even when the app is offline or restarted",
    projectType:"mobile",
    github_url: "https://github.com/Bornmajor/offline-data-sync-app",
    coverImg:"https://cdn.dribbble.com/userupload/15490353/file/original-9508bb7584a149f4e2a31008b0f773e1.png",

    features:[],
    technologies:[],
    video_url:"",
    },
    {
    id:7,
    projectTitle:"Live geosharing app",
    description:"Geosharing application enables users to share their location using an integrated Google Map, offering real-time updates of other users' locations. This feature ensures seamless and accurate location sharing, enhancing connectivity and coordination among users",
    projectType:"mobile",

    coverImg:"https://cdn.dribbble.com/userupload/15490427/file/original-200f5d630673212732fe4fd37da305b9.png",
    github_url: "https://github.com/Bornmajor/share-map-app",
    features:[],
    technologies:[],
    video_url:"",
    },
    {
    id:8,
    projectTitle:"Andriod local Music player",
    description:"Andriod/iOs local Music player application.Access local music files,Has basic player features e.g play,pause,skip,seek.Allow shuffling and repeat modes(Current track or entire queue)",
    projectType:"mobile",

    coverImg:"https://cdn.dribbble.com/userupload/15490793/file/original-d1bf21bf833619847b8be302e6b27216.png",
    github_url: "https://github.com/Bornmajor/music-player",
    features:[],
    technologies:[],
    video_url:"",
    },
    {
    id:8,
    projectTitle:"Trivia quiz game app",
    description:"Quiz game appThe Trivia Quiz Game mobile app is an engaging and educational platform that allows users to test their knowledge across a wide range of topics. Whether you're a science buff, a tech enthusiast, or interested in other major subjects, this app has something for everyone.",
    projectType:"mobile",

    coverImg:"https://cdn.dribbble.com/userupload/15491257/file/original-05939a8ab07ab2965db687cf5430705b.png",
    github_url: "https://github.com/Bornmajor/trivia-app",
    features:[],
    technologies:[],
    video_url:"",
    },
    {
    id:9,
    projectTitle:"Movie rating app",
    description:"Movie reviews app consume external api ",
    projectType:"mobile",

    coverImg:"https://cdn.dribbble.com/userupload/15491546/file/original-98d78075feaa50c3277686414eda3cdc.png",
    github_url: "https://github.com/Bornmajor/movie-rating-app",
    features:[],
    technologies:[],
    video_url:"",
    },
    {
    id:10,
    projectTitle:"E-banking app",
    description:"This simple online payment plaftorm that facilitates sending money between individuals",
    projectType:"mobile",
    github_url: "https://github.com/Bornmajor/mini-paypal-web-app",
    coverImg:"https://cdn.dribbble.com/userupload/15491878/file/original-6828024aceeee4cb6cd29781a9fd30f2.png",

    features:[],
    technologies:[],
    video_url:"",
    },
    {
    id:11,
    projectTitle:"Ecommerce store",
    description:"This PHP-based eCommerce platform is dedicated to offering a curated selection of handmade shoes and wallets. The store combines craftsmanship with modern technology to provide a seamless shopping experience for customers who appreciate quality and uniqueness",
    projectType:"website",
    shots:[

    ],
    coverImg:"https://cdn.dribbble.com/userupload/15492427/file/original-6a4bf92a10a546902d3b687c3c70bacf.png?resize=1504x729",
    github_url: "https://github.com/Bornmajor/polling-system",
    features:[],
    technologies:[],
    video_url:"",
    },
    {
    id:12,
    projectTitle:"Wesa pefa academy",
    description:"",
    projectType:"website",
    shots:[

    ],
    coverImg:"https://cdn.dribbble.com/userupload/17397771/file/original-6b7993151e4c6b035d3d496b3df243ed.png?resize=1504x712",
    github_url: "https://wesa-academy.netlify.app/",
    live_url:"https://wesa-academy.netlify.app/",
    features:[],
    technologies:[],
    video_url:"",
    },
    {
    id:13,
    projectTitle:"PixStream App",
    description:"PixStream is a React Native app designed to enhance content exploration while providing a seamless user experience, even in challenging network conditions. The app ensures users can resume their journey without losing progress or loading unintended new content when connectivity is disrupted",
    projectType:"mobile",
    shots:[

    ],
    coverImg:"https://res.cloudinary.com/dx8t5kvns/image/upload/v1732624419/figma%20designs/raoa7yet84sltpgwceht.png",
    github_url: "https://github.com/Bornmajor/pixstream",
    live_url:"",
    features:[],
    technologies:["React native"],
    video_url:"",
    },

    {
      id:14,
      projectTitle:"Maja Agency",
      description:"Maja Agency is a landing page for a tech company that offers a wide range of services UX/UI Design Logo Branding Motion Design Illustration Web and App Development The goal was to create a responsive, visually appealing, and functional landing page to promote Maja Agency's services",
      projectType:"website",
      shots:[
  
      ],
      coverImg:"https://res.cloudinary.com/dx8t5kvns/image/upload/v1733346675/figma%20designs/eq8h0zqwnqplff63skno.gif",
      github_url: "https://github.com/Bornmajor/maja-agency",
      live_url:"https://maja-agency.netlify.app/",
      features:[],
      technologies:["React","Figma"],
      video_url:"",
      },
      {
        id:15,
        projectTitle:"Local Connect landing page",
        description:"Local Connect is a modern and intuitive landing page designed to facilitate seamless connections between businesses and local suppliers. The platform showcases the key benefits, features, and testimonials, while also providing pricing plans and the option to request a demo for a better understanding of its capabilities.",
        projectType:"website",
        shots:[
    
        ],
        coverImg:"https://res.cloudinary.com/dx8t5kvns/image/upload/v1733900253/figma%20designs/egitkijqzl8xjnvuxcdf.png",
        github_url: "https://github.com/Bornmajor/local-connect",
        live_url:"https://localconnectapp.netlify.app/",
        features:[],
        technologies:["React","Figma","antd"],
        video_url:"",
        },
        {
          id:16,
          projectTitle:"Advocates Company landing page",
          description:"The website is a modern and professional landing page for Bunde Mangaro & Company Advocates, designed to engage visitors and provide essential information about the firm's legal services, team, and case studies. It also includes an interactive contact form to connect with potential clients.",
          projectType:"website",
          shots:[
      
          ],
          coverImg:"https://res.cloudinary.com/dx8t5kvns/image/upload/v1733347428/exkwi7s8vmbyorgywwuw.jpg",
          github_url: "https://github.com/Bornmajor/bundemangaro",
          live_url:"https://bundemangaro.netlify.app/",
          features:[],
          technologies:["React","Figma","antd"],
          video_url:"",
          },
          
      
    






    ]

const dribbbleData = [
  {
    id:1,
    projectTitle: "Valentine special",
    shots: [
    "https://cdn.dribbble.com/userupload/12782604/file/original-69d62b17bbcf292e348f75d52bc86a82.png",
    
    ],
    coverImg: "https://cdn.dribbble.com/userupload/12782604/file/original-69d62b17bbcf292e348f75d52bc86a82.png",
    description: "I'm excited to share the onboarding experience for FitLife, a personal fitness tracking app. The onboarding sequence introduces users to the app's key features, ensuring a smooth and engaging start to their fitness journey",
    tools: ["Figma"],
    video_url:""
    },  
    {
      id:2,
      projectTitle: "FitLife App Onboarding Screens",
      shots: [
      "https://cdn.dribbble.com/userupload/15225055/file/original-2c721b318002025526f13fa9f988d320.png",
      "https://cdn.dribbble.com/userupload/15224796/file/original-876d146e2f16c32a7b55adfc21a00b73.png?resize=752x",
      "https://cdn.dribbble.com/userupload/15224795/file/original-ec21434fac6a2b043450faf399aa68d5.gif"
      ],
      coverImg: "https://cdn.dribbble.com/userupload/15225055/file/original-2c721b318002025526f13fa9f988d320.png",
      description: "I'm excited to share the onboarding experience for FitLife, a personal fitness tracking app. The onboarding sequence introduces users to the app's key features, ensuring a smooth and engaging start to their fitness journey",
      tools: ["Figma"],
      video_url:""
      },

{
id:3,
projectTitle: "iRater movie app",
shots: [
"https://cdn.dribbble.com/userupload/12820667/file/original-953aa356cfd85da95cddf102582ace5a.png",
"https://cdn.dribbble.com/userupload/12827031/file/original-8173f955eeaa6506ef7e60ef8bc7c85b.png",
"https://cdn.dribbble.com/userupload/12836856/file/original-cb4ab83a022f81f0a1d1186a11dd1041.png"
],
coverImg: "https://cdn.dribbble.com/userupload/12820667/file/original-953aa356cfd85da95cddf102582ace5a.png",
description: "This project showcases an advanced e-commerce platform with integrated payment solutions.",
tools: ["Figma"]
},

{
  id:4,
  projectTitle: "Bible Study App",
  shots: [
  "https://cdn.dribbble.com/userupload/12984528/file/original-9127cbf99f367dee7a477cd39084c822.png",
  "https://cdn.dribbble.com/userupload/12984529/file/original-066c44dffcf0aee5d36ab03b32120fa8.png",
  "https://cdn.dribbble.com/userupload/12984634/file/original-d4c710b8955e447de30e5bfac99ac9f0.png",
  "https://cdn.dribbble.com/userupload/12984691/file/original-acdada7f1524cb4430de402d191323a4.gif"
  ],
  coverImg: "https://cdn.dribbble.com/userupload/12984528/file/original-9127cbf99f367dee7a477cd39084c822.png",
  description: "Project Beta is an innovative solution aimed at simplifying complex tasks using AI.",
  tools: ["Figma", "Adobe XD", "Adobe Photoshop"]
  },
{
  id:5,
  projectTitle: "Project swahili cuisines",
  shots: [
  "https://cdn.dribbble.com/userupload/14390909/file/original-a562d25b96db593e4d2464555fc34fad.png",
  "https://cdn.dribbble.com/userupload/15337190/file/original-b3cc9bbcd13bd6aa33543e7488faa2c5.png",
  "https://cdn.dribbble.com/userupload/15337514/file/original-af692efd5650d98c0aa7fa7686e3c09f.png"
  ],
  coverImg: "https://cdn.dribbble.com/userupload/15337190/file/original-b3cc9bbcd13bd6aa33543e7488faa2c5.png",
  description: "Swahili Cuisine is the new food delivery app that brings the delicious flavors of the Swahili coast straight to you, all from your phone!",
  tools: ["Figma", "Adobe XD", "Adobe Photoshop"],
  video_url:""
  },
{
  id:6,
  projectTitle: "PixStream App",
  shots: [
  "https://res.cloudinary.com/dx8t5kvns/image/upload/v1732624419/figma%20designs/raoa7yet84sltpgwceht.png",
  
  ],
  coverImg: "https://res.cloudinary.com/dx8t5kvns/image/upload/v1732624419/figma%20designs/raoa7yet84sltpgwceht.png",
  description: "PixStream is a React Native app designed to enhance content exploration while providing a seamless user experience, even in challenging network conditions. The app ensures users can resume their journey without losing progress or loading unintended new content when connectivity is disrupted",
  tools: ["Figma"],
  video_url:""
  }

];


const [showContactModal, setShowContactModal] = useState(false);
const [navBarIsOpen,setNavBarIsOpen] = useState(false);

const [showDribbleModal, setShowDribbleModal] = useState(false);

const handleDribbleModalClose = () => setShowDribbleModal(false);
const handleDribbleModalShow = () => setShowDribbleModal(true);

const toggleNavbar = () => setNavBarIsOpen(!navBarIsOpen);

return(
<MyContext.Provider value={{
showContactModal, setShowContactModal,
navBarIsOpen,setNavBarIsOpen,
toggleNavbar,
projectData,
dribbbleData,
showDribbleModal, setShowDribbleModal,handleDribbleModalClose, handleDribbleModalShow
}}>
{props.children}
</MyContext.Provider>
)
}


export default MyContext;