import React from 'react'

const Carousel = () => {
return (
<div className="mt-5 carousel w-full">
<div id="slide1" className="carousel-item relative w-full">
    <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt94c11c2170f85992/630de98ec14ae31b7dbea328/Japan_WC_kits.jpg?format=jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide4" className="btn btn-circle">❮</a> 
    <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
</div> 
<div id="slide2" className="carousel-item relative w-full">
    <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6a65244b8f5af477/6315c418cb12cf6e90415e2c/goal---web-two-way-split--573aa446-cab9-44c9-976a-14a7f64b953d.jpeg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide1" className="btn btn-circle">❮</a> 
    <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
</div> 
<div id="slide3" className="carousel-item relative w-full">
    <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt1023fb25cc08e41a/62c84aa82690e04031415a5b/Argentina-2022-world-cup-kit.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide2" className="btn btn-circle">❮</a> 
    <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
</div> 
<div id="slide4" className="carousel-item relative w-full">
    <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb9a0f6657041c98b/630dfab352364a489a40066d/Germany_World_Cup_2022_Away_Kit.jpg?format=jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide3" className="btn btn-circle">❮</a> 
    <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
</div>
</div>
)
}

export default Carousel