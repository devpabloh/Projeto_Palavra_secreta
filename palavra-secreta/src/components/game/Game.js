import "../game/Game.css"

const Game = ({verifyLetter}) => {
  return (

    <div className="game">
       <p className="points">
        <span>Pontuação: 000</span>
       </p>
       <h1>Adivinhe a palavra:</h1>
       <h3 className="tip">
        dica sobre a palavra: <span>Dica...</span>
       </h3>
       <p>Você ainda tem xxx tentativa(s).</p>
       <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
       </div>
       <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form>
            <input type="text" name="latter" maxLength="1" required />
            <button>Jogar!</button>
        </form>
       </div>
       <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        <span>a, </span>
        <span>b, </span>
       </div>
    </div>
  )
}

export default Game