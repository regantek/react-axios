import Axios from 'axios';
import React, { Component } from 'react'

class PersonDeleteList extends Component {
    state = {
        id: '',
    }
    handleChange = event => {
        this.setState({id: event.target.value});
    }
    handleSubmit = event => {
        event.preventDefault();

        Axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
            .then(res => {
                console.log(res)
                console.log(res.data)})

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
                
            </div>
        )
    }
}

export default PersonDeleteList
