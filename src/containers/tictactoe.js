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
    const tiles = this.state.tiles;
    console.log(tiles)
    if (tiles[0].img && tiles[1].img && tiles[2].img === ("/images/X.png")) {
      console.log('game won0')
    } else if(tiles[0].img && tiles[1].img && tiles[2].img === ("/images/O.png")) {
      console.log('game won 1')
    } else if(tiles[3].img && tiles[4].img && tiles[5].img === ("/images/X.png")) {
        console.log('game won 2')
    } else if(tiles[3].img && tiles[4].img && tiles[5].img === ("/images/O.png")) {
      console.log('game won 2')
    } else if(tiles[6].img && tiles[7].img && tiles[8].img === ("/images/X.png")) {
      console.log('game won')
    } else if (tiles[6].img && tiles[7].img && tiles[8].img === ("/images/O.png")) {
        console.log('game won')
    } else if (tiles[0].img && tiles[3].img && tiles[6].img === ("/images/X.png")) {
      console.log('game won')
    } else if (tiles[0].img && tiles[3].img && tiles[6].img === ("/images/O.png")) {
      console.log('game won3')
    } else if(tiles[1].img && tiles[4].img && tiles[7].img === ("/images/X.png")) {
      console.log('won')
    } else if (tiles[1].img && tiles[4].img && tiles[7].img === ("/images/O.png")) {
      console.log('game won4')
    } else if(tiles[2].img && tiles[5].img && tiles[8].img === ("/images/X.png")) {
      console.log('game won')
    } else if (tiles[2].img && tiles[5].img && tiles[8].img === ("/images/O.png")) {
      console.log('game won5')
    } else if (tiles[0].img && tiles[4].img && tiles[8].img === ("/images/X.png")) {
      console.log('won')
    } else if(tiles[0].img && tiles[4].img && tiles[8].img === ("/images/O.png")) {
      console.log('game won6')
    } else if(tiles[2].img && tiles[4].img && tiles[6].img === ("/images/X.png")) {
      console.log('game won')
    } else if (tiles[2].img && tiles[4].img && tiles[6].img === ("/images/O.png")) {
      console.log('game won7')
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
