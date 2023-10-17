export default function HangmanWord(){
    const word = "programacion"
    const guessedLetters = ["a","b","c","d","e"]
    return(
    <div style={{
        display:"flex",
        gap: ".25em",
        fontSize:"6rem",
        fontWeight:"bold",
        textTransform:"uppercase",
        fontFamily:"monospace"
    }}>

    {word.split("").map( (letter,index) => (
    <span style={{ borderBottom:".1em solidblack" }} key={index}>
        <span style={{ visibility:guessedLetters.includes(letter) 
                        ? "visible"
                        : "hidden"}}>
                {letter}
        </span>
    </span>
    ))}
    </div>
)}