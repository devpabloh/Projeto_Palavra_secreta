import "../components/StartScreen.css"

const StartScren = ({startGame}) => {
  return (
   <div className="start">
     <h1>Palavra secreta</h1>
     <p>Clique no botão abaixo para começar a jogar!</p>
     <button onClick={startGame}>Começar o jogo</button>
   </div>
  )
}

export default StartScren