import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jfif"
import "react-responsive-carousel/lib/styles/carousel.min.css"


const Services = () => {
  return (
    <div >
        
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} showThumbs={false} interval={1000}>
            <div>
                <img src={img1} alt="Digital Marketing" />
                <p className='legend'>Digital Marketing</p>
            </div>
            <div>
                <img src={img2} alt="Graphic Design" />
                <p className='legend'>Graphic Design</p>
            </div>



        </Carousel>
        
        
        </div>
  )
}

export default Services