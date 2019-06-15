import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  Home from './Home';
import CampusList from './campusList';
import Contact from './contact';
import studentList from './StudentList';


const Main = () => (
  <Switch>
    <Route exact path="/Home" component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/campusList" component={CampusList} />
    <Route path="/StudentList" component={studentList} />
    
          

    
</Switch>
)

export default Main;
