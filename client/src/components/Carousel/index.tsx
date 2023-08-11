import React, { useState } from 'react';
import './index.css';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';



const Carousel = ({ detail }: { detail:any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mouse, setMouse] = useState(false);
  const [num,setNum] = useState(0)
  // console.log('detail',detail.data);
  
  
  const images = [
    // 'http://localhost:3000/static/media/cat.14a0caec35324158349a.jpg', 
    // 'http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg', 
    detail && "./upload/"+ detail.img
    ];
  // const images = detail[0]
  

  const onNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const onPrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  function handleLeave() {
    setMouse(true);
    // console.log(111);
    
    setTimeout(() => {
      setMouse(false);
    }, 500);
  }
  
  const handleDotClick = (index:any) => {
    setCurrentIndex(index);
  };
  
  let leftlen = (1250*0.65-images.length*20) / 2
  

  return (
    <div 
        className="carousel" 
        onMouseLeave={handleLeave} 
        style={{backgroundImage:`url(${images[currentIndex]})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%'}}
    >
      <button 
        onClick={onPrevClick} 
        className={mouse ? 'lastOne arrow last-leave' : 'lastOne arrow'}
        >
          <LeftOutlined />
        </button>
        <button
          onClick={onNextClick}
          className={mouse ? 'nextOne arrow next-leave' : 'nextOne arrow'}
        >
          <RightOutlined />
        </button>
        {/* {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          />
        ))} */}
        <div className={mouse ? 'numSize numSize-leave' : 'numSize'}>{currentIndex+1}/{images.length}</div>
        <ul className="points" style={{left:leftlen+'px'}}>
          {images.map((_:any, index:any) => (
            <li
              key={index}
              className={index === currentIndex ? 'active' : ''}
              onClick={() => handleDotClick(index)}          
            ></li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Carousel;