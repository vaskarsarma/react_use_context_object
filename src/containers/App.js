import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import classes from "./App.css";
import Cockpit from "../components/Cockpit/Cockpit";
import AUX from "../hoc/Hoc-aux";
import WithClasses from "../hoc/WithClasses";

// React V16.3 featuers
export const AuthContext= React.createContext(false);

/*function App() {
  return (
    <div className="App">
      <h1>Hello, Test application</h1>
    </div>
  );
}*/

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.JS] - inside constructor");
    this.state = {
      persons: [
        { id: "sdsdsd1", name: "vaskar1", age: 41 },
        { id: "sdsdsd2", name: "vaskar2", age: 42 },
        { id: "sdsdsd3", name: "vaskar3", age: 43 }
      ],
      showPerson: false,
      toggleClickCount: 0,
      authenticated: false
    };
  }

  componentWillMount() {
    console.log("[App.JS] - inside componentWillMount");
  }

  componentDidMount() {
    console.log("[App.JS] - inside componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Update App.JS] - inside shouldComponentUpdate");
    return (
      nextState.persons !== this.state.persons ||
      nextState.showPerson !== this.state.showPerson ||
      nextState.authenticated !== this.state.authenticated
    );
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("[Update App.JS] - inside componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("[Update App.JS] - inside componentDidUpdate");
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  toggleNameHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState((prevState, props) => {
      return {
        showPerson: !doesShow,
        toggleClickCount: prevState.toggleClickCount + 1
      };
    });
    console.log(this.state.toggleClickCount);
  };

  deleteNameHandler = personIndex => {
    //const persons=this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  loginHandler =() =>{
    console.log("login handler clicked : " + this.state.authenticated);
    const isAuthenticated= this.state.authenticated;
    this.setState({authenticated: !isAuthenticated});
    console.log("login handler clicked : " + this.state.authenticated);
  }

  render() {
    console.log("[App.JS] - inside render");

    let person = null;

    if (this.state.showPerson) {
      person = (
        <Persons
          persons={this.state.persons}
          clicked={this.deleteNameHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <AUX>
        <button
          onClick={() => {
            this.setState({ showPerson: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          title={this.props.title}
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.toggleNameHandler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {person}
        </AuthContext.Provider>
      </AUX>
    );

    //return React.createElement("div",{ className: 'App'},React.createElement("h1",{},"Hi,How are you?"));
  }
}

export default WithClasses(App, classes.App);
