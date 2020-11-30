import { Component } from 'react';
import './Persons.css'
import AuthContext from '../../context/AuthContext'

class Person extends Component {

  static contextType = AuthContext;

  render(){
    console.log(this.context.auth);
    return (
        <div onClick={this.props.clicked}
         className="Person">
{
  this.context.auth ? <p> Authenticated </p> :
         <p>  Please log in </p>

}         <input onChange={this.props.changed}></input>

         <p> My name is {this.props.name} and i'm {this.props.age} years old </p>
          </div>
        )}
}

export default Person;