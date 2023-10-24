import React, { useEffect } from "react";
import { useState } from "react";
import HangmanDrawing from "./HangmanDrawing"
import HangmanWord from "./HangmanWord"
import Keyboard from "./Keyboard"
import words from "./wordList.json"

function App() {

    const [wordToGuess, setWordToGuess]=useState(
      () => {
        return words[Math. floor (Math. random() * words.length)]
      }
    );
    
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  
    const incorrectLetters = guessedLetters.filter(
          letter => !wordToGuess.includes(letter))
  console.log(wordToGuess)

  {/* Logica para conectar teclas*/}
      function addGuessedLetter(letter : string){
        
      }

      useEffect(()=>{
        const handler = (e: KeyboardEvent) => {
          const key = e.key
          //regex de la letra
          if(!key.match(/^[a-z]$/)) return

          e.preventDefault()
          addGuessedLetter(key)
        }

        document.addEventListener("keypress",handler)

        return() => {
        document.removeEventListener("keypress",handler)
        }
      })
  
  return (
    <div style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center"
    }}>
      <div style={{
        fontSize: "2rem",
        textAlign: "center"
      }}>
        Win or Lose
      </div>

      <HangmanDrawing numberofGuesses={incorrectLetters.length}/>
      <HangmanWord guessedLetters={guessedLetters} wordtoGuess={wordToGuess}/>
      <div style={{alignSelf:"stretch"}}>
        <Keyboard/>
      </div>
    </div>
  )
}

export default App
