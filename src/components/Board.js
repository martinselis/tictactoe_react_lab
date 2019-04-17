import React from "react";

const Board = (props) => {
// props.tiles = [{1: null, img: null, id: 1}]
  const tilesGrid = {
    display: "grid",
    gridTemplateColumns: '1fr 1fr 1fr',
    border: '1px solid black',
    width: '384px',
    height: '384px'
  }

  return(
    <div className="tiles" style={tilesGrid} onClick={props.updateImage}>
      {props.tiles.map(tile => {
        return (<div id={tile.id} key={tile.id} className="tile"><img src={tile.img} className={tile.size}></img></div>)
      })}
    </div>
)
}

export default Board;
