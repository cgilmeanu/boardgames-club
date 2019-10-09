import React from "react";
import "./App.css";
import "./components/header/club-header.component";
import ClubHeader from "./components/header/club-header.component";

function App() {
  return (
    <div className="App">
      <ClubHeader></ClubHeader>
      <div className="App-container">
        <div className="card-container">
          <div className="box-item">
            <div className="boardgames box-content"></div>
            <div>
              <span>Board Games Night</span>
            </div>
          </div>
          <div className="box-item">
            <div className="dungeon-and-dragons box-content"></div>
            <div>
              <span>Dungeon and Dragons (DnD) Night</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
