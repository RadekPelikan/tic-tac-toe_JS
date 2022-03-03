import React, { useState } from 'react'

const Board = ({ size }) => {
  size = Array.isArray(size) ? size : [size, size]
  const [board, setBoard] = useState(
    new Array(size[1]).fill(0).
      map((row, y) => new Array(size[0]).fill(0).map((element, x) => ""
      )))


  return (
    <>
      <div id="board" style={{ gridTemplateColumns: `repeat(${size[1]}, 1fr)` }}>
        {board.map((row, y) => {
          return row.map((element, x) => {
            return (
              <div className="cell" key={x}></div>)
          })
        })}
      </div>
    </>
  )
}

export default Board
