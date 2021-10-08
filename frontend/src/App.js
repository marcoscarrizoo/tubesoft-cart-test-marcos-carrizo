import React from 'react';
import {Route} from 'react-router-dom'
import { ThemeProvider } from "@material-ui/styles";
import theme from "./themeConfig";
import LandingPage  from './components/ladingpage/LandingPage';
import Home from './components/home/Home'

import './App.css';

function App() {
  return (
    <React.Fragment>
       <ThemeProvider theme={theme}>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/catalog' component={Home}/>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
