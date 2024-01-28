import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [textValue, setTextValue] = useState("Edit");
  const [playerName, setPlayerName] = useState(initialName);

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleEditName}
      />
    );
  }
  function handleEditClick(editValue) {
    setIsEditing((editing) => !editing);
    setTextValue(editValue);
    if(isEditing){
      onChangeName(symbol, playerName);
    }
  }

  function handleEditName(editName) {
    setPlayerName(editName.target.value);
  }

  console.log(playerName);
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleEditClick(isEditing ? "Edit" : "Save")}>
        {textValue}
      </button>
    </li>
  );
}
