import React, { Component } from 'react'
import axios from 'axios'

class PersonPostList extends Component {
    state = {
        name: '',
    }
    handleChange = event => {
        this.setState({name:event.target.value})
    }
    handleSubmit = async event => {
        event.preventDefault();

        const user = {
            name: this.state.name
        };
        const response = await axios.post(`https://jsonplaceholder.typicode.com/users`, { user });
        console.log(response.data);
      
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                Person Name:
               <input type="text" name="name" onChange={this.handleChange} />
              </label>
              <button type="submit">Add</button>
        </form>
                
            </div>
        )
    }
}

export default PersonPostList
