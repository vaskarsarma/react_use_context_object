import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.JS] - inside constructor');
  }

  componentWillMount() {
    console.log('[Persons.JS] - inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.JS] - inside componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[Updated] - inside componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Updated] - inside shouldComponentUpdate', nextProps, nextState);
    return nextProps.persons !== this.props.persons ||
    nextProps.clicked !== this.props.clicked ||
    nextProps.changed !== this.props.changed;
  }

  componentWillUpdate(nextProps,nextState){
    console.log('[Updated] - inside componentWillUpdate', nextProps, nextState); 
  }

  componentDidUpdate(){
    console.log('[Updated] - inside componentDidUpdate'); 
  }

  render() {
    console.log('[Persons.JS] - inside render');
    return (
      this.props.persons.map((p, index) => {
        return (
          <Person
            click={() => this.props.clicked(index)}
            position={index}
            name={p.name}
            age={p.age}
            key={p.id}
            change={event => this.props.changed(event, p.id)}
          />
        );
      })
    )
  };
}


export default Persons;
