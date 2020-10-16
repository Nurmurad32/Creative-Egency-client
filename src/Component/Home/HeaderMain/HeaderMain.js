import React from 'react';
import './HeaderMain.css';
import frame from '../../../images/logos/Frame.png'
import {useSpring, animated} from 'react-spring'



const HeaderMain = () => {
    const fade = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        
      })

    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center mr-0 ">
            <div className="col-md-4 offset-md-1 ">
                <h1 className="text-brand" style={{fontWeight:'48px'}}>Let’s Grow Your<br/>Brand To The<br/>Next Level</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Purus commodo ipsum duis <br/> laoreet maecenas. Feugiat </p>
                {/* <animated.h1 style={props}>hello</animated.h1> */}
                <button  className="btn btn-brand" ><animated.span style={fade}>Hire us</animated.span> </button>
            </div>
            <div className="col-md-6 ">
                <img src={frame} alt="Doctor's Chair image" height="422.8" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;