import React, {useState, Fragment } from 'react'
import pic from '../images/image-0.jpeg'
import pic1 from '../images/image-1.jpeg'
import pic2 from '../images/image-2.jpeg'
import pic3 from '../images/image-3.jpeg'
import pic4 from '../images/image-4.jpeg'
import pic7 from '../images/image-7.jpeg'
import pic9 from '../images/image-9.jpeg'
import pic10 from '../images/image-10.jpeg'
import pic11 from '../images/image-11.jpeg'

export const Jobs = () => {



  return (
    <Fragment>
      <div className="mainContainer-jobs">
        <div className="contentGrid-jobs">
          <div className="contentContainer-jobs">
            <img src={pic11} width="500" height="350" alt="" />
          </div>
          <div className="contentContainer-jobs">
            <img src={pic10} width="500" height="350" alt="" />
          </div>
          <div className="contentContainer-jobs">
            <img src={pic2} width="500" height="350" alt="" />
          </div>
          <div className="contentContainer-jobs">
            <img src={pic3} width="500" height="350" alt="" />
          </div>
          <div className="contentContainer-jobs">
            <img src={pic4} width="500" height="350" alt="" />
          </div>
          <div className="contentContainer-jobs">
            <img src={pic1} width="500" height="350" alt="" />
          </div>
          <div className="contentContainer-jobs">
            <img src={pic7} width="500" height="350" alt="" />
          </div>
          <div className="contentContainer-jobs">
            <img src={pic9} width="500" height="350" alt="" />
          </div>
          <div className="contentContainer-jobs">
            <img src={pic} width="500" height="350" alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
