import React, { Component } from "react";
import Axios from "axios";

class PersonList extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    let response = Axios.get(`https://jsonplaceholder.typicode.com/users`);
    let { data } = response.data;
    this.setState({ persons: data });
  }

  
  

  render() {
    return (
      <ul>
        {this.state.persons ? (
          this.state.persons.map((person) => (
            <li key={person.id}>{person.name} </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    );
  }
}

export default PersonList;
