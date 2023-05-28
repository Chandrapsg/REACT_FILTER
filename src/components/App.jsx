import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
//1. Create entry component
//2.Create props to replace hard coded data
//3a. import the empjipedia const
//3b. Map through the emerjipedia array and render entry components

console.log(emojipedia);

function createEntry(emojiTerm){
  return(
    <Entry
    id = {emojiTerm.id}
    key = {emojiTerm.id}
    name = {emojiTerm.name}
    emoji = {emojiTerm.emoji}
    meaning = {emojiTerm.meaning}
    />
  );

}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
       
        { emojipedia.map(createEntry)} 
      </dl>
    </div>
  );

}

export default App;
