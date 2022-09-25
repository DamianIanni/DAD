import React, { Fragment, useState } from "react";
import { Jobs } from "./Jobs";
import { About } from "./AboutUs"
import { Pequeños } from "./Pequeños";


export const MoiddlebarHww = () => {
    const [grandes, setGrandes] = useState(false)
    const [otros, setOtros] = useState(false)

    const show = () => {
        setGrandes(true) && setOtros(false);
        console.log(otros)
    }

    const show2 = () => {
        setOtros(true) && setGrandes(false);
        console.log(grandes)
    }

    return(
<Fragment>
        <div className="middlebarContainer">
            <div className="textMiddlebar hvr-grow">
                <button className="text" onClick={show}>Grandes</button>
            </div>
        </div>
        {grandes ? <Jobs/> : null}
        <div className="middlebarContainer">
          <div className="textMiddlebar hvr-grow">
          <button className="text" onClick={show2}>Pequeños</button>
          </div>
      </div>
      {otros ? <Pequeños/> : null}
      </Fragment>
    )
}