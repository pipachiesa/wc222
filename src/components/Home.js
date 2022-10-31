import React from 'react'
import Carousel from './Carousel'
import { Link } from 'react-router-dom'

const Home = () => {
return (
    <div>
        <Carousel></Carousel>
        <a className='btn mt-5 btn-color'><Link to={'/Shop'}>SHOP NOW</Link></a>
    </div>
)
}

export default Home