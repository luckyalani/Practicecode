import React, { useEffect,createContext,useContext, useState  } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import App from './App';
import Demo from './Demo';





const Routing = () => {


  const ThemeContext = createContext(null);
  const [theme ,settheme]=useState("Luckyalani")

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<App/>} />
          <Route exact path="/demo" element={
            <ThemeContext.Provider value={theme}>
              <Demo Themevalue={ThemeContext}/>
            </ThemeContext.Provider>
            
            
            } />


          </Routes>
      </div>
    </Router>
  );
};

export default Routing;