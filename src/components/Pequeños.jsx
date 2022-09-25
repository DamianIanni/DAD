import React,{Fragment} from "react";
import pic1 from '../images/Pequeño-1.jpeg';
import pic2 from '../images/Pequeño-2.jpeg';
import pic3 from '../images/Pequeño-3.jpeg';

export const Pequeños = () => {
    return(
        <Fragment>
            <div className="mainPequeños">
            <div className="container-down">
              Estos son solo unos ejemplos. Podemos realizar casi cualqueir idea que encuentres en Pinteres de melamina o pino !!
                </div>
                <div className="container-up">
                    <img className="contentContainer-jobsP" src={pic1} width="500" height="350" alt="" />
                    <img className="contentContainer-jobsP" src={pic2} width="500" height="350" alt="" />
                    <img className="contentContainer-jobsP" src={pic3} width="500" height="350" alt="" />
                </div>
            </div>
        </Fragment>
    )
}