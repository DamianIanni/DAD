import React from "react";
import { HashLink } from 'react-router-hash-link';

export const Head = () => {
    return (
        <div className="head">
            <div className="DAD">
                <h1 className="textDAD">DAD</h1>
            </div>
            <div className="woodwork">
                <h3 className="textWW">WoodWork</h3>
            </div>
            {/* <div className="navHashLink">
                <HashLink to='#ComoTrabajamos' smooth className="hashLink">
                <h5 className="textWWlink hvr-grow">Metodologia</h5>
                </HashLink>
            </div> */}
        </div>
    )
}