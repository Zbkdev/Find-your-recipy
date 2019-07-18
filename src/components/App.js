import React, { Component } from "react";
import "./App.css";
import RecipyList from "./RecipyList.js";

const API = "http://www.recipepuppy.com/api/";
const PROXY = "https://cors-anywhere.herokuapp.com/";

class App extends Component {
  state = {
    recipes: null,
    text: ""
  };

  filter = e => {
    this.setState(
      {
        text: e.target.value
      },
      this.handleDatafetch
    );
  };

  handleDatafetch = () => {
    const { text } = this.state;
    fetch(PROXY + API + "?i=" + text)
      .then(response => {
        if (response.ok) {
          //        console.log(response);
          return response;
        }
        throw Error(response.status);
      })
      .then(response => response.json())
      .then(data => {
        //      console.log(data);
        this.setState({
          recipes: data.results
        });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this.handleDatafetch();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.text !== this.state.text) {
      this.handleDatafetch();
    }
  }

  render() {
    const recipes = this.state.recipes;

    return (
      <div>
        <header>
          <h1 className="head__text">Find your recipy</h1>
          <input
            type="text"
            placeholder="Search.. expample: nuts, eggs ,milk"
            onChange={this.filter}
          />
        </header>
        {recipes && <RecipyList recipes={recipes} />}
      </div>
    );
  }
}

export default App;
