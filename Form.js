import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Awesome Title" };
  }
  handleChange = event => {
    this.setState({ title: event.target.value.replace("*", "") });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <label htmlFor="title">Title :</label>
        <input
          id="title"
          type="text"
          onChange={this.handleChange}
          value={this.state.title}
        />
      </div>
    );
  }
}

export default Form;
