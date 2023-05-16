import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import image1 from '../assets/carousel/image1.jpg'
import image2 from '../assets/carousel/image2.webp'
import image3 from '../assets/carousel/image3.webp'
import './carousel.css'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'

const PrevBtn=({className,onClick})=>{
    
    return(<div className={className} onClick={onClick}>
        <ArrowBackIos style={{color:'black'}} />
    </div>)
}

const NextBtn=({className,onClick})=>{
    
    return(<div className={className} onClick={onClick}><ArrowForwardIos style={{color:'black'}}/></div>)
}


const Carousel = ()=>{

    const arr = [image1,image2,image3]

    return(
        <div className='carousel-container'>
            <Slider autoplay={true} autoplaySpeed={2000}
            infinite
           
            prevArrow={<PrevBtn/>}
            nextArrow={<NextBtn/>}

            >
                
                    {arr.map((img)=>(
                    <div>
                        <img src={img} style={{height:'50vh',width:'100%'}}/>
                    </div>
                    ))}
                                    
            </Slider>
        </div>
    )
};
export default Carousel