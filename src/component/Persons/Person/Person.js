import Person from "../Persons";

const persons = (props) => 

  props.persons.map((person, index) => {
    return <Person
        clicked={() => props.clicked(person.id)}
        key={props.persons[index].id}
        changed={(e) => props.changed(e, person.id)}
        name={person.name}
        age={person.age}
      />
    
  });


export default persons;
