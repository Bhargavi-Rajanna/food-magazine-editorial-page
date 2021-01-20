import React, {useState , useEffect} from 'react';
import  './Booklet.scss';
import { data } from '../../data.js';

const Booklet = () => {
    const [slideNumber , setSlideNumber]=useState(0);
    const [startIndex , setStartIndex]=useState(0);
   
    const showNextSlides = ()=>{
        if(slideNumber <= data.length){
            setStartIndex(startIndex =>slideNumber );
             setSlideNumber(prevValue => prevValue + 2);
        }
        
    }
    const showPrevSlides = ()=>{
        if(slideNumber >= 2){
            setSlideNumber(slideNumber => slideNumber - 2);
            setStartIndex(startIndex=>startIndex-2);
        }
        
    }

   const LoadMore = ()=>{
        if (window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight) {
        setSlideNumber(slideNumber => slideNumber + 2);
      }
   }
  
    useEffect(()=>{
        showNextSlides();
        showPrevSlides();
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", LoadMore);
        return () => {
          window.removeEventListener("scroll", LoadMore);
        };
    });

    return (
        <>
        <div  className="grid-container">
           { data.slice(startIndex,slideNumber).map( (data , index) => {
         return (
           
               <div className="grid-item" key={`key-${index}`}>
            
                <div  className="title-container">
                    <p className='sub-title'>{data.subTitle}</p>
                    <p className='slide-title'>{data.slideTitle}</p>
                </div>
                <img src={data.image_url} className="grid-item-image" alt='food-img'></img>  
                <div className ='description-container'>
                    <p className="description">{data.description}</p>
                    <p className='overlay-num'>{data.slideOverlayNum}</p>
                </div>
                
                 {/* <img src={arrow} onClick={arrowClickHandler}  className="arrow" alt="arrow" /> */}
                <div className="arrow-container">
                    <svg className="arrow" onClick={showNextSlides}  xmlns="http://www.w3.org/2000/svg" width="51.497" height="30.254" viewBox="0 0 51.497 30.254">
                    <g>
                        <g>
                            <path fill="#1d1d1d" d="M130.911 23.739L107.994.823a2.823 2.823 0 0 0-3.984 0l-1.688 1.687a2.821 2.821 0 0 0 0 3.984l19.244 19.244L102.3 45a2.824 2.824 0 0 0 0 3.984l1.688 1.687a2.823 2.823 0 0 0 3.984 0l22.938-22.937a2.843 2.843 0 0 0 0-4z" transform="rotate(90 76.488 -24.99) translate(101.478) translate(-101.478)"/>
                        </g>
                    </g>
                    </svg>
                    {slideNumber > 2 ? 
                    
                    <svg className="arrow arrow-up" onClick={showPrevSlides}  xmlns="http://www.w3.org/2000/svg" width="51.497" height="30.254" viewBox="0 0 51.497 30.254">
                    <g>
                        <g>
                            <path fill="#1d1d1d" d="M130.911 23.739L107.994.823a2.823 2.823 0 0 0-3.984 0l-1.688 1.687a2.821 2.821 0 0 0 0 3.984l19.244 19.244L102.3 45a2.824 2.824 0 0 0 0 3.984l1.688 1.687a2.823 2.823 0 0 0 3.984 0l22.938-22.937a2.843 2.843 0 0 0 0-4z" transform="rotate(90 76.488 -24.99) translate(101.478) translate(-101.478)"/>
                        </g>
                    </g>
                    </svg> : ''
                 }

                </div>

            </div>
        
           )
           
        })
        } 
        </div>
        </>
    )
}
export default Booklet;
