import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
// import { Jobs } from './components/Jobs';
// import { About } from './components/AboutUs';
// import { HowWeWork } from './components/Hwework';
import './index.css'

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

//   <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<App />} />
//     <Route path="/Jobs" element={<Jobs/>} />
//     <Route path="/AboutUs" element={<About/>} />
//     <Route path="/Hwework" element={<HowWeWork/>} />
//   </Routes>
// </BrowserRouter>,

  <React.StrictMode>
    <App />
  </React.StrictMode>
);

