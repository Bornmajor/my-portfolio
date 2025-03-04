import React from 'react'
import SkillCard from './SkillCard'
import html5Img from '../assets/images/html5.png'
import cssImg from '../assets/images/css3.png'
import jsImg from '../assets/images/js.png'
import phpImg from  '../assets/images/php.png'
import larvImg from '../assets/images/laravel.png'
import nodeImg from '../assets/images/node-js.png'
import javaImg from '../assets/images/java.png'
import reactImg from '../assets/images/react.png'
import reactNatImg from '../assets/images/react-native.png'
import wordPressImg from '../assets/images/wordpress.png'
import androidImg from '../assets/images/android.png'
import iosImg from '../assets/images/apple.png' 
import fireImg from '../assets/images/firebase.png'
import uxImg from  '../assets/images/ux.png'
import exImg from '../assets/images/express.png'
import gitImg from '../assets/images/github.png'
import figmaImg from '../assets/images/figma_logo.2765830775b79febf3a6.png'

const LargeScreenSkills = () => {
  return (
    <div className='lg_skill_container'>
        
        <div className='lg_skill_card_container'>

      <SkillCard title="HTML5" imgUrl={html5Img}/>
      <SkillCard title="CSS3" imgUrl={cssImg}/>
      <SkillCard title="Javascript" imgUrl={jsImg}/>
      <SkillCard title="React js" imgUrl={reactImg}/>


      <SkillCard title="PHP" imgUrl={phpImg}/>
      <SkillCard title="Laravel" imgUrl={larvImg}/>
      <SkillCard title="Node js" imgUrl={nodeImg}/>
      <SkillCard title='Express js' imgUrl={exImg}/>
      <SkillCard title="Wordpress" imgUrl={wordPressImg}/>
      
      <SkillCard title="Java" imgUrl={javaImg}/>
      <SkillCard title="React Native" imgUrl={reactNatImg}/>
      <SkillCard title="Android" imgUrl={androidImg}/>
      <SkillCard title="iOs" imgUrl={iosImg}/>

      <SkillCard title='Firebase' imgUrl={fireImg}/>
      <SkillCard title='Figma' imgUrl={figmaImg}/>
      <SkillCard title='Git' imgUrl={gitImg}/>
     



        </div>

     

    </div>
  )
}

export default LargeScreenSkills