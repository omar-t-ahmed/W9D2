class View {
  constructor(game, el) {
    this.game = game
    this.setupBoard(el);
  }
  
  setupBoard(container) {
    let ele = document.createElement("ul");
    ele.addEventListener("click", this.handleClick);
    container.append(ele);
    let ul = document.querySelector("ul")
    for (let i = 0 ; i < 9; i++) {
      let li = document.createElement("li")
      li.innerText = "";
      ul.append(li)
    }
    this.ele.addEventListener("click", function() {
      this.handleClick(e)
    });
  }
  
  handleClick(e) {
    this.game.playMove(e)
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;