import React, { useState } from 'react'

const Cell = ({ currentPlayer }) => {
  const [player, setPlayer] = useState("");

  return (
    <div className="cell" onClick={() => setPlayer(currentPlayer)}>
      {currentPlayer}
    </div>
  )
}

export default Cell
