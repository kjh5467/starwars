import React, { Component } from "react";
import "./App.css";
import CardList from "../components/CardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      isLoaded: false,
      error: null
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/")
      .then(res => res.json())
      .then(
        res => {
          this.setState({
            isLoaded: true,
            people: res.results
          });
        },

        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "Center", padding: "1.5rem" }}> Star Wars </h1>
        <CardList characters={this.state.people} />
      </div>
    );
  }
}

export default App;
