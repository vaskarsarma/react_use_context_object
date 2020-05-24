import React from "react";
import classes from "./Cockpit.css";
import AUX from '../../hoc/Hoc-aux';

const Cockpit = props => {
  let btnclass = classes.Button;
  if (props.showPerson) 
    btnclass = [classes.Button, classes.red].join(' ');

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <AUX>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>Testing My application</p>
      <button className={btnclass} onClick={props.clicked}>
        Toggle Person
      </button>
      <button onClick={props.login} >Log In</button>
    </AUX>
  );
};

export default Cockpit;
