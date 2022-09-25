import React, { Fragment } from "react";
import { Logos } from "./components/Logos";
import './index.css'
import { Jobs } from "./components/Jobs";
import { About, About1 } from "./components/AboutUs";
import { HowWeWork } from "./components/Hwework";
import { Head } from "./components/Head";
import { MoiddlebarHww } from "./components/Middlebar";
import { BrowserRouter } from "react-router-dom";

export const App = () => {


  return (
    <BrowserRouter>
      <Fragment>
        <Head />
        <div className="main-container">
          <Logos />
          <About1 />
          <MoiddlebarHww/>
          <About />
          <HowWeWork />
        </div>
      </Fragment>
    </BrowserRouter>
  );
};
