import LetterGrid from "./Letter-grid";
import ButtonGrid from "./Button-grid";
import { useState } from "react";
/*
function Gameboard() {
  return (
    <div className="App">
     <h2>Gameboard</h2>
    </div>
  );
}*/
const Gameboard = ({secretword, maxError})=>{
  const[guessedLetters, setGuessedLetters] = useState([]);
  const[errorCount, setErrorCount] = useState(0);
  const[reset, setReset] = useState(false);

  const guessedLetterHandler = (value)=>{
    let val = value.toLowerCase();
    setGuessedLetters(prev=>[...prev, val]);
    if(secretword.indexOf(val) === -1){
      setErrorCount(errorCount + 1);
    }
  }

  return (
    <div>
      <p>남은 횟수:{maxError - errorCount}</p>
     <LetterGrid secretword={secretword} guessedLetters={guessedLetters}/>
     <ButtonGrid reset={reset} onclick={guessedLetterHandler} isShown={errorCount < maxError}/>
     {errorCount === maxError && <button onClick={()=>{
      setErrorCount(0);
      setGuessedLetters([]);
      setReset(true);
      if(reset){
        setReset(false);
      }
     }}>리셋</button>}
    </div>
  );
}

export default Gameboard;
