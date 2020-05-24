import React, { Component } from "react";
import classes from "./Person.css";
import AUX from "../../../hoc/Hoc-aux";
import WithClasses from "../../../hoc/WithClasses";
import PropTypes from "prop-types";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.JS] - inside constructor");
    this.personTextbox= React.createRef();
  }

  componentWillMount() {
    console.log("[Person.JS] - inside componentWillMount");
  }

  componentDidMount() {
    console.log("[Person.JS] - inside componentDidMount");
    if (this.props.position == 0) this.personTextbox.current.focus();
  }

  render() {
    console.log("[Person.JS] - inside render");
    return (
      <AUX>
        {this.props.isAuthnticated? 
        <h2> I am Authenticated</h2> : null }  
        
        <h2 onClick={this.props.click}>
          My name is {this.props.name} and I am {this.props.age} years old!!!
        </h2>
        <p>{this.props.children}</p>
        <input ref={this.personTextbox}
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        />
        {/* <h2>My name is Vaskar Sarma and I am {Math.floor(Math.random() * 30)} years old.</h2> */}
      </AUX>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default WithClasses(Person, classes.Person);
