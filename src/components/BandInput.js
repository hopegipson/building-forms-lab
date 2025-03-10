import React, { Component } from 'react'

class BandInput extends Component {

  constructor() {
    super();
    this.state = {
     name:'',
    };
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
  }

  render() {
    return(
      <div>
      <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>Add Band:</label>
            <input type="text" 
             onChange={this.handleChange} value={this.state.name}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.name}

        </div>
    )
  }
}

export default BandInput
