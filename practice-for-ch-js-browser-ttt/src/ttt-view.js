class View {
  constructor(game, el) {
    this.game = game
    this.setupBoard(el);
  }
  
  setupBoard(container) {
    let ele = document.createElement("ul");
    container.append(ele);
    let ul = document.querySelector("ul")
    for (let i = 0 ; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let li = document.createElement("li")
        li.innerText = "";
        li.setAttribute(pos, `${j}, ${y}`)
      }
      
      ul.append(li)
      ele.addEventListener("click", this.handleClick);
    }
  }
  
  handleClick(e) {
    let pos = e.target.pos
    this.game.playMove(pos)
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;