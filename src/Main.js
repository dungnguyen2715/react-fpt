import React, { Component } from "react";
import Players from "./Players";
import PlayersPresentation from "./PlayersPresentation";
import { ListOfPlayers } from "./shared/ListOfPlayers";

export class Main extends Component {
  constructor() {
    super();

    this.state = {
      players: ListOfPlayers,
    };
  }
  render() {
    return <PlayersPresentation players={this.state.players} />;
  }
}

export default Main;
