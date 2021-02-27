import React from "react";
import Card from "../components/Card"
import classes from '../css/pages.module.css';




function Home () {

return (
  <div>
    <div className={classes.projects}>

        <Card />
    </div>
      <div className={classes.about} >
        <Card/>

      </div>
      <div className={classes.contact} >
        <Card/>
      </div>
  </div>
  
    );  

};

export default Home;