import { Component } from "react";
import "./App.css";
import AuthContext from '../context/AuthContext';

import Person from "../component/Persons/Person/Person";
import Cockpit from '../component/cockpit/Cockpit'
// import UserOutput from "./UserOutput/UserOutput";
// import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "thilina", age: 23 },
      { id: "2", name: "dilshan", age: 25 },
      { id: "3", name: "heiya", age: 27 },
    ],
    showPerson: false,
    isAuth:false,
  };

  toggleShowHandler = () => {
    let showPer = !this.state.showPerson;
    this.setState({
      showPerson: showPer,
    });
  };

  changeNameInstance = (event, id) => {
    let persons = [...this.state.persons];
    let personIndex = persons.findIndex((p) => p.id === id);
    persons[personIndex].name = event.target.value;
    
    this.setState((prevState, props)=>{
      return {
        persons: persons,
      }
    });
  };

  deletePerson = (id) => {
    console.log(id);
    let persons = [...this.state.persons];
    let indexNum = persons.findIndex((p) => p.id === id);
    persons.splice(indexNum, 1);

    this.setState({
      persons: persons,
    });
  };

  loginHandler = ()=>{
    let auth = !this.state.isAuth
    this.setState({
      isAuth :auth
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="a"> I am react app </h1>

        
        <div>
          <button onClick={this.loginHandler}> {!this.state.isAuth ? 'Login':'Logout'} </button>
        </div>

        <Cockpit 
        toggleShow={this.toggleShowHandler}
        showPerson={this.state.showPerson}
        />
        
        <AuthContext.Provider value={{
          auth:this.state.isAuth,
          login: this.loginHandler
        }}>
        
        {this.state.showPerson ? (
          <Person
          changed={this.changeNameInstance}
          clicked={this.deletePerson}
          persons={this.state.persons}
          />
          ) : null}
          </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
