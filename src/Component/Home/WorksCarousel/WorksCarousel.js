import React from 'react';
import work1 from '../../../images/carousel-1.png';
import work2 from '../../../images/carousel-2.png';
import work3 from '../../../images/carousel-3.png';
import work4 from '../../../images/carousel-4.png';
import work5 from '../../../images/carousel-5.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const WorksCarousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div style={{ marginTop: '100px 0' }}>
            <div style={{ height: '724px', backgroundColor: '#111430' }}>
                <h3 style={{ color: '#fff', padding: '107px 0 81px 0', textAlign: 'center' }}>Here are some of<span style={{ color: '#7AB259' }}> our works</span></h3>
                <div style={{display:'contents'}}>
                    <Slider {...settings} autoplay='1000'>
                        <div>
                            <img src={work1} class=" w-100" alt="..." style={{ height: "335px", padding: '0 25%' }} />
                        </div>
                        <div>
                            <img src={work2} class=" w-100" alt="..." style={{ height: "335px", padding: '0 25%' }} />
                        </div>
                        <div>
                            <img src={work3} class=" w-100" alt="..." style={{ height: "335px", padding: '0 25%' }} />
                        </div>
                        <div>
                            <img src={work4} class=" w-100" alt="..." style={{ height: "335px", padding: '0 25%' }} />
                        </div>
                        <div>
                            <img src={work5} class=" w-100" alt="..." style={{ height: "335px", padding: '0 25%' }} />
                        </div>

                    </Slider>
                </div>














                {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active" style={{height: "335px" , width:"100%"}}>
                            <img src={work1} class=" w-50" alt="..." style={{height: "335px" , width:"100%"}}/>
                        </div>
                        <div class="carousel-item" style={{height: "335px"}}>
                            <img src={work2} class=" w-50" alt="..." style={{height: "335px" , width:"100%"}}/>
                        </div>
                        <div class="carousel-item" style={{height: "335px"}}>
                            <img src={work3} class=" w-50" alt="..." style={{height: "335px" , width:"100%"}}/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div> */}
            </div>
        </div>
    );
};

export default WorksCarousel;