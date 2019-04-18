import React, {Component} from "react";
import Board from "../components/Board.js";

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
    tiles: [
      {"1": null, img: null, id: 1},
      {"2": null, img: null, id: 2},
      {"3": null, img: null, id: 3},
      {"4": null, img: null, id: 4},
      {"5": null, img: null, id: 5},
      {"6": null, img: null, id: 6},
      {"7": null, img: null, id: 7},
      {"8": null, img: null, id: 8},
      {"9": null, img: null, id: 9},
    ],
    previousImage: true
  }
  this.updateImage = this.updateImage.bind(this)
  }

  updateImage(event) {
    if (this.state.previousImage) {
      this.setState({previousImage: false})
    } else {
      this.setState({previousImage: true})
    }
    const allTiles = this.state.tiles;
    const target = event.target.id;

    for (const tile of allTiles) {
      if (tile.id == target) {
        const image = this.getCorrectImage("o")
        tile.img = image.url;
      }
    }
    this.checkGameWon()
    this.setState({tiles: allTiles})
  }

  checkGameWon() {
    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (const combo of combos) {
      this.runThroughCombo(combo)
    }
  }

  runThroughCombo([a, b, c]) {
    const tiles = this.state.tiles;
    if ((tiles[a].img === ("/images/X.png")) && (tiles[b].img === ("/images/X.png")) && (tiles[c].img === ("/images/X.png"))) {
        console.log('X has won')
    } else if((tiles[a].img === ("/images/O.png")) && (tiles[b].img === ("/images/O.png")) && (tiles[c].img === ("/images/O.png"))) {
        console.log('O has won')
      }
    }
  getCorrectImage() {
    // const img = ["https://image.shutterstock.com/image-vector/cross-sign-element-red-x-260nw-567030823.jpg",
    // "http://pluspng.com/img-png/circle-png-circle-png-hd-1600.png"];
    const img = ["/images/X.png", "/images/O.png"]
    if (this.state.previousImage) {
      return {url: img[1], valueOfImage: "o"}
    } else {
      return {url: img[0], valueOfImage: "x"}
    }
  }

  render() {

    let image = this.getCorrectImage()
    return(
      <div className="board">
        <Board
        currentImgUrl={image.url}
        valueOfImage={image.valueOfImage}
        tiles={this.state.tiles}
        updateImage={this.updateImage}
        />
      </div>
    )
  }
};

export default TicTacToe;
